<template>
  <div class="container pt-8 px-8 mx-auto">
    <div
      style="min-height: 42rem;"
      class="relative shadow-md flex"
    >
      <div class="md:flex md:flex-wrap py-12">
        <div class="md:w-1/2">
          <h1
            style="font-family: Montserrat;"
            class="p-7 text-5xl lg:text-7xl text-unizenGray-light"
            data-aos="fade-in"
            data-aos-duration="2000"
          >
            Unifying the trading experience for traders and institutions alike.
          </h1>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between items-center">
          <p
            class="p-7 text-xl text-unizenGray-light"
            data-aos="fade-in"
            data-aos-duration="3000"
          >
            Retail traders are spending a great many hours every day to stay in touch with the latest market conditions and social sentiment. They also typically hop between multiple exchanges. It’s a very time-consuming, stressful, and sometimes risky activity. At Unizen, we want to make all digital assets available under the same roof.
            <br><br>
            Institutional traders are hesitant about entering the crypto market due to low liquidity, security, and accessibility of existing exchanges. Unizen has institution-oriented modules whereby organizations, banks, funds, and governments can all sell and buy digital assets, relying on fully compliant infrastructure and listings.
          </p>
          <a
            href="https://app.unizen.io"
            target="_blank"
            class="wenzen-link w-72 h-14 rounded grid place-items-center text-base text-white no-underline m-7"
          >
            Get started!
          </a>
        </div>
      </div>
      <nuxt-picture
        class="zen-background"
        loading="lazy"
        width="1920"
        height="1281"
        src="/img/zen-background.jpg"
        alt="Zen background"
      />
    </div>
  </div>
</template>

<style lang="scss">
.zen-background > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
  z-index: -2;
}

// TODO: should avoid duplicating
a.wenzen-link {
  position: relative;
  background-image: linear-gradient(to right, #00f5a4, #00e8ac, #00dcb2, #00ceb4, #00c1b3, #00c1b3, #00c1b3, #00c1b3, #00ceb4, #00dcb2, #00e8ac, #00f5a4);    background-size: 400%;
}
a.wenzen-link:hover {
  animation: animate 8s linear infinite;
  text-decoration: none;
}
@keyframes animate {
  0% {
    background-position: 0%;
  }
  100% {
    background-position: 400%;
  }
}
a.wenzen-link:before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  bottom: -5px;
  right: -5px;
  z-index: -1;
  background-image: linear-gradient(to right, #00f5a4, #00e8ac, #00dcb2, #00ceb4, #00c1b3, #00c1b3, #00c1b3, #00c1b3, #00ceb4, #00dcb2, #00e8ac, #00f5a4);    background-size: 400%;
  background-size: 400%;
  border-radius: 40px;
  opacity: 0;
  transition: 1s;
}
a.wenzen-link:hover:before {
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
</style>
