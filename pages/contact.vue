<template>
  <div
    style="background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);"
    class="min-h-screen"
  >
    <div class="max-w-5xl px-8 pt-24 pb-12 mx-auto">
      <h1
        style="font-family: Montserrat Medium !important;"
        class="py-12 mt-12 font-bold text-center contact text-tertiary"
      >
        Contact us
      </h1>
      <ErrorMessage
        v-if="status === STATUSES.REJECTED"
        :error-message="error.message"
      />
      <div
        v-else
        class="py-12"
      >
        <b-card class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
          We would love to talk to you about any business inquiry or partner proposal. If this relates to support for any of our exchange modules, please reach out to {{ `support@${PRODUCTION_DOMAIN}` }}
        </b-card>
        <br>
        <b-form
          name="contactus"
          @submit.prevent="sendForm"
        >
          <b-form-input
            id="input-1"
            v-model="name"
            name="name"
            novalidate="true"
            placeholder="What's your name?"
            size="lg"
            :state="nameState"
            trim
          />
          <br>
          <b-form-input
            id="input-2"
            v-model="email"
            placeholder="What's your e-mail?"
            name="email"
            size="lg"
            :state="emailState"
            trim
            required
          />
          <br>
          <b-form-textarea
            id="textarea-no-resize"
            v-model="message"
            placeholder="Enter a message..."
            rows="12"
            size="lg"
            :state="messageState"
            name="message"
            required
          />
          <br>
          <b-button
            :disabled="status === STATUSES.PENDING"
            variant="outline-primary"
            size="lg"
            class="w-full"
            type="submit"
          >
            {{ status === STATUSES.PENDING ? "Submitting..." : "Send" }}
          </b-button>
        </b-form>
      </div>
    </div>
    <h1
      v-if="status === STATUSES.RESOLVED"
      class="px-6 py-12 text-center text-primary"
    >
      Thank you, we got your submission!
    </h1>
  </div>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage'
import { createSEOTags } from '@/utils/helpers/seo'
import {
  CONTACT_US_FORM_SUBMISSION_ENDPOINT,
  PRODUCTION_DOMAIN
} from '@/config'
import STATUSES from '@/utils/constants/statuses'
import { PAGES } from '@/utils/constants/links'

export default {
  components: {
    ErrorMessage
  },

  data () {
    return {
      status: STATUSES.IDLE,
      error: null,
      name: '',
      email: '',
      message: '',
      reg: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
    }
  },

  computed: {
    nameState () {
      if (this.name.length >= 4) {
        return true
      } else {
        return null
      }
    },

    messageState () {
      if (this.message.length >= 10) {
        return true
      } else {
        return null
      }
    },

    invalidFeedback () {
      if (this.name.length > 0) {
        return 'Enter at least 4 characters.'
      }
      return 'Please enter something.'
    },

    emailState () {
      if (/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(this.email)) {
        return true
      } else {
        return null
      }
    }
  },

  created () {
    this.STATUSES = STATUSES
    this.PRODUCTION_DOMAIN = PRODUCTION_DOMAIN
  },

  methods: {
    async sendForm () {
      try {
        this.status = STATUSES.PENDING
        // TODO: could use `ohmyfetch` package
        const response = await fetch(CONTACT_US_FORM_SUBMISSION_ENDPOINT, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            message: this.message
          })
        })
        const jsonResponse = await response.json()
        if (jsonResponse.code !== 200) {
          throw new Error(`Something went wrong by ${jsonResponse.code}!`)
        }
        this.status = STATUSES.RESOLVED
      } catch (error) {
        this.status = STATUSES.REJECTED
        this.error = error
      }
    }
  },

  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Contact Us.',
      description: 'For business and partnerships inquiries.',
      slug: PAGES.contact.url
    })
  }
}
</script>
