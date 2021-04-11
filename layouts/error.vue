<template>
  <h1 class="mt-40 text-center">
    {{ error.statusCode === 404 ? 'This page could not be found.' : 'There was an unknown error.' }}
  </h1>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  }
}
</script>
