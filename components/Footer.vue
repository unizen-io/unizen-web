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
    background-color: #2f4858;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='18' viewBox='0 0 100 18'%3E%3Cpath fill='%2311687f' fill-opacity='0.06' d='M61.82 18c3.47-1.45 6.86-3.78 11.3-7.34C78 6.76 80.34 5.1 83.87 3.42 88.56 1.16 93.75 0 100 0v6.16C98.76 6.05 97.43 6 96 6c-9.59 0-14.23 2.23-23.13 9.34-1.28 1.03-2.39 1.9-3.4 2.66h-7.65zm-23.64 0H22.52c-1-.76-2.1-1.63-3.4-2.66C11.57 9.3 7.08 6.78 0 6.16V0c6.25 0 11.44 1.16 16.14 3.42 3.53 1.7 5.87 3.35 10.73 7.24 4.45 3.56 7.84 5.9 11.31 7.34zM61.82 0h7.66a39.57 39.57 0 0 1-7.34 4.58C57.44 6.84 52.25 8 46 8S34.56 6.84 29.86 4.58A39.57 39.57 0 0 1 22.52 0h15.66C41.65 1.44 45.21 2 50 2c4.8 0 8.35-.56 11.82-2z'%3E%3C/path%3E%3C/svg%3E");
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
