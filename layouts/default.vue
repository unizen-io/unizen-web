<template>
  <div class="no-horizontal-scroll">
    <NavBar />
    <Nuxt />
    <CookieAlert />
    <Footer />
  </div>
</template>

<style>
.no-horizontal-scroll {
  /* TODO: hack for now */
  overflow-x: hidden;
  width: 100%;
}
</style>
