<template>
  <div id="app" class="container">
    <h3 id="principal">share eat</h3>
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
    font-family: Verdana, Arial, Helvetica, sans-serif;
    color: #FFFFFF;
    opacity: 1;
  }
</style>