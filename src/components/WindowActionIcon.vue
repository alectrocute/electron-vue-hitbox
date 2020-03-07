<template>
  <div class="right">
    <div class="toggle-area">
      <p>Snooze</p>
      <label class="switch-theme">
        <input v-model="snooze" type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  </div>
</template>

<script>
export default {
  name: "WindowActionIcon"
};
</script>
