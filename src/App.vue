<template>
  <div id="app" :class="$store.getters.isDarkMode ? 'dark' : 'light'">
    <WindowBar />
    <Demo />
  </div>
</template>

<script>
import WindowBar from "@/components/Window/WindowBar";
import Demo from "@/views/Demo";
import "./App.css";

export default {
  name: "App",
  components: {
    WindowBar,
    Demo
  }
};
</script>
