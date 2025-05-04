<template>
  <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
    <div 
      v-for="tech in technologies" 
      :key="tech.name"
      class="flex items-center gap-3 p-3 bg-gray-50 dark:bg-[#080808] rounded-lg border border-gray-200 dark:border-[#1a1a1a] hover:border-gray-300 dark:hover:border-[#2a2a2a] transition-colors duration-300"
    >
      <NuxtImg 
        :src="tech.icon" 
        :alt="tech.name"
        class="w-6 h-6"
        width="24"
        height="24"
        format="webp"
        loading="lazy"
        placeholder
      />
      <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ tech.name }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const technologies = [
  { name: 'Shadcn', icon: '/tech/shadcn.svg' },
  { name: 'Figma', icon: '/tech/figma.svg' },
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'Next.js', icon: '/tech/nextjs.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'JavaScript', icon: '/tech/javascript.svg' },
  { name: 'Node.js', icon: '/tech/nodejs.svg' },
  { name: 'Vercel', icon: '/tech/vercel.svg' },
  { name: 'Tailwind', icon: '/tech/tailwind.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  { name: 'Framer', icon: '/tech/framer.png' },
  { name: 'Git', icon: '/tech/git.svg' }
];
</script> 