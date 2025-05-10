<template>
  <NuxtLoadingIndicator color="#10b981" />
  <AppNavbar />
  <div class="h-32"></div>
  <UContainer>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UContainer>
  <div class="h-32"></div>
  <AppFooter />
</template>

<style>
/* Page transition */
.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 5;
  filter: blur(1rem);
}
</style>
