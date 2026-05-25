<script lang="ts">
  import { users } from '../states/user-state.svelte'
  import StoriesItem from './StoriesItem.svelte'
</script>

<div>

  <div class="flex justify-between items-center mb-8">

    <h1 class="text-gray-900 text-4xl font-bold">Stories</h1>h1>

    <p class="text-gray-400 font-bold">Watch all</p>

  </div>

  <div class="flex gap-8">
    {#each $users as user}
      <StoriesItem {user} />
    {/each}
  </div>

</div>