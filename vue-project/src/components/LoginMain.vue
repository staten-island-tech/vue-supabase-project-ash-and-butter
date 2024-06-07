<template>
  <div style="max-width: 100vw; margin-right: auto; align-self: center;">
    <div class="maxini" style="max-width: fit-content; margin-left: auto; margin-right: auto;">
      <div class="loginPageHolderMM">
        <div style="background-color: transparent; margin-top: auto;"> <!--Cube Thingie-->
          <img style="width: 432px; margin-bottom: 5px;" src="/CubeLogo.png" alt=""> <!--Cube Thingie-->
        </div>
        <h1>Welcome to Momento</h1>
        <div class="loginPageHolderM"> <!--Momento Logo, LogIn, Forgot Password, SignUp-->
          <div class="loginPageHolderM1"> <!--Momento Logo, LogIn, Forgot Password-->
            <div class="loginPageHolderM11" aria-disabled="false" role="button" tabindex="0"> <!--Momento Logo-->
              <img class="loginPageHolderM111" src="/CubeCraft.png" alt="CubeCraft Logo">
            </div>
            
            <div class="loginPageHolderM12"> <!--LogIn + Forgot Password-->
              <form @submit.prevent="login" class="loginForm">
              <div class="loginPageHolderM121"> <!--LogIn-->
                <div class="loginPageHolderM1211"> <!--Phone number, username, or email-->
                  <div class="loginPageHolderM12111">
                    <label class="loginPageHolderM121111">
                      <span class="loginPageHolderM1211111">Phone number, username, or email</span>
                      <input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off"
                        autocorrect="off" maxlength="75" class="loginPageHolderM1211112" type="email" v-model="email"
                        required>
                    </label>
                  </div>
                </div>
                <div class="loginPageHolderM1212"> <!--Password-->
                  <div class="loginPageHolderM12121">
                    <label class="loginPageHolderM121211">
                      <span class="loginPageHolderM1212111">Password</span>
                      <input aria-label="Phone number, username, or email" aria-required="true" autocapitalize="off"
                        autocorrect="off" type="password" class="loginPageHolderM1212112" value name="password"
                        v-model="password" required>
                    </label>
                  </div>
                </div>
                <div class="loginPageHolderM1213"> <!--LoginBtn-->
                  <button  type="submit">
                    Log In
                  </button>
                </div>
                <div class="loginPageHolderM1214"> <!--OR-->
                  <div class="loginPageHolderM12141">
                    <div class="loginPageHolderM121411"></div>
                    <div class="loginPageHolderM121412">OR</div>
                    <div class="loginPageHolderM121413"></div>
                  </div>
                </div>
                <div class="loginPageHolderM1215"></div>
              </div>
              <div class="loginPageHolderM122" role="link" tabindex="0"> <!--Forgot Password-->
                <div class="loginPageHolderM1221">Forgot password?</div>
              </div>
            </form>
            </div>
          
          </div>
          <div class="loginPageHolderM2"> <!--SignUp-->
            <div class="loginPageHolderM21"> <!--SignUp-->
              <p class="loginPageHolderM211"> <!--SignUp-->
                Don't have an account?
                <a class="loginPageHolderM2111" href="" role="link">
                  <RouterLink to="/signup" class="loginPageHolderM21111" role="link" dir="auto">Sign Up</RouterLink>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>










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
<style >
  .loginPageHolderMM {
    display: flex;
    flex-direction: row;
  }
  .loginPageHolderM {
    color: black;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top: 100px;
    max-width: 350px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: auto;

  } /* sign up and (logo and (login and forgot password)) */
  .loginPageHolderM1 {
    align-items: center;
    background-color: white;
    border: 1px solid #DBDBDB;
    border-radius: 1px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    font: inherit;
    font-size: 100%;
    margin: 0 0 10px;
    padding: 10px 0;
    position: relative;
    vertical-align: baseline;
  } /* logo and (login and forgot password) */
  .loginPageHolderM11 {
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
  .loginPageHolderM111 {
    background-position: 0px 0px;
    background-size: 176px 258px;
    width: 175px;
    height: 51px;
    background-repeat: no-repeat;
    display: inline-block;
  } /* logoImg */


  .loginPageHolderM12 {
    margin-bottom: 10px;
    max-width: 350px;
    width: 100%;
  } /* login and forgot password*/

  .loginPageHolderM121 {
    overflow-y: visible;
    margin-top: 24px;
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
  } /* login */

  .loginPageHolderM1211{
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
  } /* Phone number, username, or email */
  .loginPageHolderM12111 {
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
  } /* Phone number, username, or email D1 */
  .loginPageHolderM121111 {
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
  } /* Phone number, username, or email label */
  .loginPageHolderM1211111 {
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
  } /* Phone number, username, or email label span*/
  .loginPageHolderM1211112 {
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
    -webkit-rtl-ordering: logical;
  } /* Phone number, username, or email label input*/

  .loginPageHolderM1212{
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
  } /* Password */
  .loginPageHolderM12121{
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
  } /* Password D1 */
  .loginPageHolderM121211{
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
  } /* Password Label */
  .loginPageHolderM1212111{
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
  } /* Password Label span */
  .loginPageHolderM1212112{
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
  } /* Password Label input */
  .loginPageHolderM1213{
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
  } /* Log in button */
  .loginPageHolderM12131{
    align-items: flex-start;
    appearance: none;
    background-attachment: scroll;
    background-clip: border-box;
    background-color: rgb(231, 234, 43);
    background-image: none;
    background-origin: padding-box;
    background-position-x: 0%;
    background-position-y: 0%;
    background-repeat: repeat;
    background-size: auto;
    border-bottom-color: rgb(0, 0, 0);
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
    border-bottom-style: none;
    border-bottom-width: 0px;
    border-image-outset: 0;
    border-image-repeat: stretch;
    border-image-slice: 100%;
    border-image-source: none;
    border-image-width: 1;
    border-left-color: rgb(0, 0, 0);
    border-left-style: none;
    border-left-width: 2px;
    border-right-color: rgb(0, 0, 0);
    border-right-style: none;
    border-right-width: 2px;
    border-top-color: rgb(0, 0, 0);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    border-top-style: none;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(0, 0, 0);
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
  } /* Log in button D1 */
  .loginPageHolderM12132{
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
    cursor: pointer;
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
    font-weight: 600;
    height: 18px;
    justify-content: flex-start;
    letter-spacing: normal;
    line-height: 18px;
    overflow-x: visible;
    overflow-y: visible;
    pointer-events: none;
    position: relative;
    text-align: center;
    text-indent: 0px;
    text-shadow: none;
    text-transform: none;
    width: 236px;
    word-spacing: 0px;
    writing-mode: horizontal-tb;
  } /* Log in button text */

  .loginPageHolderM1214{
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
    height: 14px;
    line-height: 18px;
    margin-bottom: 22px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 14px;
    width: 268px;
  } /* Or */
  .loginPageHolderM12141{
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
    height: 14px;
    line-height: 18px;
    width: 268px;
  } /* Or D1*/
  .loginPageHolderM121411{
    background-color: rgb(219, 219, 219);
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
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
    height: 1px;
    line-height: 18px;
    position: relative;
    top: 6.3px;
    width: 106.578125px;
  } /* Or left line */
  .loginPageHolderM121412{
    align-items: stretch;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-width: 0px;
    box-sizing: border-box;
    color: rgb(115, 115, 115);
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
    height: 14px;
    line-height: 14.999399px;
    margin-bottom: 0px;
    margin-left: 18px;
    margin-right: 18px;
    margin-top: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    padding-right: 0px;
    padding-top: 0px;
    position: relative;
    text-transform: uppercase;
    vertical-align: baseline;
    width: 18.859375px;
  } /* Or center word */
  .loginPageHolderM121413{
    background-color: rgb(219, 219, 219);
    color: rgb(0, 0, 0);
    color-scheme: light;
    direction: ltr;
    display: block;
    flex-grow: 1;
    flex-shrink: 1;
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
    height: 1px;
    line-height: 18px;
    position: relative;
    top: 6.3px;
    width: 106.578125px;
  } /* Or right line */


  .loginPageHolderM122 {
    color: rgb(0, 55, 107);;
    font-size: 12px;
    line-height: 12px;
    margin-top: 12px!important;
    text-align: center!important;
    padding-top: 0;
    margin-bottom: 0;
    border-bottom-style: none;
    border-bottom-width: 0;
    padding-bottom: 0;
    display: inline;
    border-left-width: 0;
    padding-left: 0;
    background-color: transparent;
    touch-action: manipulation;
    border-right-style: none;
    border-right-width: 0;
    box-sizing: border-box;
    border-top-width: 0;
    padding-right: 0;
    cursor: pointer;
    margin-left: 0;
    border-top-style: none;
    border-left-style: none;
    margin-right: 0;
    list-style: none;
    outline: none;
  } /* forgot password */
  .loginPageHolderM1221 {
    line-height: 16px;
    overflow-y: visible;
    min-width: 0;
    margin-bottom: 0!important;
    overflow-x: visible;
    max-width: 100%;
    margin-top: 0!important;
    font-weight: 400;
    color: rgb(0, 149, 246);
    margin-right: 0!important;
    word-wrap: break-word;
    position: relative;
    display: block;
    white-space: pre-line;
    font-size: 14px;
    margin-left: 0!important;
  } /* forgot password d1 */
  
  .loginPageHolderM2 {
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
  } /* Sign Up */
  .loginPageHolderM21 {
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
  } /* Sign Up D1 */
  .loginPageHolderM211 {
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
  } /* Sign Up text */
  .loginPageHolderM2111 {
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
  } /* Sign Up link */
  .loginPageHolderM21111 {
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