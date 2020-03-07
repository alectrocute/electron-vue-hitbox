<template>
  <div id="app" :class="$store.getters.isDarkMode ? 'dark' : 'light'">
    <WindowBar class="click-on" />
    <div
      v-if="demo"
      :class="
        $store.getters.isDarkMode ? 'dark no-ptr hit-zone' : 'no-ptr hit-zone'
      "
      style="width: 100%; height: 100vh; min-height: 600px; margin-top: 0px; background: transparent"
    >
      <div
        @click="demo = !demo"
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
        @click="demo = !demo"
        style="position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); cursor: pointer;"
      >
        Demo mouse hitbox (off)
      </div>
    </div>
  </div>
</template>

<script>
import WindowBar from "./components/WindowBar.vue";

export default {
  name: "App",
  components: {
    WindowBar
  },
  data() {
    return {
      demo: false
    };
  }
};
</script>

<style>
.demo {
  color: rgba(255, 255, 255, 0.9);
  background: black;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  transition: color 240ms ease;
}
.demo:hover {
  color: rgba(255, 255, 255, 1);
}

.demo:hover ~ .hit-zone {
  background: red;
}

* {
  box-sizing: border-box;
  outline: none;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none;
}
html {
  font-family: "Inter", sans-serif;
  --large-font-size: 18px;
  --medium-font-size: 13px;
  --small-font-size: 12px;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

body {
  background: transparent;
  margin: 0 !important;
  overflow: hidden;
  width: 100%;
  height: 100%;
}

.dark {
  --primary-color: #000;
  --primary-color-transparent: rgba(0, 0, 0, 0.8);
  --secondary-color: #f6f6fa;
  --tab-primary-color: #212337;
  --tab-secondary-color: #ffffff;
  --primary-font-color: #8d8ea1;
  --secondary-font-color: #4d4f60;
  --primary-tab-selected-font: #ffffff;
  --secondary-tab-selected-font: #4d4f60;
  --primary-tool-background: #212337;
  --secondary-tool-background: #ffffff;
  --icon-primary-color: #e1e2ea;
  --icon-secondary-color: #4d4f60;
  --primary-button-color: #e1e2ea;
  --secondary-button-color: #4d4f60;
  --content-primary-color: #ffffff;
  --content-secondary-color: #212337;
  --collapsible-primary-color: #2f3147;
  --collapsible-secondary-color: #ebebf5;
  --collapsible-primary-background: #212337;
  --collapsible-secondary-background: linear-gradient(to top, #ffffff, #f1f1f7);
  --collapsible-primary-focus-color: #494b66;
  --collapsible-secondary-focus-color: #1abdff;
  --primary-content-background: #161724;
  --secondary-content-background: linear-gradient(to top, #ffffff, #f1f1f7);
  --primary-visual-area-bg: #212337;
  --secondary-visual-area-bg: #ffffff;
  --figma-primary-logo-color: #33354a;
  --figma-secondary-logo-color: #e7e7e7;
  --primary-dark-tool-color: #8d8ea1;
  --secondary-dark-tool-color: #4d4f60;
  --primary-light-tool-color: #8d8ea1;
  --secondary-light-tool-color: #4d4f60;
  --primary-border-color: rgba(255, 255, 255, 0.85);
  --secondary-border-color: rgba(38, 38, 38, 0.95);
  --slider-checked-color-1: #ca00e2;
  --slider-checked-color-2: #9ce1ff;
  --slider-background-color: rgba(255, 255, 255, 0.2);
}

.light {
  --secondary-color: #161724;
  --primary-color: #fff;
  --primary-color-transparent: rgba(255, 255, 255, 0.9);
  --tab-primary-color: #f3f3f3;
  --tab-secondary-color: #161724;
  --primary-font-color: #4d4f60;
  --secondary-font-color: #8d8ea1;
  --tab-font: #fff;
  --primary-tab-selected-font: #000;
  --secondary-tab-selected-font: #ffffff;
  --primary-tool-background: #ffffff;
  --secondary-tool-background: #212337;
  --icon-primary-color: #4d4f60;
  --icon-secondary-color: #e1e2ea;
  --primary-button-color: #4d4f60;
  --secondary-button-color: #e1e2ea;
  --content-primary-color: #212337;
  --content-secondary-color: #ffffff;
  --collapsible-primary-color: #ebebf5;
  --collapsible-secondary-color: #2f3147;
  --collapsible-primary-background: linear-gradient(to top, #ffffff, #f1f1f7);
  --collapsible-secondary-background: #212337;
  --collapsible-primary-focus-color: #1abdff;
  --collapsible-secondary-focus-color: #494b66;
  --primary-content-background: linear-gradient(to top, #ffffff, #f1f1f7);
  --secondary-content-background: #161724;
  --primary-visual-area-bg: #ffffff;
  --secondary-visual-area-bg: #212337;
  --figma-primary-logo-color: #efefef;
  --figma-secondary-logo-color: #33354a;
  --primary-dark-tool-color: #4d4f60;
  --secondary-dark-tool-color: #8d8ea1;
  --primary-light-tool-color: #4d4f60;
  --secondary-light-tool-color: #e1e2ea;
  --primary-border-color: rgba(38, 38, 38, 0.95);
  --secondary-border-color: rgba(255, 255, 255, 0.85);
  --slider-checked-color-1: #ca00e2;
  --slider-checked-color-2: #9ce1ff;
  --slider-background-color: rgba(0, 0, 0, 0.09);
}
</style>
