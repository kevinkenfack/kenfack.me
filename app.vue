<template>
  <NuxtLoadingIndicator color="#10b981" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtLayout>
      <NuxtPage :key="$route.fullPath" />
    </NuxtLayout>
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, filter 0.3s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
