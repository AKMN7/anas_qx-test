<template>
  <div class="w-[90%]">
    <Splide
      class="keep-ltr"
      :options="options"
      @splide:moved="getNewData"
      @splide:click="updateDate"
      @splide:ready="populateDays"
    >
      <SplideSlide
        v-for="date in dates"
        :key="date.fullDate"
        class="w-[75px] cursor-pointer rounded-xl border border-borderqx py-[10px] px-4 text-center text-sm font-medium"
      >
        <p class="mb-2 text-unmain">
          {{ date.dayName === 'Today' ? $t('Today') : date.dayName }}
        </p>
        <span class="rounded-lg bg-unselected py-1 px-2 text-unselected">{{
          date.dayNumber
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
        perPage: 3,
        perMove: 1,
        pagination: false,
        start: 0,
        focus: 'center',
        trimSpace: false,
        padding: { left: '8px', right: '8px' },
      },
      dates: [],
    }
  },
  watch: {
    '$i18n.locale'(newValue, oldValue) {
      this.populateDays()
    },
  },
  created() {
    this.populateDays()
  },
  methods: {
    // Populate Seven days from now
    populateDays() {
      this.dates = []
      // Store the upcoming seven days using moment.js
      for (let i = 0; i < 7; i++) {
        const date = moment().add(i, 'days').format('YYYY-MM-DD')
        this.dates.push({
          fullDate: date,
          dayName: this.getDayName(date),
          dayNumber: this.getDayNumber(date),
        })
      }
    },
    // Return approprite string to disply as a day name
    getDayName(date) {
      return moment(date).isSame(moment(), 'days')
        ? 'Today'
        : moment(date).format('ddd')
    },
    // Get the number of day passed
    getDayNumber(date) {
      return moment(date).format('DD')
    },
    // Fire changeDay emit while passing the newly selected date
    getNewData(splide, prev, next) {
      this.$emit('changeDay', this.dates[prev].fullDate)
    },
    // Update The date by user clicks
    updateDate(obj, splide) {
      obj.go(splide.index)
    },
  },
}
</script>

<style>
ul li:hover {
  background-color: #9484f714;
}

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

/* SLIDER ARROW FORCEFULL EDIT (BAD PRACTIVE) */
.splide__arrow {
  background: transparent !important;
  height: 10px !important;
  width: 10px !important;
}

.dark .splide__arrow svg {
  fill: #dddddd;
}

.splide__arrow svg {
  fill: #282c41;
}

.splide__arrow--prev {
  left: -18px !important;
}
.splide__arrow--next {
  right: -18px !important;
}
</style>
