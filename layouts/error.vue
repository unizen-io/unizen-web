<template>
  <div class="text-center">
    <h1 class="mt-40">
      {{ error.statusCode === 404 ? 'Page not found' : 'An error occurred' }}
    </h1>
    <nuxt-link :to="PAGES.home.url">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
import { PAGES } from '@/utils/constants/links'

export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },

  created () {
    this.PAGES = PAGES
  }
}
</script>
