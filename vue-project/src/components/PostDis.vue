<template>
  <div>
      <h4>Posts</h4>
      <ul id="superlist">qqqqqqqqqqqq</ul>
  </div>
</template>


<script>

import { ref, onMounted } from 'vue'
import { supabase } from '../supabase.js'


export default {
  // ...
  data() {
  return {
    posts: [],
  };
},
  methods: {    
    displayPosts() {     
      console.log('displayPosts');
      //console.log(this.posts);
      const ul = document.getElementById('superlist');
      this.posts.forEach(post => {
        const li = document.createElement('li');
        li.innerHTML = `
          <img src="${post.image_url ?? ''}" alt="${post.caption ?? ''}">
          <p>${post.caption}</p>
        `;
        ul.appendChild(li);
      });
    },
  
  async fetchPosts() {
    const { data, error } = await supabase
      .from('posts')
      .select('*');

    if (error) {
      console.error(error);
    } else {
      //console.log(data);
      this.posts = data;
    }
  },
},
  mounted() {
    this.fetchPosts().then(() => {
      this.displayPosts();
    });
    
    
  }
  // ...
}



    


    
</script>

