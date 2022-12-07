<template>
  <div v-if="sessions.length" class="w-full space-y-3">
    <div
      v-for="session in sessions"
      :key="session.company_name"
      class="keep-ltr cursor-pointer rounded-xl border border-lightPurpleGrey p-3"
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
          → {{ session.start_time }} to
          {{ session.end_time }}
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

  <!-- Display No Sessions Illus if no sessions in the selected day -->
  <div
    v-else
    class="flex w-full flex-col items-center justify-center space-y-3 rounded-xl border border-lightPurpleGrey p-5 text-center"
  >
    <img
      src="~/assets/no-sessions.svg"
      alt="No_Data"
      class="h-45 w-44 lg:h-80 lg:w-80"
    />
    <p class="w-[200px] text-sm lg:w-[40%]">
      You have <span class="font-bold">no upcoming sessions</span> - start
      sharing a concersatoin with a mentor
    </p>
  </div>
</template>

<script>
export default {
  props: {
    sessions: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
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
