<template>
  <div class="min-h-screen flex flex-col">
    <Header />

    <main class="flex-1 bg-gray-100">
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
</script>
