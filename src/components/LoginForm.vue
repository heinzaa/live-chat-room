<template>
  <form @submit.prevent="handleSubmit">
      
      <input type="email" required placeholder="email" v-model="email" />
      <input type="password" required placeholder="password" v-model="password" />
      <button>Log in </button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {

   setup(){
       const displyName = ref('');
       const email = ref('');
       const password = ref('');

      const handleSubmit = () => {
          console.log( email.value, password.value, handleSubmit)
      }

       return { email, password}
   }


}
</script>

<style>

</style>