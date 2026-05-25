<script lang="ts">
  import type { Photo } from '../models/photo.model'
  import { random } from '../utils/random'
  import { users } from '../states/user-state.svelte'

  import {
    Heart,
    MessageCircle
  } from 'lucide-svelte'

  export let photo: Photo

  let likes = random(10, 400)
  let comments = random(10, 400)

  let liked = false

  function toggleLike() {
    liked = !liked

    if (liked) {
      likes++
    } else {
      likes--
    }
  }

  $: randomUser =
    $users.length > 0
      ? $users[random(0, $users.length - 1)]
      : null
</script>

<div class="bg-white rounded-[30px] overflow-hidden shadow-sm">

  <img
    src={photo.download_url}
    alt=""
    class="w-full h-[300px] object-cover"
  >

  <div class="flex justify-between items-center p-6">

    <div class="flex items-center gap-4">

      {#if randomUser}

        <img
          src={randomUser.avatar}
          alt=""
          class="w-12 h-12 rounded-full"
        >

        <p class="text-gray-900 font-bold text-xl">
          {randomUser.name}
        </p>

      {/if}

    </div>

    <div class="flex gap-6 text-gray-400">

      <button
        on:click={toggleLike}
        class="flex items-center gap-2"
      >

        <Heart
          size={22}
          fill={liked ? '#ff4f8b' : 'none'}
          color={liked ? '#ff4f8b' : '#9ca3af'}
        />

        <span class="font-semibold">
          {likes}
        </span>

      </button>

      <div class="flex items-center gap-2">

        <MessageCircle
          size={22}
          color="#9ca3af"
        />

        <span class="font-semibold">
          {comments}
        </span>

      </div>

    </div>

  </div>

</div>