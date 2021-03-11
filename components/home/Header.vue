<template>
  <div id="header" class="header">
    <div style="position: fixed;">
      <div id="canvas-project" static="true" />
    </div>
    <div id="homeView" class="current-state ajaxhidden" style="visibility: inherit;">
      <div class="layout layout-homepage">
        <article class="slideshow">
          <div class="item">
            <!-- <h2 class="title gradient-text">
              <b>unizen</b>
            </h2> -->

            <b-img-lazy center class="d-block d-md-none" fluid src="~assets/img/green_logo_text.png" />
            <center><img class="d-md-block d-none" src="~assets/img/website_header.png"></center>
            <h2 class="sub-title">
              Smart Exchange Ecosystem
            </h2>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import waves from '@/static/waves3'
export default {
  data () {
    return {
      mainProps: {}
    }
  },
  mounted () {
    if (this.$route.name === 'index') {
      waves.methods.initAnimation()
      waves.methods.animate()
    } else {
      waves.methods.stopAnimation()
    }
  }
}
</script>

<style lang="scss">
.header {
  margin-bottom: 18rem;
}

h2.title {
  font-size: 8em;
  text-align: center;
  font-family: Arista Alt;
  text-shadow: 0px 2px 27px #00f5a365;
}
h2.sub-title {
  margin-top: -0.5rem;
  text-align: center;
  color: $dark;
}

.gradient-text {
  /* Fallback: Set a background color. */
  background-color: $primary;

  /* Create the gradient. */
  background-image: linear-gradient(to right bottom, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4);
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  // TODO: autoprefixer automatically set-up by Nuxt
  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

#canvas-project {
  position: absolute !important;
  margin-top: -330px;
  height: 1000px !important;
  width: 100% !important;
  z-index: -1;
}
#homeView {
  width: auto;
  -webkit-animation:fadeIn 2s; /* Safari & Chrome */
  animation:fadeIn 2s;
}

.layout-homepage {
  height: auto;
  // overflow-x: hidden;
  // overflow-y: hidden;
  -webkit-perspective: 500px;
  -moz-perspective: 500px;
  perspective: 500px;
  width: 100%;
}
.layout-homepage .slideshow {
  height: auto;
}
.layout-homepage .slideshow .item {
  margin-top: 14rem;
}
.visual {
  display: block;
  margin: 0 auto;
  width: 145px;
  height: 72px;
}

@-webkit-keyframes fadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}
</style>
