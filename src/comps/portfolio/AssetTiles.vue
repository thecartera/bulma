<template>
<div class="columns is-flex-wrap-wrap">
  <template v-for="item of sortedAssets.assets" :key="item.ticker">
    <div class="column is-half">
      <AssetTile class="box" :asset="item" />
    </div>
  </template>
</div>
</template>

<script>
import AssetTile from './AssetTile'

export default {
  name: 'AssetTiles',

  components: {
    AssetTile
  },

  props: {
    sortedAssets: {
      type: Object,
      required: true
    }
  }
}
</script>
