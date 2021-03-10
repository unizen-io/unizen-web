<template>
  <div class="main">
    <b-row>
      <b-container class="py-5 my-5">
        <h1 class="blog py-5 mt-5">
          Contact.
        </h1>
        <br>
        <b-col />
        <b-col>
          <b-card>
            We would love to talk to you about any business inquiry or partner proposal. If this relates to support for any of our exchange modules, please reach out to support@unizen.io.
          </b-card>
          <br>
          <b-form
            action="/thanks/"
            name="contactus"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
          >
            <input type="hidden" name="form-name" value="contactus">
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
              type="radio"
              name="email"
              size="lg"
              :state="emailState"
              trim
            />
            <br>
            <b-form-textarea
              id="textarea-no-resize"
              v-model="text"
              placeholder="Enter a message..."
              rows="12"
              size="lg"
              :state="textState"
              name="message"
            />
            <br>
            <b-button variant="outline-primary" size="lg" class="contact" type="submit">
              Send
            </b-button>
          </b-form>
        </b-col>
        <b-col />
      </b-container>
    </b-row>
  </div>
</template>

<script>
import createSEOTags from '@/components/Utility/SEO'

export default {
  data () {
    return {
      name: '',
      email: '',
      text: '',
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
    textState () {
      if (this.text.length >= 10) {
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
  methods: {

  },
  head () {
    return createSEOTags({
      title: 'Unizen: Smart Exchange Ecosystem - Contact Us.',
      description: 'For business and partnerships inquiries.',
      slug: 'contact'
    })
  }
}
</script>

<style lang="scss">
.main {
  background-image: linear-gradient(to bottom, #f5f5f5, #f4f4f4, #f2f3f2, #f1f1f1, #f0f0f0);
  min-height: 1000px;
}
.contact {
  width: 100% !important;
}
</style>
