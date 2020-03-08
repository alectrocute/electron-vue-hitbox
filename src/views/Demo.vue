<template>
  <div
    v-if="toggle"
    :class="
      $store.getters.isDarkMode ? 'dark no-ptr hit-zone' : 'no-ptr hit-zone'
    "
    style="width: 100%; height: 100vh; min-height: 600px; margin-top: 0px; background: transparent"
  >
    <div
      @click="toggle = !toggle"
      class="ptr demo"
      style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); cursor: pointer"
    >
      ..and here's what it's like without a hitbox!
    </div>
  </div>
  <div
    v-else
    :class="$store.getters.isDarkMode ? 'dark ptr' : 'ptr'"
    style="color: var(--primary-font-color); width: 100%; height: 100vh; min-height: 600px; margin-top: 0px; background: var(--tab-primary-color)"
  >
    <div
      @click="toggle = !toggle"
      style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); cursor: pointer;"
    >
      Demo mouse hitbox (off)
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo",
  data() {
    return {
      toggle: false
    };
  }
};
</script>

<style scoped>
.demo {
  color: rgba(255, 255, 255, 0.9);
  background: black;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  transition: color 240ms ease;
  animation: demoMotion 9s ease infinite;
}

@keyframes demoMotion {
  0% {
    transform: translate(-50%, 90%);
  }
  50% {
    transform: translate(-50%, -90%);
  }
  to {
    transform: translate(-50%, 90%);
  }
}
.demo:hover {
  color: rgba(255, 255, 255, 1);
}

.demo:hover ~ .hit-zone {
  background: red;
}
</style>
