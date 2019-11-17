<template>
  <div id="app" class="container">
    <h3 id="principal"><b>share eat</b></h3>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  body {
    background-color: #292929;
  }
  #principal {
    text-align: center;
    font-size: 150%;
    font-family: adobe-clean, sans-serif;
    color: #FFFFFF;
    opacity: 1;
  }
</style>