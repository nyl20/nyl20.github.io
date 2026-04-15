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
            <!-- <RouterLink to="/research">Research</RouterLink> -->
            <!-- <RouterLink to="/experience">Experience</RouterLink> -->
            <RouterLink to="/about-me">About Me</RouterLink>
          </nav>
        </div>
      </header>

      <main :class="['page-shell', { 'with-header-offset': !isHome }]">
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped>
.site-header {
  position: fixed;
  /* top: 12px; */
  left: 50%;
  /* width: min(1400px, calc(100% - 24px)); */
  width: 100%;
  z-index: 20;
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding: 1rem 2%;
  padding-left: 11%;
  padding-right: 11%;
  /* border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px; */
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px var(--color-shadow);
  opacity: 0;
  transform: translateX(-50%) translateY(-10px);
  pointer-events: none;
  transition:
    opacity 0.28s ease,
    transform 0.28s ease;
}

.site-header.visible {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
  pointer-events: auto;
}

h1 {
  font-size: clamp(1.8rem, 4vw, 2rem);
  line-height: 1;
  font-weight: 700;
  color: var(--color-heading);
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
  color: var(--color-text);
}

nav a.router-link-exact-active {
  background: var(--color-highlight);
}

.navbar {
  display: flex;
  justify-content: flex-end;
}

.center {
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.whole {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  max-width: 1440px;
}

.page-shell {
  width: 100%;
}

.page-shell.with-header-offset {
  padding-top: 5.75rem;
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
