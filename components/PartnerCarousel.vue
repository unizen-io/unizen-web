<template>
  <b-row class="partners">
    <b-col>
      <b-row class="pt-5">
        <b-col />
        <b-col>
          <h1 class="partners-text">
            Our strategic partners.
          </h1><br>
        </b-col>
        <b-col>
          <p class="partners-text">ZEN has aligned with key partners to provide best-in-class exchange, advisory and project support services. From enriched data feeds, to government compliance and incubation of new projects. All of this has been enabled by close collaborations with top-industry leaders in their respective domain.</p>
        </b-col>
        <b-col />
      </b-row>
      <div class="px-5 text-center">
        <hooper :settings="cardsHooper">
          <slide>
            <img src="~assets/img/partners/blockunify.png">
          </slide>
          <slide>
            <img src="~assets/img/partners/jun.png">
          </slide>
          <slide>
            <img src="~assets/img/partners/lunarcrush-text.png">
          </slide>
          <slide>
            <img src="~assets/img/partners/betrust-text.png">
          </slide>
          <hooper-navigation slot="hooper-addons" />
        </hooper>
      </div>
    </b-col>
  </b-row>
</template>

<script>
import { Hooper, Slide, Navigation as HooperNavigation } from 'hooper'
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

h1.partners-text {
    color: $dark !important;
    text-align: left;
    font-family: Montserrat;
    font-size: 3.4em !important;
    padding: 30px;
}

p.partners-text {
    font-size: 1.2em !important;
    padding: 30px;
    color: $dark;
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
