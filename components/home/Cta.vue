<template>
  <div class="section container mx-auto shadow-md">
    <nuxt-picture
      class="zen-background"
      loading="lazy"
      width="1920"
      height="1281"
      src="/img/zen-background.jpg"
      alt="Zen background"
    />
    <b-row>
      <b-col>
        <h1 class="introduction py-12">
          Providing a zen state of mind for traders
        </h1>
      </b-col>
      <b-col>
        <b-row>
          <p class="introduction">
            Traders are spending hours everyday to stay in touch with the latest market conditions and social sentiment. They also typically hop between multiple exchanges.
            It’s a very time consuming, stressful and sometimes a risky activity, that most traders do as a part-time occupation, which limits their personal time with family and other self-healing activities. At Unizen we want to make all digital assets available under the same roof.
            <br>
          </p>
        </b-row>
        <b-row class="mt-12 pt-12" />
        <b-row class="mt-12 pt-12">
          <b-col align-self="end">
            <div class="text-align: center;">
              <nuxt-link to="/wenzen" class="introduction">
                wen zen?
              </nuxt-link>
            </div>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss">
.section {
  position: relative;
  min-height: 50vh;
}

.zen-background > img {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  border-radius: 4px;
  object-fit: cover;
}

h1.introduction {
  color: $light !important;
  text-align: left;
  font-family: Montserrat;
  font-size: 3.8em !important;
  padding: 30px;
}

p.introduction {
  font-size: 1.2em !important;
  padding: 30px;
  color: $light;
}

a.introduction
{
  height: 60px;
  width: 300px;
  border-radius: 5px;
  position: absolute;
  padding-top: 15px;
  left: 50%;
  transform: translate(-50%,-50%);
  text-align: center;
  color: #fff !important;
  font-size: 16px;
  text-decoration: none !important;
  box-sizing: border-box;
  background-image: linear-gradient(to right, #00f5a4, #00e8ac, #00dcb2, #00ceb4, #00c1b3, #00c1b3, #00c1b3, #00c1b3, #00ceb4, #00dcb2, #00e8ac, #00f5a4);    background-size: 400%;
  cursor: pointer;
}

a.introduction:hover
{
  animation: animate 8s linear infinite;
  text-decoration: none;
}

@keyframes animate
{
  0%
  {
    background-position: 0%;
  }
  100%
  {
    background-position: 400%;
  }
}

a.introduction:before
{
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

a.introduction:hover:before
{
  filter: blur(20px);
  opacity: 1;
  animation: animate 8s linear infinite;
}
</style>
