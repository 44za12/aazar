<script>
  import '../app.css'
  import '../prism.css'
  import MoonIcon from 'heroicons-svelte/solid/MoonIcon.svelte'
  import SunIcon from 'heroicons-svelte/solid/SunIcon.svelte'
  import { browser } from '$app/environment'
  import { name } from '$lib/info'
  import { page } from '$app/stores'

  let isDarkMode = browser ? Boolean(document.documentElement.classList.contains('dark')) : true

  function disableTransitionsTemporarily() {
    document.documentElement.classList.add('[&_*]:!transition-none')
    window.setTimeout(() => {
      document.documentElement.classList.remove('[&_*]:!transition-none')
    }, 0)
  }
  // remove this if you do not want your pages to be prerendered
import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent, isSupported } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyB53g8nKGUhAncw57fgUyNpMyioF4tLCyc",
    authDomain: "aazar-d32a4.firebaseapp.com",
    databaseURL: "https://aazar-d32a4-default-rtdb.firebaseio.com",
    projectId: "aazar-d32a4",
    storageBucket: "aazar-d32a4.appspot.com",
    messagingSenderId: "975158756438",
    appId: "1:975158756438:web:a1dc0cb402e38686e327f7",
    measurementId: "G-LW3RWM76EE"
};
let app = null;
let analytics = null;
isSupported().then((result) => {
    if (result) {
        app = initializeApp(firebaseConfig);
        analytics = getAnalytics(app);
    }
})
</script>

<div class="flex flex-col min-h-screen ">
  <div class="flex flex-col flex-grow w-full px-4 py-2">
    <header class="flex items-center justify-between w-full max-w-2xl py-4 mx-auto lg:pb-8">
      <a
        class="text-lg font-bold sm:text-2xl text-green-500"
        href="/"
      >
        {name}
      </a>

      <button
        type="button"
        role="switch"
        aria-label="Toggle Dark Mode"
        aria-checked={isDarkMode}
        class="w-5 h-5 sm:h-8 sm:w-8 sm:p-1"
        on:click={() => {
          isDarkMode = !isDarkMode
          localStorage.setItem('isDarkMode', isDarkMode.toString())

          disableTransitionsTemporarily()

          if (isDarkMode) {
            document.querySelector('html').classList.add('dark')
          } else {
            document.querySelector('html').classList.remove('dark')
          }
        }}
      >
        <MoonIcon class="hidden text-zinc-500 dark:block" />
        <SunIcon class="block text-zinc-400 dark:hidden" />
      </button>
    </header>
    <main
      class="flex flex-col flex-grow w-full mx-auto"
      class:max-w-2xl={!$page.data.layout?.fullWidth}
    >
      <slot />
    </main>
  </div>
</div>
