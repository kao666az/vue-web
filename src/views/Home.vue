<template>
  <div class="home">
    <Homepang/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Homepang from '@/components/Home.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Homepang
  }
})
</script>
