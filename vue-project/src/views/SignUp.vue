<template>
  <div style="max-width: 100vw; margin-right: auto; align-self: center;">
    <div class="maxini" style="max-width: fit-content; margin-left: auto; margin-right: auto;">
      <div class="signupPageHolderMM">
        <div class="signupPageHolderM"> <!--Momento Logo, Sign Up, Sign In-->
          <div class="signupPageHolderM1"> <!--Momento Logo, Sign Up-->
            <div class="signupPageHolderM11" aria-disabled="false" role="button" tabindex="0">
              <img class="signupPageHolderM111" src="/CubeCraft.png" alt="CubeCraft Logo">
            </div> <!--Logo-->
            <div class="signupPageHolderM12">
              <form class="signupPageHolderM121" method="post">
                <div class="signupPageHolderM121A"><!--Sign Up Message-->
                  <span class="signupPageHolderM121A1" dir="auto">
                    "Sign up to post photos."
                  </span>
                </div> 
                <div class="signupPageHolderM1211"><!--Email-->
                  <div class="signupPageHolderM12111">
                    <label class="signupPageHolderM121111">
                      <span class="signupPageHolderM1211111">Email</span>
                      <input aria-label="Email" aria-required="true" autocapitalize="off" autocomplete="tel" autocorrect="off" class="signupPageHolderM1211112" type="email" v-model="email" required>
                    </label>
                  </div>
                </div> 
                <div class="signupPageHolderM1212"><!--Full Name-->
                  <div class="signupPageHolderM12121">
                    <label for="" class="signupPageHolderM121211">
                      <span class="signupPageHolderM1212111">Full Name</span>
                      <input type="text" class="signupPageHolderM1212112" aria-label="Full Name" aria-required="false" autocapitalize="sentences" autocorrect="off" value name="fullName">
                    </label>
                  </div>
                </div> 
                <div class="signupPageHolderM1213"><!--Username-->
                  <div class="signupPageHolderM12131">
                    <label for="" class="signupPageHolderM121311">
                      <span class="signupPageHolderM1213111">Username</span>
                      <input type="text" class="signupPageHolderM1213112" aria-label="Username" aria-required="true" autocapitalize="off" autocorrect="off" maxlength="30" value name="username">
                    </label>
                  </div>
                </div> 
                <div class="signupPageHolderM1214"><!--Password-->
                  <div class="signupPageHolderM12141">
                    <label for="" class="signupPageHolderM121411">
                      <span class="signupPageHolderM1214111">Password</span>
                      <input type="password" class="signupPageHolderM1214112" aria-required="true" aria-label="Password" autocapitalize="off" value name="password">
                    </label>
                  </div>
                </div> 
                <div class="signupPageHolderM1215"><!--Sign Up Button-->
                  <div class="signupPageHolderM12151">
                    <button class="signupPageHolderM121511" disabled type="submit">Sign up</button>
                  </div>
                </div> 
              </form>
            </div>>
          </div>
          <div class="signupPageHolderM2"> <!--Sign In-->
            <div class="signupPageHolderM21">
              <p class="signupPageHolderM211">
                Already have an account?
                <a href="" class="signupPageHolderM2111" role="link">
                  <RouterLink to="/" class="signupPageHolderM21111" role="link" dir="auto">Sign In</RouterLink>
                </a>
              </p>
            </div>
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
import { RouterLink } from 'vue-router';
  
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
  .signupPageHolderMM {
    display: flex;
    flex-direction: row;
  }
  .signupPageHolderM {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 14px;
    height: 702px;
    justify-content: center;
    line-height: 18px;
    margin-top: 12px;
    max-width: 350px;
    width: 350px;
  } 
  .signupPageHolderM1 {
    align-items: center;
    background-color: rgb(255, 255, 255);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 622px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    position: relative;
    vertical-align: baseline;
    width: 350px;
  } 
  .signupPageHolderM11 {
    margin-top: 36px;
    overflow-y: visible;
    margin-bottom: 12px;
    overflow-x: visible;
    align-content: stretch;
    border-bottom-left-radius: 0;
    background-color: transparent;
    flex-direction: column;
    box-sizing: border-box;
    display: flex;
    border-bottom-right-radius: 0;
    flex-shrink: 0;
    align-items: stretch;
    align-self: auto;
    justify-content: flex-start;
    position: relative;
    flex-grow: 0;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    cursor: pointer;
  } /* logo */
  .signupPageHolderM12 {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 477px;
    line-height: 18px;
    margin-bottom: 20px;
    width: 348px;
  } /* SignUp Info */
  .signupPageHolderM121{
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 477px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    max-width: 350px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    vertical-align: baseline;
    width: 348px;
  } /* Sign Up Form Styling */
  .signupPageHolderM121A {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 40px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 0px;
    width: 268px;
  } /* Sign Up Message Styling */
  .signupPageHolderM121A1{
    color: rgb(115, 115, 115);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 16px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 600;
    height: 40px;
    line-height: 20px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    max-width: 100%;
    min-width: 0px;
    overflow-wrap: break-word;
    overflow-x: visible;
    overflow-y: visible;
    position: relative;
    text-align: center;
    unicode-bidi: isolate;
    white-space: pre-line;
    width: 268px;
    word-break: break-word;
  } 

  .signupPageHolderM1211 {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    margin-bottom: 6px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 0px;
    width: 268px;
  } /* Sign Up Email*/
  .signupPageHolderM12111 {
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    position: relative;
    width: 268px;
  }
  .signupPageHolderM121111 {
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: flex;
    flex-basis: 0px;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-width: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    vertical-align: baseline;
    width: 258px;
  }
  .signupPageHolderM1211111{
    border-bottom-color: rgb(115, 115, 115);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(115, 115, 115);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(115, 115, 115);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(115, 115, 115);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(115, 115, 115);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 12px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    left: 8px;
    line-height: 36px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    text-overflow: ellipsis;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
    white-space: nowrap;
    width: 250px;
  }
  .signupPageHolderM1211112{
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(250, 250, 250);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: auto;
    direction: ltr;
    display: block;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 16px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 20px;
    letter-spacing: normal;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(0, 0, 0);
    outline-style: none;
    outline-width: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0px;
    padding-top: 9px;
    text-align: left;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    width: 250px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  }

  .signupPageHolderM1212 {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    margin-bottom: 6px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 0px;
    width: 268px;
  }
  .signupPageHolderM12121 {
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    position: relative;
    width: 268px;
  }
  .signupPageHolderM121211 {
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: flex;
    flex-basis: 0px;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-width: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    vertical-align: baseline;
    width: 258px;
  }
  .signupPageHolderM1212111 {
    border-bottom-color: rgb(115, 115, 115);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(115, 115, 115);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(115, 115, 115);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(115, 115, 115);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(115, 115, 115);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 12px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    left: 8px;
    line-height: 36px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    text-overflow: ellipsis;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
    vertical-align: baseline;
    white-space: nowrap;
    width: 250px;
  }
  .signupPageHolderM1212112 {
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(250, 250, 250);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: auto;
    direction: ltr;
    display: block;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 16px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 20px;
    letter-spacing: normal;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(0, 0, 0);
    outline-style: none;
    outline-width: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0px;
    padding-top: 9px;
    text-align: left;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    width: 250px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  }

  .signupPageHolderM1213{
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    margin-bottom: 6px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 0px;
    width: 268px;
  }
  .signupPageHolderM12131 {
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    position: relative;
    width: 268px;

  }
  .signupPageHolderM121311 {
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: flex;
    flex-basis: 0px;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-width: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    vertical-align: baseline;
    width: 258px;
  }
  .signupPageHolderM1213111 {
    border-bottom-color: rgb(115, 115, 115);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(115, 115, 115);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(115, 115, 115);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(115, 115, 115);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(115, 115, 115);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 12px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    left: 8px;
    line-height: 36px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    text-overflow: ellipsis;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
    vertical-align: baseline;
    white-space: nowrap;
    width: 250px;
  }
  .signupPageHolderM1213112 {
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(250, 250, 250);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: auto;
    direction: ltr;
    display: block;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 16px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 20px;
    letter-spacing: normal;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(0, 0, 0);
    outline-style: none;
    outline-width: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0px;
    padding-top: 9px;
    text-align: left;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    width: 250px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  }

  .signupPageHolderM1214{
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    margin-bottom: 6px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 0px;
    width: 268px;
  }
  .signupPageHolderM12141 {
    align-items: center;
    background-color: rgb(250, 250, 250);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: row;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 38px;
    line-height: 18px;
    position: relative;
    width: 268px;

  }
  .signupPageHolderM121411 {
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: flex;
    flex-basis: 0px;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    min-width: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    vertical-align: baseline;
    width: 258px;
  }
  .signupPageHolderM1214111 {
    border-bottom-color: rgb(115, 115, 115);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(115, 115, 115);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(115, 115, 115);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(115, 115, 115);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(115, 115, 115);
    color-scheme: light;
    cursor: default;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 12px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 36px;
    left: 8px;
    line-height: 36px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    pointer-events: none;
    position: absolute;
    right: 0px;
    text-overflow: ellipsis;
    transition-delay: 0s;
    transition-duration: 0.1s;
    transition-property: transform;
    transition-timing-function: ease-out;
    vertical-align: baseline;
    white-space: nowrap;
    width: 250px;
  }
  .signupPageHolderM1214112 {
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(250, 250, 250);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(0, 0, 0);
    border-top-style: none;
    border-top-width: 0px;
    color: rgb(0, 0, 0);
    color-scheme: light;
    cursor: auto;
    direction: ltr;
    display: block;
    flex-basis: auto;
    flex-grow: 1;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 16px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 20px;
    letter-spacing: normal;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(0, 0, 0);
    outline-style: none;
    outline-width: 0px;
    overflow-x: hidden;
    overflow-y: hidden;
    padding-bottom: 7px;
    padding-left: 8px;
    padding-right: 0px;
    padding-top: 9px;
    text-align: left;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    width: 250px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  }

  .signupPageHolderM1215{
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 48px;
    line-height: 18px;
    width: 348px;
  }
  .signupPageHolderM12151{
    align-content: stretch;
    align-items: stretch;
    align-self: auto;
    background-color: rgba(0, 0, 0, 0);
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-grow: 0;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 32px;
    justify-content: flex-start;
    line-height: 18px;
    margin-bottom: 8px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 8px;
    overflow-x: visible;
    overflow-y: visible;
    position: relative;
    width: 268px;
  }
  .signupPageHolderM121511{
    align-items: flex-start;
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(0, 149, 246);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(255, 255, 255);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(255, 255, 255);
    border-left-style: none;
    border-left-width: 0px;
    border-right-color: rgb(255, 255, 255);
    border-right-style: none;
    border-right-width: 0px;
    border-top-color: rgb(255, 255, 255);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top-style: none;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(255, 255, 255);
    color-scheme: light;
    cursor: pointer;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 600;
    height: 32px;
    letter-spacing: normal;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    opacity: 0.7;
    padding-bottom: 7px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: 7px;
    pointer-events: none;
    position: relative;
    text-align: center;
    text-indent: 0px;
    text-overflow: ellipsis;
    text-shadow: none;
    text-transform: none;
    width: 268px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  }

  .signupPageHolderM2 {
    align-items: center;
    background-color: rgb(231, 234, 43);
    border-bottom-color: rgb(219, 219, 219);
    border-bottom-left-radius: 1px;
    border-bottom-right-radius: 1px;
    border-bottom-style: solid;
    border-bottom-width: 1px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(219, 219, 219);
    border-left-style: solid;
    border-left-width: 1px;
    border-right-color: rgb(219, 219, 219);
    border-right-style: solid;
    border-right-width: 1px;
    border-top-color: rgb(219, 219, 219);
    border-top-left-radius: 1px;
    border-top-right-radius: 1px;
    border-top-style: solid;
    border-top-width: 1px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 63px;
    line-height: 18px;
    margin-bottom: 10px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    padding-bottom: 10px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 10px;
    position: relative;
    vertical-align: baseline;
    width: 350px;
  } /* Sign In */
  .signupPageHolderM21 {
    color: rgb(115, 115, 115);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 41px;
    line-height: 18px;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    max-width: 100%;
    min-width: 0px;
    overflow-wrap: break-word;
    overflow-x: visible;
    overflow-y: visible;
    position: relative;
    unicode-bidi: isolate;
    white-space: pre-line;
    width: 236px;
    word-break: break-word;
  } /* Sign In D1 */
  .signupPageHolderM211 {
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 14px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: 18px;
    line-height: 18px;
    margin-block-end: 15px;
    margin-block-start: 15px;
    margin-bottom: 15px;
    margin-inline-end: 15px;
    margin-inline-start: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: 15px;
    overflow-wrap: break-word;
    text-align: center;
    white-space: pre-line;
    width: 206px;
    word-break: break-word;
  } /* Sign In text */
  .signupPageHolderM2111 {
    background-color: rgba(0, 0, 0, 0);
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-left-style: none;
    border-left-width: 0px;
    border-right-style: none;
    border-right-width: 0px;
    border-top-style: none;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(0, 149, 246);
    color-scheme: light;
    cursor: pointer;
    direction: ltr;
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 13.5px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 400;
    height: auto;
    line-height: 18px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    outline-color: rgb(0, 149, 246);
    outline-style: none;
    outline-width: 0px;
    overflow-wrap: break-word;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    text-align: center;
    text-decoration: none;
    text-decoration-line: none;
    touch-action: manipulation;
    white-space: pre-line;
    width: auto;
    word-break: break-word;
  } /* Sign In link */
  .signupPageHolderM21111 {
    color: rgb(0, 149, 246);
    color-scheme: light;
    cursor: pointer;
    direction: ltr;
    display: inline;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-feature-settings: normal;
    font-kerning: auto;
    font-optical-sizing: auto;
    font-size: 13px;
    font-size-adjust: none;
    font-stretch: 100%;
    font-style: normal;
    font-variant-alternates: normal;
    font-variant-caps: normal;
    font-variant-east-asian: normal;
    font-variant-ligatures: normal;
    font-variant-numeric: normal;
    font-variant-position: normal;
    font-variation-settings: normal;
    font-weight: 600;
    height: auto;
    line-height: 18px;
    list-style-image: none;
    list-style-position: outside;
    list-style-type: none;
    margin-bottom: 0px;
    margin-left: 0px;
    margin-right: 0px;
    margin-top: 0px;
    overflow-wrap: break-word;
    text-align: center;
    unicode-bidi: isolate;
    white-space: pre-line;
    width: auto;
    word-break: break-word;
  }
</style>