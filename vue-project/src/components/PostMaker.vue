<template>
  <div>
Postmaker


<form @submit.prevent="insertPost">
  <label image_url="image_url">Image URL:</label>
  <input type="text" v-model="image_url" required>
  <label caption="caption">Caption:</label>
  <input type="text" v-model="caption" required>
  <button @click="addPost">Add Post</button>

</form>
  </div>
</template>

<script>
import { ref } from 'vue';
import supabase from '../supabase'; // Adjust the path as necessary

export default {
  name: 'PostMaker',
  setup() {
    const post = ref({
      
      username: 'john_doe',
      image_url: 'https://example.com/image.jpg',
      caption: 'Enjoying the sunny day!',
      likes: 150,
      
    });

    const insertPost = async (post) => {
      const { data, error } = await supabase
        .from('posts')
        .insert([post]);

      if (error) {
        console.error('Error inserting data:', error);
      } else {
        console.log('Data inserted successfully:', data);
      }
    };

    const addPost = () => {
      insertPost(post.value);
    };

    return {
      addPost
    };
  }
};
</script>

<style lang="scss" scoped>

</style>
