<script setup>
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { RouterLink, RouterView, useRoute } from 'vue-router'

const route = useRoute()
const showHeader = ref(false)

const isHome = computed(() => route.path === '/')
const shouldShowHeader = computed(() => !isHome.value || showHeader.value)

function handleScroll() {
  showHeader.value = window.scrollY > window.innerHeight * 0.55
}

onMounted(() => {
  handleScroll()
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <div class="center">
    <div class="whole">
      <header :class="['site-header', { visible: shouldShowHeader }]">
        <h1>Nicole Liao</h1>
        <div class="navbar">
          <nav>
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
            <RouterLink to="/research">Research</RouterLink>
            <RouterLink to="/experience">Experience</RouterLink>
            <RouterLink to="/about-me">About Me</RouterLink>
          </nav>
        </div>
      </header>

      <RouterView />
    </div>
  </div>
</template>

<style scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1rem 2%;
  margin-top: 0.75rem;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.76);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(47, 69, 80, 0.08);
  opacity: 0;
  transform: translateY(-10px);
  pointer-events: none;
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.site-header.visible {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}

h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
  line-height: 1;
  font-weight: 700;
  color: #2f4550;
}

nav {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  justify-content: flex-end;
}

nav a {
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  color: #2f4550;
}

nav a.router-link-exact-active {
  background: #e8f2f1;
}

.navbar {
  display: flex;
  justify-content: flex-end;
}

.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  max-width: 1200px;
}

.whole {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
}

@media (max-width: 900px) {
  .site-header {
    align-items: flex-start;
  }

  nav {
    justify-content: flex-start;
  }
}
</style>
