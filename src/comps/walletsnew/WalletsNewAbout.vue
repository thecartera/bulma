<template>
<div class="column is-three-fifths">
  <article class="box">
    <h4 class="title is-4 my-0"> Sobre sua Cartera </h4>

    <hr class="my-2">

    <!-- Name -->
    <div class="field">
      <label class="label"> Nome </label>
      <div class="control has-icons-right">
        <input
          type="text"
          placeholder="Digite um nome..."
          class="input has-background-white-ter is-size-6"
          :value="name"
          @input="updateName"
          :class="!this.validName ? 'is-danger' : 'is-success'"
        >
        <span class="icon is-small is-right">
          <font-awesome-icon v-if="validName" icon="check" />
          <font-awesome-icon v-if="!validName" icon="exclamation-triangle" />
        </span>
      </div>
      <p v-if="!validName" class="help is-danger"> Precisa ter pelo menos 3 letras </p>
    </div>

    <!-- Description -->
    <div class="field">
      <div class="control">
        <label class="label"> Descrição </label>
        <textarea
          type="text"
          :value="description"
          :rows="6"
          class="textarea has-background-white-ter is-size-6"
          :class="{ 'is-danger': invalid }"
          placeholder="Explique um pouco da sua Cartera: estratégia, objetivos, ..."
          @input="e => $emit('update:description', e.target.value)"
        />
      </div>
      <div class="is-flex is-justify-content-flex-end">
        <p v-if="invalid && error" class="help is-danger"> {{ error }} </p>
      </div>
    </div>
  </article>
</div>
</template>

<script>
export default {
  name: 'WalletsNewAbout',

  props: {
    validName: {
      type: Boolean
    },
    name: {
      type: String
    },
    description: {
      type: String
    },
    isDescriptionValid: {
      type: Boolean,
      default: true
    }
  },

  data: () => ({
    maxDescriptionLength: 840
  }),

  computed: {
    invalid () {
      return !this.validateDescription(this.description)
    },
    error () {
      return this.description.length + '/' + this.maxDescriptionLength
    }
  },

  methods: {
    validateDescription (d) {
      const isValid = d.length <= this.maxDescriptionLength
      this.$emit('update:isDescriptionValid', isValid)
      return isValid
    },
    updateName (e) {
      this.$emit('update:name', e.target.value)
    }
  }
}
</script>
