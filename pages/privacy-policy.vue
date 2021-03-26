<template>
  <div class="mt-12 pt-12">
    <div class="container mx-auto px-8 py-12 mt-12 mb-12">
      <h1 class="privacy">
        Privacy Policy
      </h1>
      <h2 class="privacy">
        Privacy is important, but cookies are delicous.
      </h2>
      <b-card class="shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
        <div class="container mx-auto px-8">
          <p class="privacy">
            Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. <br><br>
            If you chose to opt in, the ZEN Team will use the following Google Analytics cookies to collect information on how you are using our site: <br><br>
            <ul>
              <li>_ga</li>
              <li>_gid</li>
            </ul>
            <br>
            The information collected using these cookies will allow me to see which articles are sesonating with my readers and enable me to improve the site and write better, more useful content.<br><br>
            You can read an overview of Google's privacy overview and data safeguarding article <a href="https://policies.google.com/privacy?hl=en-US">here</a>.<br><br>
            You can also download a <a href="https://chrome.google.com/webstore/detail/google-analytics-opt-out/fllaojicojecljbmefodhfapmkghcbnh">browser add-on</a> from Google to opt out of Google Analytics entirely.
          </p>
        </div>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
p.privacy {
  font-family: Montserrat Medium;
  font-size: 16px;
  text-align: left;
}

h1.privacy {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-weight: bold;
  text-align: center;
}

h2.privacy {
  font-family: Montserrat Medium !important;
  color: $dark !important;
  font-size: 20px;
  text-align: center;
  margin-bottom: 6rem;
}
</style>
