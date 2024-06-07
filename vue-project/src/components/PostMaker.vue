<template>
  <div>
Postmaker


<form @submit.prevent="insertPost">
  <label >Image URL:</label>
  <input type="text" v-model="image_url" required>
  <label >Caption:</label>
  <input type="text" v-model="caption" required>
  <button @click="addPost">Add Post</button>

</form>
  </div>
</template>

<script>
import { ref } from 'vue';
import {supabase} from '../supabase.js'; // Adjust the path as necessary

export default {
  methods: {
  async insertPost(event) {
    event.preventDefault();

    const { data, error } = await supabase
      .from('posts')
      .insert([
        { image_url: this.image_url, caption: this.caption },
      ]);

    if (error) {
      console.error('Error: ', error);
    } else {
      console.log('Post inserted: ', data);
    }
  },
}
  
};
</script>

<style lang="scss" scoped>

</style>
