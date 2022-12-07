<template>
  <div
    class="mx-1 w-fit cursor-pointer rounded-[8px] bg-cardbg py-[6px] px-[11px] text-base-color shadow-xl hover:brightness-125"
    @click="toggleDarkTheme"
  >
    {{
      mode === 'light' ? $t('Dark-Theme') + ' 🌛' : $t('Light-Theme') + ' 🌞'
    }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      mode: 'light',
    }
  },
  mounted() {
    if (localStorage.getItem('mode')) {
      this.mode = localStorage.getItem('mode')
      if (this.mode === 'dark') document.documentElement.classList.add('dark')
    } else {
      localStorage.setItem('mode', 'light')
    }
  },
  methods: {
    toggleDarkTheme() {
      if (this.mode === 'light') {
        this.mode = 'dark'
        localStorage.setItem('mode', 'dark')
        document.documentElement.classList.add('dark')
      } else {
        this.mode = 'light'
        localStorage.setItem('mode', 'light')
        document.documentElement.classList.remove('dark')
      }
    },
  },
}
</script>
