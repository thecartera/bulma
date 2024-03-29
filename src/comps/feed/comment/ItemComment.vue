<template>
<article v-if="comment" class="media">
  <!-- Image -->
  <div class="media-left">
    <router-link :to="`/u/${comment.user.username}`">
      <c-avatar :src="comment.user.picture" round size="2.5rem" />
    </router-link>
  </div>

  <div class="media-content">
    <div class="comment has-background-light p-5">
      <div class="is-flex is-justify-content-space-between is-align-items-center">
        <!-- Username -->
        <router-link :to="`/u/${comment.user.username}`">
          <strong class="has-text-gray-1"> @{{ comment.user.username }} </strong>
        </router-link>

        <div class="is-flex is-align-items-center">
          <!-- Timestamp -->
          <small class="has-text-grey">
            <TimeAgo :time="comment.createdAt" />
          </small>

          <!-- Dropdown -->
          <ItemCommentDropdown v-if="isSelf" @remove="$emit('remove', comment)" />
        </div>
      </div>

      <!-- Comment -->
      <p class="mt-2 has-text-justified-desktop">
        <Linkify :text="comment.text" />
      </p>

      <!-- Likes -->
      <div class="pt-2 is-clickable">
        <span :class="{ 'has-text-primary': comment.reacted }" @click="react">
          <font-awesome-icon icon="heart" size="sm" />
        </span>
        <small class="px-2"> {{ comment.reactionCount }} </small>
      </div>
    </div>
  </div>
</article>
</template>

<script>
import client from '@/commons/client.api'

import Linkify from '@/comps/utils/Linkify'
import TimeAgo from '@/comps/utils/TimeAgo'

import ItemCommentDropdown from './ItemCommentDropdown'

export default {
  name: 'FeedItemComment',

  components: {
    Linkify,
    TimeAgo,
    ItemCommentDropdown
  },

  props: {
    id: { type: String, required: true }
  },

  data: () => ({
    comment: null
  }),

  computed: {
    isSelf () {
      return this.$store.state.user.profile.username === this.comment.user.username
    }
  },

  methods: {
    async react () {
      if (this.comment.reacted === false) {
        await client.comments.react(this.comment.id)
        this.comment.reacted = true
        this.comment.reactionCount++
        return
      }
      await client.comments.unreact(this.comment.id)
      this.comment.reacted = false
      this.comment.reactionCount--
    }
  },

  async created () {
    this.comment = await client.comments.fetch(this.id)
  }
}
</script>

<style lang="scss" scoped>
.comment {
  line-height: 90%;
  border-radius: $radius-small $radius-large $radius-large $radius-large;
}

.has-text-gray-1 {
  color: $gray-1;
}

/* Hide border colors */
.media {
  border: 0px transparent;
}

/**
 * Style added to allow rendering of new lines `\n`. Adapted from:
 *     https://stackoverflow.com/a/22896536
 *
 * Added the style based on the following link:
 *     https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Text/Wrapping_Text#breaking_long_words
 */
p {
  line-height: 125%;
  overflow-wrap: anywhere;
  white-space:pre-wrap;
}
</style>
