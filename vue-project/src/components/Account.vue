<script setup>
import { supabase } from '../supabase'
import { onMounted, ref, toRefs } from 'vue'

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
  <div style="background-color: red; width: 100vw; display: flex;height: 50rem;">
    <div style="background-color: blue; width: 30vw;height: 50rem;"></div>
    <div style="background-color: aqua; width: 70vw;height: 50rem; ">
      <div style="background-color: red; width: 55vw; height: 50rem; margin-right: auto; margin-left: auto;">

        <div style="background-color: blanchedalmond;width:55vw; height: 20rem; display: flex;">
          <div style="width: 20rem; background-color: purple;">
            <img src="/CubeLogo.png" alt="" style="height: 15rem; width: 15rem; margin-top: 2rem; margin-left: 2rem; border-radius: .5rem;">
          </div>
          <div style="margin-top: 2rem;">
            <h1>Welcome</h1>
            <form class="form-widget" @submit.prevent="updateProfile" style="font-size: large;">
              <div>
                <label for="email" style="margin-left: 2rem; margin-right: 2.9rem;">Email:</label>
                <input id="email" style="background-color: white; color: black;" type="text" :value="session.user.email" disabled />
              </div>
              <div>
                <label for="username" style="margin-left: 2rem; margin-right: 2.9rem;">Name:</label>
                <input id="username" style="background-color: white; color: black;" type="text" v-model="username" />
              </div>
              <div>
                <label for="website" style="margin-left: 2rem; margin-right: 2rem;">Website:</label>
                <input id="website" type="url" v-model="website" />
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
<style>
</style>