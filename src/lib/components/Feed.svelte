<script lang="ts">
  import { photos } from '../states/photo-state.svelte'
  import FeedItem from './FeedItem.svelte'
</script>

<div>

  <div class="flex justify-between items-center mb-8">

    <h1 class="text-gray-900 text-4xl font-bold">
      Feed
    </h1>

    <div class="flex gap-8">
      <p class="text-gray-900 font-bold border-b-4 border-black pb-2">
        Latest
      </p>

      <p class="text-gray-300 font-bold">
        Popular
      </p>
    </div>

  </div>

  <div class="grid grid-cols-2 gap-6">
    {#each $photos as photo}
      <FeedItem {photo} />
    {/each}
  </div>

</div>