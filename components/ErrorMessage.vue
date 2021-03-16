
<template>
  <p class="text-red-500">
    {{ errorMessage }}
  </p>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      default: ''
    }
  }
}
</script>
