<template>
    <form @submit.prevent="login">
      <label for="email">Email:</label>
      <input type="email" v-model="email" required>
      <label for="password">Password:</label>
      <input type="password" v-model="password" required>
      <button type="submit">Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { supabase } from '../supabase.js';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
  
      const login = async () => {
        try {
          const { user, error } = await supabase.auth.signInWithPassword({
            email: email.value,
            password: password.value,
          });
          if (error) {
            throw error;
          }
          console.log('User logged in:', user);
        } catch (error) {
          console.error('Login error:', error.message);
        }
      };
  
      return {
        email,
        password,
        login,
      };
    },
  };
  </script>