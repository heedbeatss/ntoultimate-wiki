<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/nto_icon.png" width="125" height="125" />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/personagens">Personagens</RouterLink>
        <RouterLink to="/itens">Itens</RouterLink>
        <RouterLink to="/quests">Quests</RouterLink>
        <RouterLink to="/tutorias">Tutorias</RouterLink>
        <RouterLink to="/contato">Contato</RouterLink>
        <!-- <RouterLink to="/galeria">Galeria</RouterLink> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>



<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  max-width: 100vw;
  position: relative;

}

.logo {
  display: block;
  margin:  auto 0.5rem;
}

nav {
  width: 10%;
  height: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 0.3rem;
  color: orange
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
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
