<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    
    <main class="flex-1 p-4 bg-gray-100">
      <Home />
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Header from './Header.vue'
import Footer from './Footer.vue'
import Home from '../views/Home.vue'
</script>
