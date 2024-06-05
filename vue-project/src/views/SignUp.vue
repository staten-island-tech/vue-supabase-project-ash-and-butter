<template>
  <div style="max-width: 100vw; margin-right: auto; align-self: center;">
    <div class="maxini" style="max-width: fit-content; margin-left: auto; margin-right: auto;">
      <div class="signupPageHolderMM">
        <div class="signupPageHolderM">
          <div class="signupPageHolderM1">
            <div class="signupPageHolderM11" aria-disabled="false" role="button" tabindex="0">
              <img class="signupPageHolderM111" src="/CubeCraft.png" alt="CubeCraft Logo">
            </div>
            <div class="signupPageHolderM12">

            </div>>
          </div>
          <div class="signupPageHolderM2">

          </div>
        </div>
      </div>
    </div>
  </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" v-model="email" required>
    <label for="password">Password:</label>
    <input type="password" v-model="password" required>
    <button type="submit">signUp</button>
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
          const { user, error } = await supabase.auth.signUp({
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
<style scoped>
</style>