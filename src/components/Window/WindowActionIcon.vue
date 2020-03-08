<template>
  <div
    @mouseover="toggle(true)"
    @mouseleave="toggle(false)"
    @click="$emit('click', true)"
    :style="`background: ${hoverColor}`"
  >
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
export default {
  name: "WindowActionIcon",
  data() {
    return {
      isHover: false
    };
  },
  methods: {
    toggle(e) {
      if (e) return (this.isHover = true);
      return (this.isHover = false);
    }
  },
  computed: {
    hoverColor: function() {
      if (this.isHover) return this.color;
      return "rgba(155,155,155,0.4)";
    }
  },
  props: {
    color: {
      type: String,
      default: "red"
    }
  }
};
</script>

<style scoped>
div {
  transition: all 130ms ease;
  display: flex;
  position: relative;
  width: 28px;
  height: 28px;
  margin-top: -4px;
  border-radius: 4px;
}

span {
  margin: 0 auto;
  text-align: center;
  margin-left: 0px;
}
</style>