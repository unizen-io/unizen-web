<template>
  <div
    id="header"
    ref="header"
    style="margin-bottom: 428px;"
  >
    <div style="position: fixed;">
      <div
        id="canvas-project"
        ref="canvasProject"
      />
    </div>
    <div
      data-aos="fade-in"
      data-aos-duration="2000"
    >
      <div class="layout layout-homepage">
        <article class="slideshow">
          <div class="item">
            <nuxt-img
              class="mx-auto md:max-w-lg"
              format="webp"
              width="1263"
              height="197"
              src="/img/green-text-logo-large.png"
              alt="Unizen"
            />
            <h2 class="text-3xl text-center text-tertiary mt-2">
              Smart CeDeFi Ecosystem
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
    // MEMO: https://forum.vuejs.org/t/document-getelementbyid-in-shadow-dom-custom-web-element/59957
    const canvasProject = this.$refs.canvasProject
    const header = this.$refs.header
    header.appendChild(canvasProject)
    waves.methods.initAnimation(canvasProject)
    waves.methods.animate()
  },

  beforeDestroy () {
    waves.methods.stopAnimation()
  }
}
</script>

<style lang="scss">
h2.title {
  font-size: 8em;
  text-align: center;
  font-family: Arista Alt;
}

// ray test touch <
#canvas-project {
  position: absolute !important;
  margin-top: -330px;
  height: 1000px !important;
  width: 100% !important;
  z-index: -1;
}
// ray test touch >

.layout-homepage {
  height: auto;
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
</style>
