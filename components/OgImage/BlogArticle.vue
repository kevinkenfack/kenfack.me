<script lang="ts" setup>
/**
 * @credits NuxtLabs <https://nuxtlabs.com/>
 * @see https://github.com/nuxt/nuxt.com/blob/main/components/OgImage/Docs.vue
 * Adapté pour Kevin Kenfack
 */
import { computed } from 'vue'

const props = withDefaults(defineProps<{ title?: string, description?: string, headline?: string }>(), {
  title: 'title',
  description: 'description',
  headline: 'Kevin Kenfack Developer & Entrepreneur',
})

const title = computed(() => (props.title || '').slice(0, 120))
const description = computed(() => (props.description || '').slice(0, 200))
</script>

<template>
  <div style="width: 100%; height: 100%; background-color: black; display: flex; align-items: center; justify-content: center; padding: 15px; box-sizing: border-box;">
    <!-- Container principal -->
    <div style="width: 100%; height: 100%; display: flex; border: 15px solid rgba(16, 185, 129, 0.3); border-radius: 12px; overflow: hidden; position: relative;">
      <!-- Effet décoratif en arrière-plan (petit) -->
      <div style="position: absolute; top: -100px; right: -100px; width: 500px; height: 500px; opacity: 0.4; z-index: 1;">
        <svg width="500" height="500" viewBox="0 0 629 593" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_f_199_94966)">
            <path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#10b981" />
          </g>
          <defs>
            <filter id="filter0_f_199_94966" x="0.873535" y="-659" width="1255.25" height="1251.52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
            </filter>
          </defs>
        </svg>
      </div>

      <!-- Grand dégradé en haut à droite -->
      <div style="position: absolute; top: 0; right: 0; width: 629px; height: 593px; opacity: 0.3; z-index: 1;">
        <svg
          width="629"
          height="593"
          viewBox="0 0 629 593"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter1_f_199_94966)">
            <path d="M628.5 -578L639.334 -94.4223L806.598 -548.281L659.827 -87.387L965.396 -462.344L676.925 -74.0787L1087.69 -329.501L688.776 -55.9396L1160.22 -164.149L694.095 -34.9354L1175.13 15.7948L692.306 -13.3422L1130.8 190.83L683.602 6.50012L1032.04 341.989L668.927 22.4412L889.557 452.891L649.872 32.7537L718.78 511.519L628.5 36.32L538.22 511.519L607.128 32.7537L367.443 452.891L588.073 22.4412L224.955 341.989L573.398 6.50012L126.198 190.83L564.694 -13.3422L81.8734 15.7948L562.905 -34.9354L96.7839 -164.149L568.224 -55.9396L169.314 -329.501L580.075 -74.0787L291.604 -462.344L597.173 -87.387L450.402 -548.281L617.666 -94.4223L628.5 -578Z" fill="#10b981" />
          </g>
          <defs>
            <filter
              id="filter1_f_199_94966"
              x="0.873535"
              y="-659"
              width="1255.25"
              height="1251.52"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="40.5" result="effect1_foregroundBlur_199_94966" />
            </filter>
          </defs>
        </svg>
      </div>

      <!-- Contenu principal -->
      <div style="display: flex; width: 100%; height: 100%; z-index: 2; position: relative;">
        <!-- Zone de texte (côté gauche) -->
        <div style="flex: 1; padding: 60px 40px 0 40px; display: flex; flex-direction: column; justify-content: flex-start;">
          <!-- Site name / headline -->
          <div style="background-color: rgba(16, 185, 129, 0.1); border-left: 3px solid #10b981; padding: 6px 12px; margin-bottom: 50px; display: inline-block; align-self: flex-start;">
            <p style="color: #10b981; margin: 0; font-size: 30px; text-transform: capitalize; font-weight: 600; letter-spacing: 1px;">
              {{ headline }}
            </p>
          </div>
          
          <!-- Titre -->
          <h1 style="color: white; font-size: 70px; line-height: 1.2; margin: 0 0 24px 0; font-weight: 700;">
            {{ title }}
          </h1>
          
          <!-- Description 
          <p style="color: #E4E4E7; font-size: 22px; line-height: 1.5; margin: 0; opacity: 0.9; max-width: 90%;">
            {{ description }}
          </p>
          -->
        </div>
        
        <!-- Photo en bas à droite -->
        <div style="position: absolute; bottom: 40px; right: 40px; z-index: 3;">
          <div style="width: 150px; height: 150px; border-radius: 10%; overflow: hidden; border: 3px solid #10b981;">
            <img src="/picture.jpg" alt="Kevin Kenfack" style="width: 100%; height: 100%; object-fit: cover;" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>