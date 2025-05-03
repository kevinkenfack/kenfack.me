<template>
  <NuxtLayout>
    <div class="min-h-screen bg-gray-100 dark:bg-black 
      bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] 
      dark:bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] 
      bg-[size:22px_22px] bg-repeat bg-fixed">
      <NuxtLoadingIndicator color="#38bdf8" />
      <slot />
    </div>
  </NuxtLayout>
</template> 