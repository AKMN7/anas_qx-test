<template>
  <div class="flex">
    <div
      class="flex min-h-fit w-[90vw] flex-col items-center justify-center space-y-5 rounded-[15px] bg-cardbg p-[20px] shadow-xl lg:w-[900px]"
    >
      <div class="flex w-full items-center justify-between text-base-color">
        <div>
          <p class="text-lg font-bold">
            {{ $t('Upcoming-Sessions') }}
          </p>
          <p class="text-sm">{{ longFormatDate(selectedDay) }}</p>
        </div>
        <p class="mx-2 text-3xl">&plus;</p>
      </div>
      <the-slider @changeDay="updateSessions" />
      <the-session-list
        :sessions="sessionsToDisplay"
        @removeSession="removeSessionById"
      />
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import TheSlider from '~/components/TheSlider.vue'
import TheSessionList from '~/components/TheSessionList.vue'
export default {
  components: {
    TheSlider,
    TheSessionList,
  },
  props: {},
  data() {
    return {
      sessions: [
        {
          session_id: 'df4864e2-547f-4e89-8dac-5d4b1b64067c',
          company_name: 'Baraka (YC S21)',
          company_logo:
            'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/Starbucks_Corporation_Logo_2011.svg/640px-Starbucks_Corporation_Logo_2011.svg.png',
          company_description: 'Investing. Empowered.',
          session_date: '2022-12-11',
          start_time: '11:00 AM',
          end_time: '11:30 AM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: 'eff64f12-2425-44c9-b7ca-c82c57841058',
          company_name: 'Memorisely',
          company_logo:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi16u9yD2j4H1UhDIEcw6JxbNjBvShnDRL6_-17iNKjiXbQgFQpM0yQzPa7SDNLU3JeVs&usqp=CAU',
          company_description: 'E-Learning',
          session_date: '2022-12-11',
          start_time: '12:30 PM',
          end_time: '1:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '28b4567f-a95b-43e4-aae7-ddbde5ea54bb',
          company_name: 'Randomly',
          company_logo:
            'https://img.freepik.com/premium-vector/saudi-arabia-tour-travel-logo-umrah-hajj-company-icon_18099-3718.jpg',
          company_description: 'The Evolution of A Revolution',
          session_date: '2022-12-12',
          start_time: '8:00 AM',
          end_time: '8:30 AM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '18ee31b2-4463-483a-8082-4601a716bdcd',
          company_name: 'Swvl',
          company_logo:
            'https://miro.medium.com/max/936/1*dn6zull3VcGzGMVDdjYItA.jpeg',
          company_description: 'الشوبنغ لعبتنا - Shopping is our thing',
          session_date: '2022-12-13',
          start_time: '9:00 AM',
          end_time: '9:30 AM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '062f47de-5ecc-4b82-9415-a746c0510d09',
          company_name: 'Nitx',
          company_logo: 'https://nitx.io/img/brand/favicon.png',
          company_description: 'Fast Software Managment.',
          session_date: '2022-12-14',
          start_time: '2:00 PM',
          end_time: '2:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: 'f6ab638c-eec6-4878-9cf9-c2a204cfa0ad',
          company_name: 'Plando',
          company_logo: 'https://plando.com.sa/assets/images/favicon.webp',
          company_description: 'Native Digital Solutions Provider',
          session_date: '2022-12-14',
          start_time: '3:00 PM',
          end_time: '3:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '07ba9cec-c9ee-48ff-ba3d-f27e33588bca',
          company_name: 'Logestechs - لوجستكس',
          company_logo:
            'https://logestechs.com/wp-content/uploads/2020/04/logo_small-150x150.png',
          company_description: 'Dilivery Managment Software',
          session_date: '2022-12-14',
          start_time: '4:00 PM',
          end_time: '4:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '8e6bd550-7627-4b77-918a-a3efef8eeedd',
          company_name: 'Matajer - متاجر',
          company_logo:
            'https://cdn.mapp.sa/matajerLandingPage/img/matajerApp.png',
          company_description: 'E-Commerce Solutions Provider',
          session_date: '2022-12-15',
          start_time: '2:00 PM',
          end_time: '2:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '0b4c024d-1b1e-4993-bc5c-29ef9a6fa824',
          company_name: 'Saaei - ساعي ',
          company_logo: 'https://saaei.co/assets/img/logo_crop.png',
          company_description: 'Real Estate Digital Solutions',
          session_date: '2022-12-15',
          start_time: '3:00 PM',
          end_time: '3:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: 'a742d99d-065e-45a4-85db-fad98c5d5506',
          company_name: 'Travel.it',
          company_logo: 'https://travel-it.today/favicon-32x32.png',
          company_description: 'Explore the world through Travel.it',
          session_date: '2022-12-16',
          start_time: '3:00 PM',
          end_time: '3:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '76376087-b5c6-4ce2-8a6f-1051d38d2896',
          company_name: 'Dadan',
          company_logo:
            'https://www.dadan.io/wp-content/uploads/cropped-favicon-96x96-1-32x32.png',
          company_description: 'Free Screen & Video Recording Software',
          session_date: '2022-12-16',
          start_time: '4:00 PM',
          end_time: '4:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: 'df575372-d0d7-4f9b-ba7a-852075093bab',
          company_name: 'Wazen - وازن',
          company_logo:
            'https://wazen.sa/wp-content/uploads/2022/11/cropped-wazen-icon-200X200-32x32.png',
          company_description: 'Develop Your Business Today',
          session_date: '2022-12-16',
          start_time: '5:00 PM',
          end_time: '5:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
        {
          session_id: '8916ee75-fdb9-439b-a843-5616d09161c3',
          company_name: 'Quantum - كوانتم',
          company_logo:
            'https://uploads-ssl.webflow.com/5f6dbe7699ea057eaf35f8a4/63386807a48ee39802e2abba_qlogo.png',
          company_description: 'Grow Your Audiance with ease.',
          session_date: '2022-12-16',
          start_time: '6:00 PM',
          end_time: '6:30 PM',
          zoom_link: 'https://zoom.us/j/1234567890?pwd=1234567890',
        },
      ],
      selectedDay: '',
      sessionsToDisplay: [],
    }
  },
  watch: {
    // Watch and Filter out all sessions with the same date as the selcted date
    selectedDay(newValue) {
      this.sessionsToDisplay = this.sessions.filter(
        (el) => el.session_date === newValue
      )
    },
  },
  created() {
    // Set the selected day to today's date
    this.selectedDay = moment().add(0, 'days').format('YYYY-MM-DD')
  },
  methods: {
    // Update the selected day to the newly selected day
    updateSessions(newDate) {
      this.selectedDay = newDate
    },
    // Remove a session (bt it's ID) from the session list according
    removeSessionById(id) {
      // Prompt the user to confirm removal
      const response = confirm(`Are you sure you want to Dismiss this session?`)

      // Remove the session if the user confirmed
      if (response) {
        // Filter the sessions and sessionsToDisplay ararys
        this.sessions = this.sessions.filter((el) => el.session_id !== id)
        this.sessionsToDisplay = this.sessionsToDisplay.filter(
          (el) => el.session_id !== id
        )

        // Show and aler cofiming the removal of the selected session
        setTimeout(() => {
          alert('Session Removed')
        }, 100)
      }
    },
    longFormatDate(date) {
      return moment(date).format('dddd, MMMM DD YYYY')
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
</style>
