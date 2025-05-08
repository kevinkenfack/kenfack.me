<template>
  <article 
    class="relative group transition-all duration-300 ease-in-out"
  >
    <div class="flex items-start space-x-4">
      <div class="flex-shrink-0">
        <img 
          :src="testimonial.avatar" 
          :alt="testimonial.name"
          class="h-16 w-16 rounded-full object-cover border-2 border-transparent group-hover:border-primary-500/30 transition-all"
        />
      </div>
      <div class="flex-1">
        <div class="flex items-center justify-between">
          <div>
            <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              {{ testimonial.name }}
            </h3>
            <p class="text-sm text-gray-600 dark:text-gray-400">
              {{ testimonial.role }}
            </p>
          </div>
        </div>
        <blockquote 
          class="mt-3 italic text-gray-700 dark:text-gray-300 relative pl-4 border-l-2 border-primary-500/30 group-hover:border-primary-500 transition-all"
        >
          "{{ testimonial.quote }}"
        </blockquote>
      </div>
    </div>
  </article>
</template>

<script setup>
defineProps({
  testimonial: {
    type: Object,
    required: true
  }
})
</script>
