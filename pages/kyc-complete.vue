<template>
  <div class="kyc">
    <nuxt-picture
      class="kyc-background"
      loading="lazy"
      width="2400"
      height="1594"
      src="/img/kyc.jpg"
      alt="KYC"
    />
    <div class="container mx-auto px-8 min-h-screen grid place-items-center">
      <b-card class="kyc-card text-center w-1/3 shadow-sm bg-unizenGray bg-opacity-20 backdrop-blur">
        <!-- TODO: should export as an SVG file and use `currentColor` -->
        <svg
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 130.2 130.2"
          class="text-secondary"
        >
          <circle
            class="path circle"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
            stroke-miterlimit="10"
            cx="65.1"
            cy="65.1"
            r="62.1"
          />
          <polyline
            class="path check"
            fill="none"
            stroke="currentColor"
            stroke-width="6"
            stroke-linecap="round"
            stroke-miterlimit="10"
            points="100.2,40.2 51.5,88.8 29.8,67.5 "
          />
        </svg>
        <br>
        <h3 class="text-3xl success">
          Thank you!
        </h3>
        <h5 class="text-xl">
          Your KYC application has been submitted for review by the Fractal Team. Please check your email for further steps.
          <br><br>
          Warmest regards,<br>
          The Unizen Team
        </h5>
        <br>
        <nuxt-link
          class="bg-secondary h-12 inline-flex justify-center items-center rounded text-xl px-4 text-tertiary-dark"
          :to="PAGES.home.url"
        >
          Return to Unizen
        </nuxt-link>
        <br>
        <br>
      </b-card>
    </div>
  </div>
</template>

<script>
import { PAGES } from '@/utils/constants/links'

export default {
  layout: 'kyc',

  created () {
    this.PAGES = PAGES
  }
}
</script>

<style lang="scss">
.kyc {
  position: relative;
}

.kyc-background > img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.kyc-card {
  min-width: 350px !important;
}

svg {
  width: 100px;
  display: block;
  margin: 40px auto 0;
}

.path {
  stroke-dasharray: 1000;
  stroke-dashoffset: 0;
  &.circle {
    -webkit-animation: dash .9s ease-in-out;
    animation: dash .9s ease-in-out;
  }
  &.line {
    stroke-dashoffset: 1000;
    -webkit-animation: dash .9s .35s ease-in-out forwards;
    animation: dash .9s .35s ease-in-out forwards;
  }
  &.check {
    stroke-dashoffset: -100;
    -webkit-animation: dash-check .9s .35s ease-in-out forwards;
    animation: dash-check .9s .35s ease-in-out forwards;
  }
}

@-webkit-keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@keyframes dash {
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
}

@-webkit-keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}

@keyframes dash-check {
  0% {
    stroke-dashoffset: -100;
  }
  100% {
    stroke-dashoffset: 900;
  }
}
</style>
