<script lang="ts">
  import {
    Grid2x2,
    Search,
    Bell,
    Mail
  } from 'lucide-svelte'
</script>

<div class="flex flex-col gap-8 mt-12 text-gray-500">

  <button class="flex items-center gap-4 bg-pink-50 text-pink-500 p-5 rounded-2xl font-bold text-xl">
    <Grid2x2 size={24} />Feed
  </button>

  <button class="flex items-center gap-4 text-xl">
    <Search size={24} />Explore
  </button>

  <button class="flex items-center justify-between text-xl">

    <div class="flex items-center gap-4">
      <Bell size={24} />Notifications
    </div>

    <span class="bg-gray-100 text-gray-500 text-sm px-3 py-1 rounded-full">6</span>

  </button>

  <button class="flex items-center justify-between text-xl">

    <div class="flex items-center gap-4">
      <Mail size={24} />Messages
    </div>

    <span class="bg-gray-100 text-gray-500 text-sm px-3 py-1 rounded-full">29</span>

  </button>

</div>