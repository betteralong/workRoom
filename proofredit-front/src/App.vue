<template>
  <div id="app">
    <com-header/>
    <router-view/>
    <com-footer/>
  </div>
</template>

<script>
import ComHeader from '@/components/ComHeader.vue'
import ComFooter from '@/components/ComFooter.vue'
export default {
  name: 'App',
  components:{
    ComHeader,
    ComFooter
  }
}
</script>

<style>

</style>
