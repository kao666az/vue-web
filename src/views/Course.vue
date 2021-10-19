<template>
  <div class="course">
    <Coursepang/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Coursepang from '@/components/Course.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Coursepang
  }
})
</script>
