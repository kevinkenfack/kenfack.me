<template>
  <div class="h-full w-full" style="display: flex; align-items: center; justify-content: center; background: linear-gradient(to bottom right, #111827, #1f2937, #000000);">
    <!-- Formes décoratives -->
    <div class="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20" style="display: flex;">
      <div class="absolute top-[-80px] left-[-80px] w-[320px] h-[320px] rounded-full bg-emerald-500 blur-3xl"></div>
      <div class="absolute bottom-[40px] right-[40px] w-[240px] h-[240px] rounded-full bg-emerald-400 blur-3xl"></div>
      <div class="absolute top-[50%] left-[50%] w-[160px] h-[160px] rounded-full bg-emerald-300 blur-3xl" style="transform: translateX(-50%) translateY(-50%)"></div>
    </div>
    
    <!-- Contenu principal -->
    <div style="display: flex; flex-direction: column; width: 100%; height: 100%; padding: 80px; position: relative; z-index: 10;">
      <!-- Bordure verte sur le côté gauche -->
      <div style="position: absolute; left: 0; top: 0; bottom: 0; width: 16px; background: linear-gradient(to bottom, #34d399, #059669);"></div>
      
      <!-- Contenu principal -->
      <div style="display: flex; flex-direction: column; justify-content: space-between; height: 100%; margin-left: 48px;">
        <!-- Logo et date -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
          <div style="font-size: 24px; font-weight: 700; color: white;">
            <span style="color: #34d399;">Kevin</span><span style="color: white;">Kenfack</span>
          </div>
          <div v-if="date" style="color: #d1d5db; font-size: 18px;">{{ formatDate(date) }}</div>
        </div>
        
        <!-- Titre et description -->
        <div style="margin-top: auto; margin-bottom: auto;">
          <h1 style="font-size: 70px; font-weight: 900; color: white; line-height: 1.1; margin-bottom: 24px;">
            {{ title }}
          </h1>
          <p v-if="description" style="font-size: 30px; color: #d1d5db; margin-top: 24px; max-width: 800px;">
            {{ description }}
          </p>
        </div>
        
        <!-- Tags et URL -->
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 32px;">
          <div style="display: flex; gap: 12px;">
            <span 
              v-for="(tag, index) in tags" 
              :key="index" 
              style="padding: 8px 16px; background-color: rgba(16, 185, 129, 0.2); color: #34d399; border-radius: 9999px; font-size: 18px;"
            >
              #{{ tag }}
            </span>
          </div>
          <p style="font-size: 20px; color: #d1d5db;">
            kenfack.me
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
  description?: string
  author?: string
  date?: string
  tags?: string[]
  colorMode?: string
}>(), {
  title: 'Article de blog',
  description: '',
  author: 'Kevin Kenfack',
  date: '',
  tags: () => [],
  colorMode: 'dark'
})

// Format date to display in a readable format
function formatDate(dateString: string) {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  } catch (e) {
    return dateString;
  }
}
</script>
