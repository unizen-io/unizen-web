<template>
  <div>
    <div class="footer-primary">
      <div class="container mx-auto flex flex-wrap py-12 px-4">
        <div class="px-4 w-1/2 md:w-1/4">
          <h2 class="footer-text">
            General
          </h2>
          <nuxt-link to="/blog" class="footer-text">
            Blog
          </nuxt-link><br>
          <nuxt-link to="/team" class="footer-text">
            Team
          </nuxt-link><br>
          <nuxt-link to="/token" class="footer-text">
            ZCX Token
          </nuxt-link><br>
          <nuxt-link to="/wenzen" class="footer-text">
            Tournament of Altcoins
          </nuxt-link><br>
          <a class="footer-text footer-disabled">CoinMarketCap</a><br>
          <a class="footer-text footer-disabled">CoinGecko</a><br>
          <nuxt-link to="/contact" class="footer-text">
            Contact Us
          </nuxt-link>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h2 class="footer-text">
            Business
          </h2>
          <a class="footer-text footer-disabled">
            Listing Application</a><br>
          <nuxt-link to="/contact" class="footer-text">
            Business Contact
          </nuxt-link><br>
          <nuxt-link to="/contact" class="footer-text">
            Partnership Inquiry
          </nuxt-link>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h2 class="footer-text">
            Technology
          </h2>
          <a class="footer-text footer-disabled">
            API Doc</a><br>
          <a class="footer-disabled footer-text">SDK</a><br>
          <a href="https://github.com/unizen-io" class="footer-text">GitHub</a><br>
          <a class="footer-disabled footer-text">Litepaper</a>
        </div>
        <div class="px-4 w-1/2 md:w-1/4">
          <h2 class="footer-text">
            Social
          </h2>
          <ul class="social-networks bounce">
            <li><a href="https://t.me/unizen_io" class="icon-telegram">Telegram</a></li>
            <li><a href="https://www.linkedin.com/company/unizen-io" class="icon-linkedin">LinkedIn</a></li>
            <li><a href="https://twitter.com/unizen_io" class="icon-twitter">Twitter</a></li>
            <li><a href="https://github.com/unizen-io" class="icon-github">GitHub</a></li>
            <li><a href="https://unizen-io.medium.com/" class="icon-medium">Medium</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div
      style="color: #f5f5f5;"
      class="footer-secondary text-center h-16 px-12 flex items-center"
    >
      © 2021 - 2022 Unizen.io. All rights reserved.
    </div>
  </div>
</template>

<style lang="scss">
.footer-disabled {
  opacity: 0.4;
  pointer-events: none;
}

h2.footer-text {
  color: $light !important;
  font-size: 1.4em;
  margin-top: 20px;
}

a.footer-text {
  color: $primary !important;
  cursor: pointer;
}

.footer-secondary {
  background-color: #29404e;
}

.footer-primary {
  background-color: $dark;
  min-height: 18rem;
}

.social-networks {
  margin: 0 0 15px;
  padding: 0;
  font-size: 0;
  text-align: left;

  li {
    display: inline-block;
  }

  a {
    display: block;
    position: relative;
    margin: 7px 7px;
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

  $networks: linkedin '\eac9' #0077b5, cloneicon '\f24d' #000, twitter '\ea96' #00b0ed, github '\eab0' #4183c4, instagram '\e604' #3f729b, vimeo '\ea9c' #1ab7ea, telegram '\ea95' #0088cc, twitch '\ea9b' #6441a5, pinterest '\e605' #cc2127, medium '\f23a' #ffbd17;

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

  .icon-medium {
    &:after {
      font-family: 'FontAwesome' !important;
      font-weight: 400 !important;
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
