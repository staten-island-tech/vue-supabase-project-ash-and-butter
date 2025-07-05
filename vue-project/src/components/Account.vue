<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'
import PostMaker from './PostMaker.vue';
import PostDis from './PostDis.vue';

const props = defineProps(['session'])
const { session } = toRefs(props)

const loading = ref(true)
const username = ref('')
const website = ref('')
const avatar_url = ref('')

onMounted(() => {
  getProfile()
})

async function getProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const { data, error, status } = await supabase
      .from('profiles')
      .select(`username, website, avatar_url`)
      .eq('id', user.id)
      .single()

    if (error && status !== 406) throw error

    if (data) {
      username.value = data.username
      website.value = data.website
      avatar_url.value = data.avatar_url
    }
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function updateProfile() {
  try {
    loading.value = true
    const { user } = session.value

    const updates = {
      id: user.id,
      username: username.value,
      website: website.value,
      avatar_url: avatar_url.value,
      updated_at: new Date(),
    }

    const { error } = await supabase.from('profiles').upsert(updates)

    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}

async function signOut() {
  try {
    loading.value = true
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  } catch (error) {
    alert(error.message)
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div style=" width: 100vw; display: flex;height: 50rem;">
    <div style=" width: 30vw;height: 50rem;">
      <PostMaker />
      <PostDis />
    </div>
    <div style=" width: 70vw;height: 50rem; ">
      <div style=" width: 55vw; margin-right: auto; margin-left: auto;">
        <div style="width:55vw; height: 20rem; display: flex;">
          <div style="width: 20rem; ">
            <img src="/CubeLogo.png" alt="" style="height: 15rem; width: 15rem; margin-top: 2rem; margin-left: 2rem; border-radius: .5rem;">
          </div>
          <div style="margin-top: 2rem;"><!--Profile Info-->
            <h1>Welcome</h1>
            <form class="form-widget" @submit.prevent="updateProfile" style="font-size: large;">
              <div>
                <label for="email" style="margin-left: 2rem; margin-right: 2.9rem;">Email:</label>
                <input id="email" style="font-size: .9rem;background-color: white; color: black;" type="text" :value="session.user.email" disabled />
              </div>
              <div>
                <label for="username" style="margin-left: 2rem; margin-right: 2.9rem;">Name:</label>
                <input id="username" style="font-size: .9rem;background-color: white; color: black;" type="text" v-model="username" />
              </div>
              <div>
                <label for="website" style="margin-left: 2rem; margin-right: 2rem;">Website:</label>
                <input id="website" style="font-size: .9rem;" type="url" v-model="website" />
              </div>
              <div style="display: flex;">
                <div>
                  <input type="submit" style="background-color: white; color: black; font-size: large; border-radius: .5rem;border-style: solid; border-color: black; margin-top: 1rem; margin-bottom: 1rem; margin-left: 2rem;" class="button primary block" :value="loading ? 'Loading ...' : 'Update'"
                  :disabled="loading" />
                </div>

                <div>
                  <button style="background-color: white; color: black; font-size: large; border-radius: .5rem;border-style: solid; border-color: black; margin-top: 1rem; margin-bottom: 1rem; margin-left: 1rem;" class="button block" @click="signOut" :disabled="loading">Sign Out</button>
                </div>
              </div>
              
            </form>
          </div>

        </div>
        <!-- <div style="background-color: green;width: 55vw; display:flex">
          <div style="background-color: red; border-width: .2rem;border-color: black ;width: 25rem; height: 33rem; border-radius: .5rem; border-color: black; margin: 2rem;">Post Insertion Template
            <div style="width: 25rem; height: 4rem; border-top-left-radius: .5rem; border-top-right-radius: .5rem; display: flex;">
              <div style="width: 4rem; height: 4rem; border-top-left-radius: .5rem;">
                <img style="width: 3rem; border-radius: .5rem; margin-top: .5rem; margin-bottom: .5rem;margin-left: .5rem; margin-right: .5rem" src="/CubeLogo.png" alt="Cube Logo Image">
              </div>
              <div style="width: 21rem; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-size: .98rem;"> 
                <h3 style="margin-top: 1.5rem; font-size: 14px; font-weight: 400; line-height: 18px;">.</h3>
              </div>
            </div>
            <div style="width: 25rem; height: 26rem; border-bottom-left-radius: .5rem;border-bottom-right-radius: .5rem;">
              <img style="width: 23.8rem; margin-left: .6rem; margin-right: .6rem;" src="/CubeLogo.png" alt="">
            </div>
            <div style="height: 3rem;width:25rem;"></div>
            
            
          </div>
          
        </div> -->
      </div>
    </div>
  </div>



  <form class="form-widget" @submit.prevent="updateProfile">
    <!-- Add to body -->
    <Avatar v-model:path="avatar_url" @upload="updateProfile" size="10" />

    <!-- Other form elements -->
  </form>
  
  
  
  
</template>

<script>
// Import the new component
import Avatar from './Avatar.vue'

</script>
// Add the new component to the components object
components: {
  Avatar
}
</script>


<style>
</style>