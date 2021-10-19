<template>
  <div class="service">

    <Servicepang/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Servicepang from '@/components/Service.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Servicepang
  }
})
</script>
