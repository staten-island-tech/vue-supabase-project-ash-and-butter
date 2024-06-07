<script setup>





import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { supabase } from './supabase'
import LoginMain from './components/LoginMain.vue'
import PostMaker from './components/PostMaker.vue'


const session = ref()

onMounted(() => {
  supabase.auth.getSession().then(({ data }) => {
    session.value = data.session
  })

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session
  })
})
</script>

<template>
  <head>

    
  </head>
  <div class="container" >
    <Account v-if="session" :session="session" />
    
    <LoginMain v-else/>
   
    
  </div>
</template>
