<template>
  <div
    v-if="sessions.length"
    v-on-clickaway="clickAway"
    class="keep-ltr grid w-full grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"
  >
    <div
      v-for="session in sessions"
      :key="session.session_id"
      class="keep-ltr session h-fit w-full cursor-pointer rounded-xl border border-lightPurpleGrey p-3 text-base-color"
      :class="{
        selectedSession: session.company_name === selectedSession,
      }"
      @click="showBtns(session.company_name)"
    >
      <!-- Session Company Info -->
      <div class="space-2 flex items-center justify-start">
        <img
          :src="session.company_logo"
          alt="Logo"
          class="h-10 w-10 rounded-xl border border-borderqx"
        />
        <div class="flex w-fit flex-col py-1 px-2">
          <p class="text-sm font-bold">{{ session.company_name }}</p>
          <p>{{ session.company_description }}</p>
        </div>
      </div>

      <!-- Session Time -->
      <div class="mt-1 flex items-center justify-start">
        <p class="text-unselected">
          → {{ session.start_time }} to
          {{ session.end_time }}
        </p>
      </div>

      <!-- Sessoin CTA Buttons -->
      <div class="cta-btns mt-3 flex items-center justify-start">
        <button
          class="rounded-xl bg-purple py-2 px-4 text-white"
          @click="goToLink(session.zoom_link)"
        >
          Join
        </button>
        <button
          class="border- ml-3 rounded-xl py-2 px-4 hover:font-bold"
          @click="$emit('removeSession', session.session_id)"
        >
          Dismiss
        </button>
      </div>
    </div>
  </div>

  <!-- Display No Sessions Illus if no sessions in the selected day -->
  <div
    v-else
    class="flex w-full flex-col items-center justify-center space-y-10 rounded-xl border border-lightPurpleGrey py-20 px-5 text-center"
  >
    <img
      src="~/assets/no-sessions.svg"
      alt="No_Data"
      class="h-44 w-44 lg:h-56 lg:w-56"
    />
    <p class="w-[200px] text-sm text-base-color lg:w-[40%]">
      {{ $t('No-Sessions-0') }}
      <span class="font-bold">{{ $t('No-Sessions-1') }}</span>
      {{ $t('No-Sessions-2') }}.
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
    // Update the selectedSession
    showBtns(name) {
      this.selectedSession = name
    },
    // Navigate user to a zoom link
    goToLink(link) {
      window.open(link)
    },
    // Click away funciton to hide CTA buttons
    clickAway() {
      this.selectedSession = null
    },
  },
}
</script>

<style scoped>
.session:hover {
  background-color: #9484f714;
}

.selectedSession {
  background-color: #9484f714;
}

.selectedSession .cta-btns {
  display: block !important;
}

.cta-btns {
  display: none;
}
</style>
