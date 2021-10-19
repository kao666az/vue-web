<template>
  <div class="payment">
    <Paymentpang />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Paymentpang from '@/components/Payment.vue' // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    Paymentpang
  }
})
</script>
