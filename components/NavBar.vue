<template>
  <div>
    <b-navbar toggleable="lg" fixed="top" type="light" class="navbar-modified">
      <b-navbar-brand href="#">
        <img src="~/assets/img/mini_logo.png" class="d-inline-block align-top mr-1" alt="Logo">
        <span class="logo-text"><b>ZEN</b>EXCHANGE</span>
      </b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" />

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item class="ml-auto" href="#">
            HOME
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#">
            TRADE
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#" disabled>
            ZENX LABS
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#" disabled>
            FLEXIBLE STAKING
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#">
            TEAM
          </b-nav-item>
          <b-nav-item class="ml-auto" href="#">
            CONTACT
          </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.logo-text {
    color: $primary !important;
    text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}

.navbar-modified {
    // background: rgba(219, 219, 219, 0.185) !important;
    // backdrop-filter: blur(15px) !important;
    // box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
    box-shadow: 0 0 30px 0 rgba(196, 202, 214, 0.5) !important;
    min-height: 5rem;
    z-index: 99999 !important;
    position: sticky !important;
}

.nav-item.nav-item.nav-item a {
  font-family: Lato Regular !important;
  font-size: 0.9em;
  color: $dark;
  -o-transition:.5s;
  -ms-transition:.5s;
  -moz-transition:.5s;
  -webkit-transition:.5s;
  /* ...and now for the proper property */
  transition:.5s;
} a:hover {
    color: $primary !important;
    text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}

</style>
