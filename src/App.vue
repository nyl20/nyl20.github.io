<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <!-- <header> -->
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <!-- <div class="wrapper"> -->
      <!-- <div>
      <HelloWorld msg="Nicole Liao" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div> -->
    
  <!-- </header> -->
  <div class="center">
   <div class="whole">
    <header>
      <h1>Nicole Liao</h1>
      <div class="navbar">
        <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/research">Research</RouterLink>
        <RouterLink to="/about-me">About Me</RouterLink>
      </nav>
      </div>
      
      </header>
      
  <RouterView />
    </div>
    
   </div>
  
  
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 2%;
  padding-right: 2%;
  -webkit-box-shadow: 0 4px 6px -6px #222;
  -moz-box-shadow: 0 4px 6px -6px #222;
  box-shadow: 0 4px 6px -6px #222;
}
h1{
  font-size: 60px;
  color: #2F4550;
}
nav{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-bottom: 6%;
}
.navbar{
  /* background-color: #B8DBD9; */
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  justify-content: flex-end;
}
.center{
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-width: 1200px;
}
.whole{
  /* margin: 3%; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* background-color: #F4F4F9; */
  margin-left: 0;
  padding-top: 1%;
  width: 100%;
  /* align-content: center; */
}
.full-screen-container {
  height: 100%; 
  width: 100%;
  background-color: saddlebrown;
  margin: 0;
}

/* nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
} */

/* nav a:first-of-type {
  border: 0;
} */

/* 2F4550 */
/* 586F7C */
/* B8DBD9 */
/* F4F4F9 */
</style>
