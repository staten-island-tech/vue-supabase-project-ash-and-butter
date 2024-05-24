<template>
  <div class="mainbigdiv" style="align-self: center; border-radius: .5rem; border-color: brown; background-color: red; padding: 1rem; display: flex;">
    <div class="divthatholdsthelogo" style="align-items: center;  border-color: blue; background: purple; padding: 2rem; margin: 1rem; border-radius: .5rem;">
      <img src="/ASH_TEK_logo.png"  style="" alt="">
    </div>
    <div class="divthatholdstheLOGIN" style="align-items: center; border-radius: .5rem; border-color: green; background: purple; width: 40rem; margin: 1rem; ">
      <div class="smalllogodiv" style="margin: 2rem; background-color: red; border-radius: .5rem; display: flex">
        <img class="smalllogo" src="/ASH_TEK_logo.png" style="max-width: 10%; max-height: 10%; " alt="">
        <h1 class="sitenamenexttologo" style="margin-left: auto; margin-right: auto; color: black;">Obama obama obama obama</h1>
      </div>
      <div class="usernamediv" style="margin-left: 2rem; margin-right: 2rem; margin-bottom: 2rem; background-color: red; border-radius: .5rem;">
        <input type="text" class="usernameinput" style="margin: .5rem;">
      </div>
      <div class="passworddiv"></div>
      <div class="loginbtndiv"></div>
      <div class="ordiv"></div>
      <div class="othertypesofLOGINdiv">
        <div class="loginwGITHUBdiv"></div>
        <div class="loginwGOOGLEdiv"></div>
      </div>
      <div class="forgorpassdiv"></div>
    </div>
  </div>
  <!-- <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" v-model="email" required>
    <label for="password">Password:</label>
    <input type="password" v-model="password" required>
    <button type="submit">Login</button>
  </form> -->
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
<style scoped>
</style>