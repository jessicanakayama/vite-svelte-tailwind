<script lang="ts">
  import { users } from '../states/user-state.svelte'
</script>

{#if $users.length > 0}

<div class="flex flex-col items-center">

  <div class="p-[3px] rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-500">
    
    <div class="p-[2px] bg-white rounded-full">
      <img
        src={$users[0].avatar}
        alt={$users[0].name}
        class="w-24 h-24 rounded-full object-cover"
      >
    </div>

  </div>

  <h1 class="text-gray-900 text-3xl font-bold mt-6">
    {$users[0].name}
  </h1>

  <p class="text-gray-400 text-xl">
    @{$users[0].username}
  </p>

  <div class="flex justify-between w-full mt-12 text-center">

    <div>
      <p class="text-gray-900 font-bold text-xl">75</p>
      <p class="text-gray-300 uppercase text-sm mt-2">Posts</p>
    </div>

    <div>
      <p class="text-gray-900 font-bold text-xl">2.5k</p>
      <p class="text-gray-300 uppercase text-sm mt-2">Followers</p>
    </div>

    <div>
      <p class="text-gray-900 font-bold text-xl">5.2k</p>
      <p class="text-gray-300 uppercase text-sm mt-2">Following</p>
    </div>

  </div>

</div>

{/if}