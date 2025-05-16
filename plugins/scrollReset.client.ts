export default defineNuxtPlugin((nuxtApp) => {
  // Configuration du défilement doux pour toute la page
  if (process.client) {
    // Applique le comportement de défilement doux à tout le document
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Pour les changements de page
    nuxtApp.hook('page:finish', () => {
      // Défilement doux vers le haut avec une durée plus longue
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Pour les liens d'ancrage dans la page
    nuxtApp.hook('app:mounted', () => {
      document.addEventListener('click', (e) => {
        const link = e.target.closest('a');
        if (link && link.hash && link.origin === window.location.origin) {
          e.preventDefault();
          
          // Récupérer l'élément cible
          const targetElement = document.querySelector(link.hash);
          if (targetElement) {
            // Calculer la position avec un décalage pour les en-têtes fixes
            const headerOffset = 100; // Ajustez selon la taille de votre en-tête
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            // Défilement avec une animation personnalisée
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
            
            // Mettre à jour l'URL avec le hash
            history.pushState(null, null, link.hash);
          }
        }
      });
    });
  }
});