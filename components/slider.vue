<template>
  <Splide :options="options" @splide:moved="getNewData">
    <SplideSlide class="date-slide">
      <p class="mb-2">Today</p>
      <span class="text-white">25</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Mon</p>
      <span class="text-white">26</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Tue</p>
      <span class="text-white">27</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Wed</p>
      <span class="text-white">28</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Thur</p>
      <span class="text-white">29</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Fri</p>
      <span class="text-white">30</span>
    </SplideSlide>
    <SplideSlide class="date-slide">
      <p class="mb-2">Sat</p>
      <span class="text-white">01</span>
    </SplideSlide>
  </Splide>
</template>

<script>
export default {
  data() {
    return {
      options: {
        type: 'loop',
        rewind: true,
        gap: '15px',
        perPage: 5,
        perMove: 1,
        pagination: false,
        focus: 'center',
        trimSpace: true,
        direction: this.$i18n.locale === 'en' ? 'ltr' : 'rtl',
        start: 0,
        padding: { left: 5, right: 5 },
        breakpoints: {
          768: {
            perPage: 3,
            gap: '8px',
          },
        },
      },
    }
  },
  methods: {
    getNewData(splide, prev, next) {
      console.log(prev) // This is the moved to index
      console.log('The Coursel Has Moved')
    },
  },
}
</script>

<style scopen>
ul li.date-slide {
  text-align: center;
  padding: 10px 16px;
  border: 2px solid #cccccc;
  color: black;
  font-weight: 500;
  border-radius: 16px;
  width: 75px;
}

ul li.date-slide span {
  border-radius: 12px;
  background-color: #a1a0a1;
  padding: 4px 8px;
}

ul li.is-active {
  border: 3px solid #9484f7;
  color: #9484f7;
}

ul li.is-active span {
  border-radius: 12px;
  background-color: #9484f7;
  padding: 4px 8px;
}
</style>
