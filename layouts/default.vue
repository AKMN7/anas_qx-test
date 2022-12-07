<template>
  <div class="h-fit min-h-screen w-screen bg-muted py-[100px]">
    <client-only>
      <div class="mx-auto flex flex-col items-center gap-[40px]">
        <div
          :dir="lang === 'en' ? 'ltr' : 'rtl'"
          class="mt-[5px] flex w-[350px] items-center lg:w-[600px]"
        >
          <div
            class="mx-1 w-fit cursor-pointer rounded-[8px] bg-cardbg py-[6px] px-[11px] text-base-color shadow-xl hover:brightness-125"
            @click="changeLanguage"
          >
            {{ $t('language') }}
          </div>
          <dark-theme-btn />
        </div>
        <div :dir="lang === 'en' ? 'ltr' : 'rtl'">
          <Nuxt />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
import DarkThemeBtn from '~/components/DarkThemeBtn.vue'
export default {
  components: {
    DarkThemeBtn,
  },
  props: {},
  data() {
    return {
      lang: 'ar',
    }
  },
  head: {},
  computed: {},
  watch: {},
  mounted() {},
  methods: {
    changeLanguage() {
      if (this.lang === 'ar') {
        this.lang = 'en'
        this.$i18n.locale = 'en'
      } else {
        this.lang = 'ar'
        this.$i18n.locale = 'ar'
      }
    },
  },
}
</script>
