<template>
  <div>
    <div class="mb-6 flex items-center gap-3">
      <div
        class="flex-none rounded-full p-1 text-primary-500 bg-primary-500/10"
      >
        <div class="h-1.5 w-1.5 rounded-full bg-current"></div>
      </div>
      <h2 class="uppercase text-xs font-semibold text-gray-400">
        TÉMOIGNAGES
      </h2>
    </div>
    <div class="space-y-4">
      <div 
        v-for="(testimonial, index) in testimonials" 
        :key="index" 
        class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-4 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808] flex flex-col group"
      >
        <div class="flex items-center mb-4">
          <NuxtImg
            :src="testimonial.avatar"
            :alt="testimonial.name"
            class="w-16 h-16 rounded-full mr-4 object-cover"
            width="auto"
            height="auto"
            format="webp"
          />
          <div>
            <h3 class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300">
              {{ testimonial.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ testimonial.role }}
            </p>
          </div>
        </div>
        <blockquote class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400 italic">
          "{{ testimonial.quote }}"
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice de Projet, DotWorld",
    avatar: "/client1.webp",
    quote: "Kevin apporte une approche innovante et méthodique à chaque projet. Sa capacité à comprendre rapidement les défis techniques est remarquable."
  },
  {
    name: "Alexandre Dupont",
    role: "CTO, UIRoom",
    avatar: "/client2.webp",
    quote: "Un développeur full-stack exceptionnel qui combine créativité technique et souci du détail. Kevin est un atout précieux pour toute équipe."
  }
];
</script>

<style scoped>
.testimonial-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.testimonial-card:hover {
  transform: translateY(-10px);
}
</style>
