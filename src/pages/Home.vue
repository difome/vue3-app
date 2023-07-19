<script setup>
import { useBlogStore } from '@/stores/blog';
import { ref, onMounted } from 'vue';
import { formatPublishDate } from '@/utils/date'
const blogStore = useBlogStore();
const blogs = ref([]);

onMounted(async () => {
  await blogStore.getPosts();
  blogs.value = blogStore.posts;
});
</script>

<template>
  <div class="blog" v-for="blog in blogs" :key="blog._id">

    <h2 class="blog__title">{{ blog.title }}</h2>
    <time :datetime="blog.createdAt" class="blog__publish-time">
    {{ formatPublishDate(blog.createdAt) }}
    </time>
    <p class="blog__content">{{ blog.content }}</p>

     <div class="blog__author">
      <img class="blog__author-avatar" :src="blog.author.avatar">
        <span class="blog__author-name">
          {{ blog.author.nickname }}
        </span>
      </div>

   </div>
</template>

<style lang="sass" scoped>
// @import '../assets/styles/main'

.blog
  margin-bottom: 40px

  &__title
    font-size: 1.5rem
    margin-bottom: 10px

  &__publish-time
    font-size: 0.9rem
    color: #999

  &__author
    display: flex
    align-items: center

    &-avatar
      margin-right: 15px
      border: 2px solid #333
      height: 34px
      height: 34px
      border-radius: 50%

    &-name
      font-weight: bold

  &__content
    font-size: 1.1rem
    color: #666
</style>
