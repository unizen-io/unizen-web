<template>
  <div>
    <b-row class="footer">
      <b-container>
        <b-row class="py-5">
          <b-col>
            <h2 class="footer-text">
              General
            </h2>
            <a class="footer-text">
              About Us</a><br>
            <a class="footer-text">Team</a><br>
            <a class="footer-text">ZCX Token</a><br>
            <a class="footer-text">CoinMarketCap</a><br>
            <a class="footer-text">CoinGecko</a><br>
            <a class="footer-text">Contact Us</a>
          </b-col>
          <b-col>
            <h2 class="footer-text">
              Business
            </h2>
            <a class="footer-text">
              Listing Application</a><br>
            <a class="footer-text">Business Contact</a><br>
            <a class="footer-text">Partnership Inquiry</a>
          </b-col>
          <b-col>
            <h2 class="footer-text">
              Technology
            </h2>
            <a class="footer-text">
              API Doc</a><br>
            <a class="footer-text">SDK</a><br>
            <a class="footer-text">GitHub</a><br>
            <a class="footer-text">Litepaper</a>
          </b-col>
          <b-col>
            <h2 class="footer-text">
              Social
            </h2>
            <ul class="social-networks bounce">
              <li><a href="https://telegram.com" class="icon-telegram">Telegram</a></li>
              <li><a href="https://www.linkedin.com/" class="icon-linkedin">LinkedIn</a></li>
              <li><a href="https://twitter.com/" class="icon-twitter">Twitter</a></li>
              <li><a href="https://github.com" class="icon-github">GitHub</a></li>
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <div />
    </b-row>
    <b-row style="color: #f5f5f5;" class="bottom text-center pl-5 text-center" align-v="center">
      © 2017 - 2021 zencex.com. All rights reserved.
    </b-row>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
h2.footer-text {
    color: $light !important;
    font-size: 1.4em;
}

a.footer-text {
    color: $primary !important;
    cursor: pointer;
}

.bottom {
    background-color: #29404e;
    height: 4rem !important;
}

.footer {
    min-height: 18rem;
    background-color: $dark;
}

@font-face {
font-family: 'icomoon';
src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/icomoon.eot?3qkin2');
src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/icomoon.eot?#iefix3qkin2') format('embedded-opentype'),
url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/icomoon.woff?3qkin2') format('woff'),
url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/93/icomoon.ttf?3qkin2') format('truetype'),
url('fhttps://s3-us-west-2.amazonaws.com/s.cdpn.io/93/icomoon.svg?3qkin2#icomoon') format('svg');
font-weight: normal;
font-style: normal;
}

.social-networks {
  margin: 0 0 15px;
  padding: 0;
  font-size: 0;
  text-align: center;

  li {
    display: inline-block;
  }

  a {
    display: block;
    position: relative;
    margin: 0 7px;
    width: 48px;
    height: 48px;
    font-size: 0;
    line-height: 0;
    text-align: center;
    text-decoration: none;

    &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 100%;
      height: 100%;
      margin-top: -50%;
      margin-left: -50%;
      border-radius: 100px;
      background-color: #29404E;
      transition: all 400ms;
    }

    &:after {
      position: relative;
      display: block;
      font-family: 'icomoon';
      speak: none;
      font-style: normal;
      font-weight: normal;
      font-variant: normal;
      text-transform: none;
      line-height: 1;
      color: #fff;
      font-size: 18px;
      line-height: 46px;
    }

    &:hover, &:focus {
      text-decoration: none;
    }
  }

  &.spin-icon a:hover:after, &.spin-icon a:focus:after {
    transition: transform 0.4s ease-out;
    transform: rotateZ(360deg);
  }

  &.square a:hover:before, &.square a:focus:before {
    border-radius: 0;
  }

  &.bounce a:hover, &.bounce a:focus {
    animation: bounce 1s;
  }

  $networks: linkedin '\eac9' #0077b5, twitter '\e618' #00b0ed, github '\eab1' #4183c4, instagram '\e604' #3f729b, vimeo '\ea9c' #1ab7ea, telegram '\ea95' #0088cc, twitch '\ea9b' #6441a5, pinterest '\e605' #cc2127;

  @each $network in $networks {
     .icon-#{nth($network, 1)} {
       &:after {
         content: '#{nth($network, 2)}';
      }

      &:hover:before, &:focus:before {
        background: nth($network, 3);
      }
    }
  }
}

@keyframes bounce {
  0%, 20%, 53%, 80%, 100% {
    transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    transform: translate3d(0,0,0);
  }

  40% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -6px, 0);
  }

  70% {
    transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
    transform: translate3d(0, -4px, 0);
  }

  90% {
    transform: translate3d(0,-2px,0);
  }
}

</style>
