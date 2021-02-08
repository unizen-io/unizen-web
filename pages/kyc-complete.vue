<template>
  <div class="bg-img">
    <b-container>
      <b-row class="vh-100 text-center" align-v="center">
        <b-col sm />
        <b-col sm>
          <b-card class="kyc">
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
              <circle
                class="path circle"
                fill="none"
                stroke="#00f5a4"
                stroke-width="6"
                stroke-miterlimit="10"
                cx="65.1"
                cy="65.1"
                r="62.1"
              />
              <polyline
                class="path check"
                fill="none"
                stroke="#00f5a4"
                stroke-width="6"
                stroke-linecap="round"
                stroke-miterlimit="10"
                points="100.2,40.2 51.5,88.8 29.8,67.5 "
              />
            </svg>
            <br>
            <h3 class="success">
              Thank you!
            </h3>
            <h5>
              Your KYC application has been submitted for review by the Fractal Team. Please check your email for further steps.
              <br><br>
              Warmest regards,<br>
              The Unizen Team
            </h5>
            <br>
            <b-button variant="secondary" size="lg" to="/">
              Return to Unizen
            </b-button><br><br>
          </b-card>
        </b-col>
        <b-col sm />
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: 'kyc'
}
</script>

<style lang="scss">

.bg-img {
    background-image: url(../assets/img/kyc.jpg);
    background-position: center center;
    background-repeat:  no-repeat;
    background-attachment: fixed;
    background-size:  cover;
    height: 100% !important;
}

.kyc {
    text-align: center;
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
