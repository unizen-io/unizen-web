<template>
  <div class="default-template no-horizontal-scroll">
    <NavBar />
    <Nuxt />
    <CookieAlert />
    <Footer />
  </div>
</template>

<style>
.no-horizontal-scroll {
    overflow-x: hidden;
    width: 100%
}
</style>
