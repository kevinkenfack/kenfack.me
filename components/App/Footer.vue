<template>
  <footer
    class="max-w-2xl mx-auto text-gray-400 dark:text-gray-600 text-sm text-center pb-8"
  >
    <nav class="flex justify-center gap-6 mb-6">
      <ULink 
        to="/projects" 
        class="hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
      >
        Projects
      </ULink>
      <ULink 
        to="/lab" 
        class="hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
      >
        Lab
      </ULink>
      <ULink 
        to="/bookmarks" 
        class="hover:text-primary-400 dark:hover:text-primary-400 transition-colors duration-300"
      >
        Bookmarks
      </ULink>
    </nav>
    <br>
    <p>© 2025 Kevin Kenfack. All rights reserved.</p>
  </footer>
</template>
