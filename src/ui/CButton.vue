<template>
<button class="button" :class="{ 'is-loading': loading }">
  <span class="icon-text">
    <!-- Left -->
    <span v-if="left && icon" class="icon">
      <font-awesome-icon :icon="icon" />
    </span>

    <!-- Center -->
    <span v-if="hasSlot">
      <slot></slot>
    </span>

    <!-- Right -->
    <span v-if="right && icon" class="icon">
      <font-awesome-icon :icon="icon" />
    </span>
  </span>
</button>
</template>

<script>
export default {
  name: 'CButton',

  props: {
    icon: { type: [String, Array], default: '' },
    left: { type: Boolean, default: false },
    right: { type: Boolean, default: false },
    loading: { type: Boolean, default: false }
  },

  computed: {
    hasSlot () {
      return !!this.$slots.default
    }
  }
}
</script>
