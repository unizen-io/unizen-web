<template>
  <div class="partners">
    <div class="container mx-auto px-4">
      <div class="pt-12 flex flex-wrap">
        <div
          class="p-4 w-full md:w-1/2"
          data-aos="fade-in"
          data-aos-duration="2000"
        >
          <h1
            style="font-family: Montserrat;"
            class="text-6xl text-unizenLight"
          >
            Our strategic partners.
          </h1>
        </div>
        <div
          class="p-4 w-full md:w-1/2"
          data-aos="fade-in"
          data-aos-duration="3000"
        >
          <p class="text-xl text-unizenLight">
            Unizen has aligned with key partners to provide best-in-class exchange, advisory and project support services. From enriched data feeds, to government compliance and incubation of new projects. All of this has been enabled by close collaborations with top-industry leaders in their respective domain.
          </p>
        </div>
      </div>
    </div>
    <div class="text-center">
      <Hooper :settings="CARDS_HOOPER">
        PARTNER_IMAGES
        <Slide
          v-for="partnerImage in PARTNER_IMAGES"
          :key="partnerImage.src"
        >
          <nuxt-img
            format="webp"
            :width="partnerImage.width"
            :height="partnerImage.height"
            :src="partnerImage.src"
            :alt="partnerImage.alt"
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

  created () {
    this.PARTNER_IMAGES = [
      {
        width: 337,
        height: 70,
        src: '/img/partners/blockunify.png',
        alt: 'Blockunify'
      },
      {
        width: 261,
        height: 70,
        src: '/img/partners/jun.png',
        alt: 'Jun'
      },
      {
        width: 240,
        height: 70,
        src: '/img/partners/lunarcrush.png',
        alt: 'Lunarcrush'
      },
      {
        width: 300,
        height: 70,
        src: '/img/partners/betrust.png',
        alt: 'Betrust'
      }
    ]

    this.CARDS_HOOPER = {
      itemsToSlide: 1,
      itemsToShow: 4,
      infiniteScroll: true,
      playSpeed: 8000,
      autoPlay: true,
      wheelControl: false
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
