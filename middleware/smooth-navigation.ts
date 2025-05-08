// middleware/smooth-navigation.ts
export default defineNuxtRouteMiddleware((to, from) => {
    // Vous pouvez ajouter une logique ici pour contrôler la transition
    // Par exemple, définir un état global de chargement
    const nuxtApp = useNuxtApp();
    nuxtApp.hook('page:start', () => {
      // Logique au début de la navigation
    });
    
    nuxtApp.hook('page:finish', () => {
      // Logique à la fin de la navigation
    });
  })