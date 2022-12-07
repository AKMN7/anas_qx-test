<template>
  <div class="">
    <div class="flex">
      <div
        class="flex min-h-fit w-[375px] flex-col items-center justify-center space-y-5 rounded-[15px] bg-white p-[30px] lg:w-[600px]"
      >
        <div class="flex w-full items-center justify-between">
          <div class="text-left">
            <p class="text-lg font-bold">Upcoming Sessions</p>
            <p class="text-sm">Saturday, June25, 2022</p>
          </div>
          <span>
            <img src="~/assets/plus.svg" alt="Plus_Icon" class="h-5 w-5" />
          </span>
        </div>
        <div class="w-[90%]">
          <Slider />
        </div>
        <div class="w-full space-y-3">
          <div
            v-for="session in sessions"
            :key="session.company_name"
            class="keep-ltr cursor-pointer rounded-xl border border-lightPurpleGrey p-2"
            :class="{
              selectedSession: session.company_name === selectedSession,
            }"
            @click="showBtns(session.company_name)"
          >
            <div class="space-2 flex items-center justify-start">
              <img
                :src="session.company_logo"
                alt="Logo"
                class="h-10 w-10 rounded-xl border border-lightPurpleGrey"
              />
              <div class="flex w-fit flex-col py-1 px-2">
                <p class="text-sm font-bold">{{ session.company_name }}</p>
                <p>{{ session.company_description }}</p>
              </div>
            </div>

            <div class="mt-1 flex items-center justify-start">
              <p class="text-lightPurple">
                → {{ session.start_date.split(' ')[1] }} to
                {{ session.end_date.split(' ')[1] }}
              </p>
            </div>

            <div class="cta-btns mt-3 flex items-center justify-start">
              <button class="rounded-xl bg-purple py-2 px-4 text-white">
                Join
              </button>
              <button class="border- ml-3 rounded-xl py-2 px-4 hover:font-bold">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/Slider.vue'
export default {
  components: {
    Slider,
  },
  props: {},
  data() {
    return {
      sessions: [
        {
          company_name: 'Baraka (YC S21)',
          company_logo:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
          company_description: 'Investing. Empowered.',
          start_date: '2022-12-07 11:00:06',
          end_date: '2022-12-07 11:30:06',

          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Memorisely',
          company_logo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi16u9yD2j4H1UhDIEcw6JxbNjBvShnDRL6_-17iNKjiXbQgFQpM0yQzPa7SDNLU3JeVs&usqp=CAU',
          company_description: 'E-Learning',
          start_date: '2023-01-07 11:00:06',
          end_date: '2023-01-07 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Memorisely',
          company_logo:
            'https://img.freepik.com/premium-vector/saudi-arabia-tour-travel-logo-umrah-hajj-company-icon_18099-3718.jpg',
          company_description: 'The Evolution of A Revolution',
          start_date: '2023-01-08 11:00:06',
          end_date: '2023-01-08 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Swvl',
          company_logo:
            'https://miro.medium.com/max/936/1*dn6zull3VcGzGMVDdjYItA.jpeg',
          company_description: 'الشوبنغ لعبتنا - Shopping is our thing',
          start_date: '2023-01-10 11:00:06',
          end_date: '2023-01-10 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          company_name: 'Basket باسكت',
          company_logo:
            'https://cdn2.hubspot.net/hub/145335/file-407359001-png/blog-files/pepsi.png',
          company_description: 'Lorem ipsum dolor sit amet.',
          start_date: '2023-01-10 11:00:06',
          end_date: '2023-01-10 11:30:06',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
      ],
      selectedSession: null,
    }
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    showBtns(name) {
      this.selectedSession = name
    },
  },
}
</script>

<style>
.keep-ltr {
  direction: ltr !important;
}

.test-br {
  border: 2px solid red;
}

.selectedSession {
  background-color: rgba(148, 132, 247, 0.08);
}

.selectedSession .cta-btns {
  display: block !important;
}

.cta-btns {
  display: none;
}
</style>
