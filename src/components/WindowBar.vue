<template>
  <div id="electron__bar no-ptr">
    <div class="tab-bar no-select ptr">
      <div class="container ptr">
        <div class="left">
          <div class="sections">
            <label class="draggable">
              <icon />
            </label>
            <label
              v-for="(section, s) in sections"
              :key="s"
              :class="
                s === $store.state.ui.pageIndex
                  ? 'label-active'
                  : 'label-inactive'
              "
              @click="updatePageIndex(s)"
              >{{ section }}</label
            >
            <label for="add">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  x1="8"
                  y1="12"
                  x2="8"
                  y2="4"
                  stroke="#8D8EA1"
                  stroke-width="2"
                />
                <line
                  x1="4"
                  y1="8"
                  x2="12"
                  y2="8"
                  stroke="#8D8EA1"
                  stroke-width="2"
                />
              </svg>
            </label>
          </div>
        </div>
        <div class="right">
          <div class="toggle-area">
            <p>Snooze</p>
            <label class="switch-theme">
              <input v-model="darkModeToggle" type="checkbox" />
              <span class="slider"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="tool-bar ptr">
      <div class="left">
        <div class="menu">
          <button
            class="icon-button inline"
            @click="$store.dispatch('toggleMenuExpanded')"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="4"
                y1="7"
                x2="20"
                y2="7"
                stroke="currentcolor"
                stroke-width="2"
              />
              <line
                x1="4"
                y1="12"
                x2="20"
                y2="12"
                stroke="currentcolor"
                stroke-width="2"
              />
              <line
                x1="4"
                y1="17"
                x2="20"
                y2="17"
                stroke="currentcolor"
                stroke-width="2"
              />
            </svg>
          </button>
          <nav
            @click="$store.dispatch('toggleMenuExpanded')"
            :class="$store.getters.isMenuExpanded ? 'is-opened ptr' : ''"
          >
            <a href="#">File</a>
            <a href="#">Edit</a>
            <a href="#">View</a>
            <a href="#">Object</a>
            <a href="#">Vector</a>
            <a href="#">Text</a>
            <a href="#">Arrange</a>
            <hr />
            <a href="#">Plugins</a>
            <a href="#">Integrations</a>
            <a href="#">Preferences</a>
            <a href="#">Libraries</a>
            <hr />
            <a href="#">Help and Account</a>
          </nav>
        </div>
      </div>
      <div class="right">
        <button class="icon-button">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <path
              d="M15 1C7.26801 1 1 7.26801 1 15C1 22.732 7.26801 29 15 29C22.732 29 29 22.732 29 15C29 11.4494 27.6783 8.20758 25.5 5.73961"
              stroke="url(#paint0_angular)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle cx="14.9995" cy="15" r="11" fill="url(#pattern0)" />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use xlink:href="#image0" transform="scale(0.003125)" />
              </pattern>
              <radialGradient
                id="paint0_angular"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(15 15) rotate(-67.8906) scale(15.1112)"
              >
                <stop stop-color="#24FFFF" />
                <stop offset="1" stop-color="#7720FF" />
              </radialGradient>
              <image
                id="image0"
                width="320"
                height="320"
                xlink:href="data:image/jpeg;base64,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"
              />
            </defs>
          </svg>
        </button>
        <button class="icon-button">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="14" cy="14" r="14" fill="#1ABDFF" />
            <path
              d="M14.8 15.875C11.16 15.875 8.08333 17.9583 7 19C7.65 13.375 12.4167 12.125 14.8 11.5V9L20 14L14.8 18.375V15.875Z"
              fill="white"
            />
          </svg>
        </button>
        <svg
          class="line right"
          width="1"
          height="26"
          viewBox="0 0 1 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line x1="0.5" x2="0.5" y2="26" stroke="#161724" />
        </svg>
        <button class="icon-button">
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M28 14C28 21.732 21.732 28 14 28C6.26801 28 0 21.732 0 14C0 6.26801 6.26801 0 14 0C21.732 0 28 6.26801 28 14Z"
              fill="#33354A"
            />
            <path d="M19 14L11.5 18.3301V9.66987L19 14Z" fill="white" />
          </svg>
        </button>
        <button class="icon-button">
          <svg
            width="44"
            height="44"
            viewBox="0 0 44 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="22" cy="22" r="14" fill="#33354A" />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M22 27C26.5714 27 30 23.25 30 22C30 20.75 26.5714 17 22 17C17.4286 17 14 20.75 14 22C14 23.25 17.4286 27 22 27ZM22 25C23.6569 25 25 23.6569 25 22C25 20.3431 23.6569 19 22 19C20.3431 19 19 20.3431 19 22C19 23.6569 20.3431 25 22 25Z"
              fill="white"
            />
          </svg>
        </button>
        <div class="zoom-input">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="7" cy="7" r="4" stroke="#8D8EA1" stroke-width="2" />
            <line
              x1="12.2929"
              y1="12.7071"
              x2="10.2929"
              y2="10.7071"
              stroke="#8D8EA1"
              stroke-width="2"
            />
          </svg>
          <input type="text" placeholder="100%" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import icon from "@/components/AppMotionIcon";
import "./WindowBar.css";

export default {
  name: "WindowBar",
  components: {
    icon
  },
  data() {
    return {
      nav: false,
      tab: 0,
      sections: ["Activity", "Whiteboard"]
    };
  },
  computed: {
    darkModeToggle: {
      get() {
        return this.$store.state.ui.isDarkMode;
      },
      set(value) {
        this.$store.commit("toggleDarkMode");
      }
    },
    currentPageIndex: function() {
      return this.$store.state.ui.currentPageIndex;
    }
  },
  methods: {
    updatePageIndex(t) {
      this.$store.dispatch("updatePageIndex", t);
    }
  }
};
</script>
