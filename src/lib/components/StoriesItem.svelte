<script lang="ts">
  import type { User } from '../models/user.model'

  export let user: User
</script>

<div class="flex flex-col items-center gap-3">

  <div class="p-[3px] rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-blue-500">
    
    <div class="p-[2px] bg-white rounded-full">
      <img
        src={user.avatar}
        alt={user.name}
        class="w-24 h-24 rounded-full object-cover"
      >
    </div>

  </div>

  <p class="text-gray-600 text-lg font-bold">
    {user.name}
  </p>

</div>