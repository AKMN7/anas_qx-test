<template>
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
        <button class="rounded-xl bg-purple py-2 px-4 text-white">Join</button>
        <button class="border- ml-3 rounded-xl py-2 px-4 hover:font-bold">
          Dismiss
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['sessions'],
  data() {
    return {
      selectedSession: null,
    }
  },
  methods: {
    showBtns(name) {
      this.selectedSession = name
    },
  },
}
</script>
