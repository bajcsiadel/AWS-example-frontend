<script setup lang="ts">
/* data */
const darkCssSelector: string = "dark-theme";

/* computed */
const isDark: ComputedRef<boolean> = computed(() => document?.documentElement?.classList?.contains(darkCssSelector) ?? false)

/* methods */
function toggleDarkMode() {
    document.documentElement.classList.toggle(darkCssSelector);
}
</script>

<template>
    <div class="tw:h-screen tw:flex tw:flex-col tw:justify-between tw:bg-white tw:dark:bg-green-700">
        <nav id="navigation-bar" class="tw:bg-green-400 tw:py-5 tw:shadow-md tw:dark:bg-green-950">
          <div class="tw:flex tw:justify-between container">
            <router-link to="/" class="tw:text-2xl tw:text-black tw:dark:text-green-400 tw:hover:cursor-pointer tw:hover:underline tw:transition-all">AWS exercise</router-link>
            <div class="tw:flex tw:gap-x-4">
              <router-link to="/" class="tw:text-black tw:dark:text-green-400 tw:hover:cursor-pointer tw:hover:underline tw:transition-all">About</router-link>
              <router-link to="todo-list" class="tw:text-black tw:dark:text-green-400 tw:hover:cursor-pointer tw:hover:underline tw:transition-all">TODO list</router-link>
            </div>
            <div class="tw:flex tw:flex-nowrap tw:items-center tw:justify-center tw:gap-x-1">
              <i class="fa-solid fa-moon tw:text-black tw:dark:text-green-400"></i>
              <prime-toggle-switch @change="toggleDarkMode" :default-value="!isDark" />
              <i class="fa-regular fa-sun tw:text-black tw:dark:text-green-400"></i>
            </div>
          </div>
        </nav>
        <div id="main-content" class="container tw:mt-6 tw:grow">
            <slot></slot>
        </div>
        <footer id="footer" class="tw:bg-black tw:py-5 tw:text-center tw:text-white">
            &#169; by Adél Bajcsi as AWS exercise
        </footer>
    </div>
</template>
