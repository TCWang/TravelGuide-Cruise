<template>
  <section class="w-full max-w-6xl not-prose">
    <h2>郵輪旅遊 - 旅遊行程</h2>
    <div class="column space-x-24 ml-6">
      <div>類別</div>
      <div>標題</div>
    </div>
    <ul>
      <li style="list-style: none" v-for="post in posts" :key="post._path">
        <NuxtLink
          :to="post._path"
          class="column hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <div
            :class="{
              'text-white ': !post.displayCategory,
              'text-gray-900': post.displayCategory,
            }"
          >
            {{ post.category }}
          </div>
          <div class="pl-6">{{ post.title }}</div>
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>

<script setup>
useHead({
  title: "旅遊行程",
  meta: [{ name: "description", content: "郵輪旅遊 - 旅遊行程 " }],
});

const { data } = await useAsyncData("calendar-list", () =>
  queryContent("/calendar")
    .where({ _path: { $ne: "/calendar" } })
    .only([
      "_path",
      "title",
      "publishedAt",
      "category",
      "sequence",
      "link",
      "image",
    ])
    .sort({ publishedAt: -1 })
    .sort({ category: 1 })
    .find()
);

const posts = computed(() => {
  if (!data.value) {
    return [];
  }

  const result = [];
  let lastCategory = null;

  for (const post of data.value) {
    const publishedDate = new Date(post.publishedAt);
    const year = publishedDate.getFullYear();
    const month = publishedDate.getMonth() + 1; // Adding 1 because getMonth returns a zero-based index (0 for January)
    const day = publishedDate.getDate();

    // Format the date as desired (e.g., YYYY-MM-DD)
    const fullDate = `${year}-${month < 10 ? "0" : ""}${month}-${
      day < 10 ? "0" : ""
    }${day}`;

    const category = post.category;

    const displayCategory = category !== lastCategory;

    post.displayCategory = displayCategory;
    post.categorykeep = category;
    post.fullDate = fullDate;
    result.push(post);
    lastCategory = category;
  }

  return result;
});
</script>

<style scoped>
.column {
  @apply flex  py-1;
}
</style>
