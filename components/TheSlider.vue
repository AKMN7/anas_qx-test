<template>
  <div class="w-[90%]">
    <Splide class="keep-ltr" :options="options" @splide:moved="getNewData">
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        type: 'loop',
        rewind: true,
        gap: '10px',
        perPage: 5,
        perMove: 1,
        pagination: false,
        focus: 'center',
        trimSpace: true,
        start: 0,
        padding: { left: '8px', right: '8px' },
        breakpoints: {
          1022: {
            perPage: 3,
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
  border: 1px solid #9297b749;
  color: black;
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  width: 75px;
}

ul li.date-slide span {
  color: #5b628a;
  border-radius: 8px;
  background-color: rgba(146, 151, 183, 0.16);
  padding: 4px 8px;
}

ul li.is-active {
  border: 2px solid #9484f7;
  color: #9484f7;
}

ul li.is-active span {
  color: white;
  background-color: #9484f7;
}
.splide__arrow {
  background: transparent !important;
  height: 10px !important;
  width: 10px !important;
}

.splide__arrow--prev {
  left: -18px !important;
}
.splide__arrow--next {
  right: -18px !important;
}
</style>
