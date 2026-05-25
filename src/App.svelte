<script lang="ts">
  import { onMount } from 'svelte'

  import Feed from './lib/components/Feed.svelte'
  import Menu from './lib/components/Menu.svelte'
  import Profile from './lib/components/Profile.svelte'
  import Stories from './lib/components/Stories.svelte'

  import { loadUsers } from './lib/states/user-state.svelte'
  import { loadPhotos } from './lib/states/photo-state.svelte'

  onMount(async () => {
    await loadUsers()
    await loadPhotos()
  })
</script>

<div class="min-h-screen bg-[#f5f5f5] p-10">

  <div class="grid grid-cols-[320px_1fr] gap-12">

    <div class="bg-white rounded-[40px] p-8 shadow-sm h-fit">

      <div class="flex items-center gap-2 mb-12 pt-2 overflow-visible">
          <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          class="w-9 h-9"
          fill="none"
          stroke="#ff4f8b"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <rect
            x="2"
            y="2"
            width="20"
            height="20"
            rx="5"
            ry="5"
          ></rect>

          <path
            d="M16 11.37a4 4 0 1 1-4.63-4.63
            4 4 0 0 1 4.63 4.63z"
          ></path>

          <line
            x1="17.5"
            y1="6.5"
            x2="17.51"
            y2="6.5"
          ></line>

        </svg>

        <h1
          class="text-4xl italic font-bold tracking-tight leading-tight pb-1 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent"
        >
          Instagram
        </h1>

      </div>

      <Profile />

      <Menu />

    </div>

    <div class="flex flex-col gap-16">

      <Stories />

      <Feed />

    </div>

  </div>

</div>