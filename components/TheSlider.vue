<template>
  <div class="w-[90%]">
    <Splide class="keep-ltr" :options="options" @splide:moved="getNewData">
      <SplideSlide
        v-for="date in dates"
        :key="date"
        class="w-[75px] rounded-xl border border-borderqx py-[10px] px-4 text-center text-sm font-medium"
      >
        <p class="mb-2 text-unmain">{{ getDayName(date) }}</p>
        <span class="rounded-lg bg-unselected py-1 px-2 text-unselected">{{
          getDayNumber(date)
        }}</span>
      </SplideSlide>
    </Splide>
  </div>
</template>

<script>
import moment from 'moment'
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
      dates: [],
    }
  },
  created() {
    for (let i = 0; i < 8; i++) {
      this.dates.push(moment().add(i, 'days').format('YYYY-MM-DD'))
    }
  },
  methods: {
    getNewData(splide, prev, next) {
      this.$emit('changeDay', this.dates[prev])
    },
    getDayName(date) {
      return moment(date).isSame(moment(), 'days')
        ? 'Today'
        : moment(date).format('ddd')
    },
    getDayNumber(date) {
      return moment(date).format('DD')
    },
  },
}
</script>

<style scopen>
ul li.is-active {
  border: 2px solid #9484f7;
  color: #9484f7;
}

ul li.is-active span {
  color: white;
  background-color: #9484f7;
}

ul li.is-active p {
  color: #9484f7 !important;
}
.splide__arrow {
  background: transparent !important;
  height: 10px !important;
  width: 10px !important;
  color: red;
}

.splide__arrow--prev {
  left: -18px !important;
}
.splide__arrow--next {
  right: -18px !important;
}
</style>
