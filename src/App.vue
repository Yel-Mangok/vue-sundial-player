<script setup>
import Navbar from "./components/Navbar.vue";
import usePlayer  from "./composables/usePlayer.js";
import "./styles/App.css";
import "./styles/global.css";

</script>

<template>

   <div class="app-shell">
      <Navbar />
      <main class="app-main">
         <RouterView />
      </main>
    </div>
</template>
