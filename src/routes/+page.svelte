<script>
    import { goto } from '$app/navigation'
  import ArrowRightIcon from '$lib/components/ArrowRightIcon.svelte'
  import PostsList from '$lib/components/PostsList.svelte'
  import SocialLinks from '$lib/components/SocialLinks.svelte'
  import { avatar, bio, name } from '$lib/info.js'

  /** @type {import('./$types').PageData} */
  export let data
  
</script>

<svelte:head>
  <title>{name}</title>
  <meta name="description" content={bio} />
</svelte:head>

<div class="flex flex-col flex-grow gap-8 pb-16">
  <!-- bio -->
  <section class="flex flex-col items-center gap-16 pt-8 pb-4">
    <div class="flex flex-col items-center w-full gap-6 rounded-lg">
      <img
        src={avatar}
        alt={name}
        class="mx-auto border-4 border-dashed border-green-500 rounded-full w-48 h-48 animate-blink"
      />
      <div class="flex gap-6">
        <SocialLinks />
      </div>
      <p class="text-base text-zinc-600 dark:text-zinc-400">
        {bio}
      </p>
    </div>
  </section>
  <section class="w-full">
    <h2 class="text-sm font-medium sm:text-base text-zinc-500 dark:text-zinc-400 pb-4">List by tags</h2>
    <div class="flex w-full flex-wrap justify-center mb-4 pb-4">
      {#each data.tags as tag}
        <a
          data-te-chip-init
          data-te-ripple-init
          class="[word-wrap: break-word] my-[5px] mr-4 flex h-[32px] cursor-pointer items-center justify-between rounded-[16px] bg-green-300 py-0 px-[12px] text-[13px] font-normal normal-case leading-loose text-zinc-500 shadow-none transition-[opacity] duration-300 ease-linear hover:!shadow-none dark:bg-green-400 dark:text-zinc-600"
          data-te-close="true" href="/by-tags/{tag}">
          {tag}
        </a>
      {/each}
    </div>
    <div class="flex items-center justify-between gap-4 mb-8">
      <h2 class="text-sm font-medium sm:text-base text-zinc-500 dark:text-zinc-400">
        Recently Published
      </h2>
      <a href="/posts" class="flex items-center gap-1 text-sm font-medium text-green-500"
        >View All <ArrowRightIcon class="w-4 h-4" /></a
      >
    </div>
    <PostsList posts={data.posts} />
  </section>
</div>
