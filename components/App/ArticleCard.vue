<template>
  <NuxtLink :to="article._path" class="group h-full">
    <article class="bg-white dark:bg-black border border-gray-200 dark:border-[#1a1a1a] rounded-lg p-4 transition-all duration-300 hover:border-gray-300 dark:hover:border-[#2a2a2a] hover:bg-gray-50 dark:hover:bg-[#080808] h-full flex flex-col">
      <NuxtImg
        v-if="article.thumbnail"
        :src="article.thumbnail"
        :alt="article.title"
        class="w-full aspect-square object-cover rounded-lg mb-4"
        :placeholder="[50, 30]"
        width="auto"
        height="auto"
        format="webp"
      />
      <time
        class="relative z-10 order-first mb-3 flex items-center text-sm text-gray-600 dark:text-gray-500 pl-3.5"
        :datetime="article.published"
      >
        <span
          class="absolute inset-y-0 left-0 flex items-center"
          aria-hidden="true"
        >
          <span
            class="h-4 w-0.5 rounded-full bg-gray-200 dark:bg-gray-700"
          ></span>
        </span>
        {{ getReadableDate(article.published) }}
      </time>
      <h2
        class="text-base font-semibold font-display tracking-tight text-gray-800 dark:text-gray-300 group-hover:text-primary-400 transition-colors duration-300"
      >
        {{ article.title }}
      </h2>
      <p class="relative z-10 mt-2 text-sm text-gray-600 dark:text-gray-400">
        {{ article.description }}
      </p>

    </article>
  </NuxtLink>
</template>

<script setup>
defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const getReadableDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};
</script>