<template>
  <div class="blog">
    <h1 v-font="100">{{ pageName }}</h1>
    <p>{{ pageDescription }}</p>
    <b-container>
      <b-row>
        <b-col col md="8">
          <div class="post-area">
            <BlogPosts
              v-for="post in posts"
              :key="post.id"
              :views="post.views"
              :title="post.title"
              :date="post.date"
              :content="post.content"
              :author="post.author"
              :category="post.category"
            />
          </div>
        </b-col>
        <b-col col md="4">
          <div class="sidebar">
            <BlogSidebar />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import BlogPosts from "@/components/Blog/BlogPosts";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import jsonBlogs from "../json/Blog_Posts.json";

export default {
  data: function() {
    return {
      pageName: "Blog ",
      pageDescription: "This Is Blog Page",
      posts: jsonBlogs
    };
  },
  name: "blog",
  components: {
    BlogPosts,
    BlogSidebar
  }
};
</script>
