<template>
  <div class="partners">
    <div class="container mx-auto px-20">
      <div class="pt-12 flex flex-wrap">
        <div class="px-4 w-full md:w-1/2">
          <h1
            style="color: #f5f5f5 !important; font-family: Montserrat;"
            class="text-6xl p-7"
          >
            Our strategic partners.
          </h1><br>
        </div>
        <div class="px-4 w-full md:w-1/2">
          <p
            style="color: #f5f5f5;"
            class="text-xl p-7"
          >
            Unizen has aligned with key partners to provide best-in-class exchange, advisory and project support services. From enriched data feeds, to government compliance and incubation of new projects. All of this has been enabled by close collaborations with top-industry leaders in their respective domain.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <Hooper :settings="cardsHooper">
        <Slide>
          <nuxt-img
            loading="lazy"
            format="webp"
            width="337"
            height="70"
            src="/img/partners/blockunify.png"
            alt="Blockunify"
          />
        </Slide>
        <Slide>
          <nuxt-img
            loading="lazy"
            format="webp"
            width="261"
            height="70"
            src="/img/partners/jun.png"
            alt="Jun"
          />
        </Slide>
        <Slide>
          <nuxt-img
            loading="lazy"
            format="webp"
            width="240"
            height="70"
            src="/img/partners/lunarcrush.png"
            alt="Lunarcrush"
          />
        </Slide>
        <Slide>
          <nuxt-img
            loading="lazy"
            format="webp"
            width="300"
            height="70"
            src="/img/partners/betrust.png"
            alt="Betrust"
          />
        </Slide>
        <HooperNavigation slot="hooper-addons" />
      </Hooper>
    </div>
  </div>
</template>

<script>
// TODO: double-check better carousels
import {
  Hooper,
  Slide,
  Navigation as HooperNavigation
} from 'hooper'
import 'hooper/dist/hooper.css'

export default {
  components: {
    Hooper,
    Slide,
    HooperNavigation
  },

  data () {
    return {
      cardsHooper: {
        itemsToSlide: 1,
        itemsToShow: 4,
        infiniteScroll: true,
        playSpeed: 8000,
        autoPlay: true,
        wheelControl: false
      }
    }
  }
}
</script>

<style lang='scss'>
.partners {
  background-image: linear-gradient(to right, #00afae, #00b6b0, #00bdb1, #00c3b1, #00cab1, #00d0b1, #00d6b0, #00dcaf, #00e2ad, #00e9ab, #00efa8, #00f5a4) !important;
}

.hooper-slide {
  height: 200px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-size: 30px;
  border: none;
  border-radius: 10px;
  outline: none;
}
.hooper-next,
.hooper-prev {
  color: $light;
}

*:focus {
  outline: none !important;
  border: none;
}
</style>
