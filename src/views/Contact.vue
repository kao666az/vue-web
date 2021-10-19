<template>
  <div class="contact">
    <Contactpang />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Contactpang from '@/components/Contact.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Contactpang
  }
})
</script>
