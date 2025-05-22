<!-- Unser App Herz -->

<template>
  <AppHeader />
  <div class="p-10">
    <h2 data-aos="fade-up" class="text-3xl font-bold" >Willkommen im Hotel!</h2>
    <p data-aos="fade-right" class="mt-4 text-red-600">
      Entspannen Sie sich und genießen Sie Ihren Aufenthalt 🌴
    </p>
    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Who is Fred</button> 
  </div>
</template>





<script setup>
import { RouterLink, RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';


</script>


<style scoped>

</style>
