<template>
<article>
  <div class="level">
    <div class="level-left">
      <!-- Image -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column is-justify-content-center">
          <router-link :to="`/u/${user.username}`">
            <c-avatar :src="user.picture" round size="3rem" />
          </router-link>
        </div>
      </div>

      <!-- Name -->
      <div class="level-item">
        <div class="is-flex is-flex-direction-column has-text-centered-touch">
          <span> Cartera de </span>
          <router-link :to="`/u/${user.username}`">
            <span class="has-text-grey-darker">
              <strong > @{{ user.username }} </strong>
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="level-right">
      <template v-if="isSelf">
        <!-- Edit -->
        <div class="level-item">
          <router-link :to="`/c/${wallet.id}/edit`">
            <c-button class="is-primary" left icon="pen">
              Editar cartera
            </c-button>
          </router-link>
        </div>

        <!-- Delete -->
        <div class="level-item">
          <c-button class="is-danger is-light" left icon="trash" @click="remove">
            Deletar
          </c-button>
        </div>
      </template>
    </div>
  </div>

  <div class="level">
    <div class="level-left">
      <!-- Icon -->
      <div class="level-item">
        <span class="icon is-large has-text-primary">
          <font-awesome-icon icon="wallet" size="lg" />
        </span>
      </div>

      <!-- Wallet name -->
      <div class="level-item">
        <h4 class="title is-4"> {{ wallet.name }} </h4>
      </div>
    </div>

    <div class="level-right">
      <div class="level-item">
        <!-- Input -->
        <div class="select is-primary">
          <select v-model="selected" @change="change">
            <option v-for="(text, days) of OPTIONS" :key="days" :value="days">
              {{ text }}
            </option>
          </select>
        </div>
      </div>

      <!-- Selected item -->
      <div class="level-item">
        <span class="icon-text">
          <span class="icon is-large">
            <font-awesome-icon icon="wallet" size="lg" />
          </span>
          <span class="my-auto">
            <p class="has-text-weight-bold"> Variação {{ text }}: </p>
            <p> {{ wallet.gain.toFixed(2) }}% </p>
          </span>
        </span>
      </div>
    </div>
  </div>

  <hr>

  <!-- Description -->
  <p class="description"> {{ wallet.description }} </p>
</article>
</template>

<script>
import client from '@/commons/client.api'

import { getDaysInYear } from '@/utils.js'

export default {
  name: 'PortfolioBanner',

  props: {
    wallet: { type: Object, required: true },
    user: { type: Object, required: true }
  },

  data: () => ({
    selected: '7',
    OPTIONS: {
      7: '7 dias',
      30: '1 mês',
      90: '3 meses',
      [getDaysInYear()]: 'YTD'
    }
  }),

  computed: {
    text () {
      return this.OPTIONS[this.selected]
    },

    isSelf () {
      return this.user.username === this.$store.state.user.profile.username
    }
  },

  methods: {
    change (e) {
      this.$emit('period', this.selected)
    },

    async remove () {
      await client.wallets.delete(this.wallet.id)
      this.$router.push('/c')
    }
  }
}
</script>

<style scoped>
/*
  Style added to allow rendering of new lines `\n`. Adapted from:
    https://stackoverflow.com/a/22896536

  Added the style based on the following link:
    https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
 */
.description {
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
</style>
