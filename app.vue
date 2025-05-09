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
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
<<<<<<< HEAD
-->
=======
-->


<!--
<div class="min-h-screen bg-gray-100 dark:bg-black 
  bg-[radial-gradient(rgba(0,0,0,0.15)_1px,transparent_1px)] 
  dark:bg-[radial-gradient(rgba(255,255,255,0.10)_1px,transparent_1px)] 
  bg-[size:22px_22px] bg-repeat bg-fixed"> 
</div>
-->
>>>>>>> d132d83a293c5fbd66af98291ee2a3d0aeeb8c1d
