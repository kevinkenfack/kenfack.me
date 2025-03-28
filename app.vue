<template>
  <NuxtLoadingIndicator color="#14b8a6" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtPage />
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-5px);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(5px);
}
</style>

<!--

<template>
  <div class="min-h-screen 
    bg-gray-100 dark:bg-black 
    bg-[url('/background-light.png')] dark:bg-[url('/background-dark.png')] 
    bg-repeat bg-fixed">
    <NuxtLoadingIndicator color="#14b8a6" />
    <AppNavbar />
    <div class="h-32"></div>
    <UContainer>
      <NuxtPage />
    </UContainer>
    <div class="h-32"></div>
    <AppFooter />
  </div>
</template>

-->

