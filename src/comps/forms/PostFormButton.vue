<template>
<button class="button is-white is-transparent">
  <span class="icon-text">
    <span class="icon has-text-primary">
      <font-awesome-icon :icon="icon" size="lg" />
    </span>
    <span class="has-text-grey has-text-weight-bold"> {{ label }} </span>
  </span>
</button>
</template>

<script>
export default {
  name: 'PostFormButton',

  props: {
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>
