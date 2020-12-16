<template>
  <div class="header">
    <canvas id="canvas" />
    <div id="homeView" class="current-state ajaxhidden" style="visibility: inherit;">
      <div class="layout layout-homepage">
        <article class="slideshow">
          <div class="item">
            <h2 class="title gradient-text">
              ZEN
            </h2>
            <h2 class="sub-title">
              Smart Exchange Ecosytem
            </h2>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      script: [
        {
          src: 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r68/three.min.js'
        },
        {
          src: 'waves.js'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

.header {
    margin-bottom: 20rem;
}

h2.title {
    font-size: 6em;
    text-align: center;
    font-family: Montserrat;
    text-shadow: 0px 2px 27px rgba(0, 245, 163, 0.397);
}
h2.sub-title {
    text-align: center;
    color: $dark;
}

.gradient-text {
  /* Fallback: Set a background color. */
  background-color: $primary;

  /* Create the gradient. */
  background-image: linear-gradient(90deg, $primary, $secondary);

  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

canvas{
  position: relative;
  top:0;
  left:0;
  z-index:-1;
}
#homeView {
    width: auto;
   -webkit-animation:fadeInUp 2s; /* Safari & Chrome */
  animation:fadeInUp 2s;
}
.layout-homepage {
    height: auto;
    overflow-x: hidden;
    overflow-y: hidden;
    -webkit-perspective: 500px;
    -moz-perspective: 500px;
    perspective: 500px;
    width: 100%;
}
.layout-homepage .slideshow {
    height: auto;
}
.layout-homepage .slideshow .item {
margin-top: 20%;
}
.visual {
    display: block;
    margin: 0 auto;
    width: 145px;
    height: 72px;
}

@-webkit-keyframes fadeInUp{
  0%{
    opacity: 0;
    -webkit-transform: translateY(80px);
  }
  100%{
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>
