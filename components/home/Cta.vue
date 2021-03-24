<template>
  <div
    style="min-height: 24rem;"
    class="container px-8 mx-auto"
  >
    <div class="relative shadow-md flex">
      <div class="md:flex md:flex-wrap py-12">
        <div class="md:w-1/2">
          <h1
            style="color: #f5f5f5 !important; font-family: Montserrat;"
            class="p-7 text-6xl"
          >
            Providing a zen state of mind for traders
          </h1>
        </div>
        <div class="md:w-1/2 flex flex-col justify-between items-center">
          <p
            style="color: #f5f5f5;"
            class="p-7 text-xl"
          >
            Traders are spending hours everyday to stay in touch with the latest market conditions and social sentiment. They also typically hop between multiple exchanges.
            It’s a very time consuming, stressful and sometimes a risky activity, that most traders do as a part-time occupation, which limits their personal time with family and other self-healing activities. At Unizen we want to make all digital assets available under the same roof.
          </p>
          <nuxt-link
            to="/wenzen"
            class="wenzen-link w-72 h-14 rounded grid place-items-center text-base text-white no-underline m-7"
          >
            wen zen?
          </nuxt-link>
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
