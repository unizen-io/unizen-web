<template>
  <div>
    <div class="card-carousel-wrapper">
      <div class="card-carousel--nav__left" :disabled="atHeadOfList" @click="moveCarousel(-1)" />
      <div class="card-carousel">
        <div class="card-carousel--overflow-container">
          <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')'}">
            <div v-for="item in items" :key="item.name" class="b-card mr-3">
              <img src="https://placehold.it/200x200">
              <div class="card-carousel--card--footer">
                <p>{{ item.name }}</p>
                <p v-for="(tag,index) in item.tag" :key="tag" class="tag" :class="index &gt; 0 ? 'secondary' : ''">
                  {{ tag }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-carousel--nav__right" :disabled="atEndOfList" @click="moveCarousel(1)" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
      items: [
        { name: 'Kin Khao', tag: ['Thai'] },
        { name: 'fsd', tag: ['Sushi', 'Japanese', '$$$$'] },
        { name: 'Delfina', tag: ['Pizza', 'Casual'] },
        { name: 'San Tung', tag: ['Chinese', '$$'] },
        { name: 'Anchor Oyster Bar', tag: ['Seafood', 'Cioppino'] },
        { name: 'Locanda', tag: ['Italian'] },
        { name: 'Garden Creamery', tag: ['Ice cream'] }
      ]
    }
  },
  computed: {
    atEndOfList () {
      return this.currentOffset <= (this.paginationFactor * -1) * (this.items.length - this.windowSize)
    },
    atHeadOfList () {
      return this.currentOffset === 0
    }
  },
  methods: {
    moveCarousel (direction) {
      // Find a more elegant way to express the :style. consider using props to make it truly generic
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor
      }
    }
  }
}

</script>

<style lang='scss'>
$vue-navy: #2c3e50;
$vue-navy-light: #3a5169;
$vue-teal: #42b883;
$vue-teal-light: #42b983;
$gray: #666a73;
$light-gray: #f8f8f8;

.card-carousel-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0 40px;
  color: $gray;
}

.card-carousel {
  display: flex;
  justify-content: center;
  width: 640px;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;
    width: 15px;
    height: 15px;
    padding: 10px;
    box-sizing: border-box;
    border-top: 2px solid $vue-teal;
    border-right: 2px solid $vue-teal;
    cursor: pointer;
    margin: 0 20px;
    transition: transform 150ms linear;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: flex;
  transition: transform 150ms ease-out;
  transform: translatex(0px);

  .card-carousel--card {
    margin: 0 10px;
    cursor: pointer;
    box-shadow: 0 4px 15px 0 rgba(40,44,53,.06), 0 2px 2px 0 rgba(40,44,53,.08);
    background-color: #fff;
    border-radius: 4px;
    z-index: 3;
    margin-bottom: 2px;

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }

    img {
      vertical-align: bottom;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
      transition: opacity 150ms linear;
      user-select: none;

      &:hover {
        opacity: 0.5;
      }
    }

    &--footer {
      border-top: 0;
      padding: 7px 15px;

      p {
        padding: 3px 0;
        margin: 0;
        margin-bottom: 2px;
        font-size: 19px;
        font-weight: 500;
        color: $vue-navy;
        user-select: none;

        &.tag {
          font-size: 11px;
          font-weight: 300;
          padding: 4px;
          background: rgba(40,44,53,.06);
          display: inline-block;
          position: relative;
          margin-left: 4px;
          color: $gray;

          &:before {
            content:"";
            float:left;
            position:absolute;
            top:0;
            left: -12px;
            width:0;
            height:0;
            border-color:transparent rgba(40,44,53,.06) transparent transparent;
            border-style:solid;
            border-width:8px 12px 12px 0;
        }
          &.secondary {
            margin-left: 0;
            border-left: 1.45px dashed white;
            &:before {
              display: none !important;
            }
          }

          &:after {
            content:"";
            position:absolute;
            top:8px;
            left:-3px;
            float:left;
            width:4px;
            height:4px;
            border-radius: 2px;
            background: white;
            box-shadow:-0px -0px 0px #004977;
          }
        }
      }
    }
  }
}

h1 {
  font-size: 3.6em;
  font-weight: 100;
  text-align: center;
  margin-bottom: 0;
  color: $vue-teal;
}
</style>
