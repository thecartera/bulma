<template>
<div class="level is-mobile">
  <div class="level-left">
    <!-- User image -->
    <router-link :to="`/u/${item.owner.username}`" class="level-item">
      <c-avatar :src="item.owner.picture" round />
    </router-link>

    <div class="level-item">
      <div class="is-flex is-flex-direction-column">
        <!-- Username -->
        <router-link :to="`/u/${item.owner.username}`" class="has-text-gray-1 has-text-weight-bold">
          @{{ item.owner.username }}
        </router-link>

        <!-- Created at -->
        <small>
          <TimeAgo :time="item.timestamp" />
        </small>
      </div>
    </div>

  </div>

  <div class="level-right">
    <div class="level-item">
      <div class="dropdown is-right" :class="{ 'is-active': active }">
        <!-- Ellipsis -->
        <div class="dropdown-trigger">
          <c-button
            class="is-white"
            v-if="isSelf"
            left
            :icon="['fa', 'ellipsis-vertical']"
            @click="active = !active"
          />
        </div>

        <!-- Content -->
        <div class="dropdown-content">
          <div class="dropdown-menu">
            <a v-if="itemIsEditable" class="dropdown-item" @click="edit"> Editar </a>
            <a class="dropdown-item" @click="remove"> Deletar </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import TimeAgo from '@/comps/utils/TimeAgo'

export default {
  name: 'ItemInfo',

  components: {
    TimeAgo
  },

  props: {
    item: {
      type: Object,
      required: true
    }
  },

  data: () => ({
    active: false
  }),

  computed: {
    isSelf () {
      return this.$store.state.user.profile.username === this.item.owner.username
    },
    itemIsEditable () {
      return this.item.type === 'TEXT_POST_CREATED'
    }
  },

  methods: {
    edit () {
      this.$emit('edit')
      this.active = false
    },
    async remove () {
      this.$emit('remove', this.item)
      this.active = false
    }
  }
}
</script>

<style lang="scss" scoped>
.has-text-gray-1 {
  color: $gray-1;
}
</style>
