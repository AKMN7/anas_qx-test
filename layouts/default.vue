<template>
  <div class="h-fit w-screen bg-muted py-[100px]">
    <client-only>
      <div class="mx-auto flex flex-col items-center gap-[40px]">
        <div
          class="mt-[5px] flex w-[350px] items-start justify-start space-x-4 lg:w-[600px]"
        >
          <div
            class="w-fit cursor-pointer rounded-[8px] bg-[#000] py-[6px] px-[11px] text-inverted hover:brightness-125"
            @click="changeLanguage"
          >
            {{ $t('language') }}
          </div>
          <div
            class="w-fit cursor-pointer rounded-[8px] bg-[#000] py-[6px] px-[11px] text-inverted hover:brightness-125"
          >
            Light Theme
          </div>
        </div>
        <div :dir="lang === 'en' ? 'ltr' : 'rtl'">
          <Nuxt />
        </div>
      </div>
    </client-only>
  </div>
</template>

<script>
export default {
  components: {},
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
