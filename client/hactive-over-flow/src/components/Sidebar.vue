<template lang="html">
  <div class="col-sm-2 sidenav">
    <p><router-link :to="{ name: 'Hello'}">HOME</router-link></p>
    <p><router-link :to="{ name: 'Form_Question'}">New Question</router-link></p>
  </div>
</template>

<script>
export default {
}
</script>
