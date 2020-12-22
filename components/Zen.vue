<template>
  <b-container>
    <b-row class="mt-5 zen pt-5 macbook">
      <b-col>
        <div class="text-box mt-5">
          <b-card-body>
            <p class="zen-text">
              A new class of digital asset exchange that provides global traders and retail investors with access to exciting blockchain projects through the combined functionality of a secure CEX, DEX, AI-driven social sentiment indicators and Binance-level liquidity: all in one seamless user experience.
            </p>
          </b-card-body>
          <b-list-group flush>
            <b-list-group-item href="#">
              ✔️ High regulatory compliance
            </b-list-group-item>
            <b-list-group-item href="#">
              ✔️ Fast listing times
            </b-list-group-item>
            <b-list-group-item style="border-bottom-left-radius: 5px;border-bottom-right-radius: 5px;" href="#">
              ✔️ Highly competitive listing and trading fees
            </b-list-group-item>
          </b-list-group>
        </div>
      </b-col>
      <b-col />
      <b-col />
    </b-row>
  </b-container>
  <!-- <div class="float-right macbook" /> -->
</template>

<script>
export default {

}
</script>

<style lang="scss">
.zen {
    background: #fff;
    height: 900px;
}

a.zen {
  text-decoration: none;
  display: inline-table;
  color: $dark;
}

a.zen:after {
  content: "";
  border-bottom: 0.15em solid $secondary;
  display: table-caption;
  caption-side: bottom;
  position: relative;
  margin-top:-0.15em;
}

h3.zen-text {
    color: $dark !important;
    text-align: left;
    font-family: 'D DIN';
    font-size: 1.4em !important;
    padding: 30px;
}

p.zen-text {
    font-size: 1.2em !important;
    color: $dark;
}

p.zen-subtitle {
    font-size: 1.2em !important;
    color: $dark;
    text-align: center;
}

p.zen-text-small {
    font-size: 1em !important;
    padding: 0px 30px 30px 30px;
    color: $dark;
    text-align: center;
}

.macbook {
    background-image: url('../assets/img/Macbook.png');
    background-size: cover;
    width: 1920px;
}

.text-box {
  border: none !important;
  border-radius: 5px !important;
  background: rgba(219, 219, 219, 0.185) !important;
  backdrop-filter: blur(15px);
  box-shadow: rgba(0, 0, 0, 0.04) 0px 0px 20px 0px !important;
  -webkit-animation:fadeInUp 3s; /* Safari & Chrome */
  animation:fadeInUp 3s;
}

</style>
