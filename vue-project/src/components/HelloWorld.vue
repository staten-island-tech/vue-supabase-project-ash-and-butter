<script>
import { ref } from 'vue';
import { supabase } from '../supabase.js';

export default {
  setup() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
      try {
        const { user, error } = await supabase.auth.signIn({
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

<template>
  <form @submit.prevent="login">
    <label for="email">Email:</label>
    <input type="email" v-model="email" required>
    <label for="password">Password:</label>
    <input type="password" v-model="password" required>
    <button type="submit">Login</button>
  </form>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
