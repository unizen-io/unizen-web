<template>
  <div class="layout-default">
      <div class="pt-4 mt-12">
        <center>
            <div class="mt-12 pt-12">
                <h1 v-if="error.statusCode === 404">This page could not be found</h1>
                <h1 v-else>There was an unknown error</h1>
            </div>
        </center>
      </div>
      <div tyle="padding-bottom: 200px;" />
      <br><br><br>
  </div>
</template>

<script>

export default {
  props: ['error']
}
</script>
