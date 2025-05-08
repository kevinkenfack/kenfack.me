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
  <div class="min-h-screen bg-gray-100 dark:bg-black 
    bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] 
    dark:bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] 
    bg-[size:22px_22px] bg-repeat bg-fixed"> 
  </div>
-->