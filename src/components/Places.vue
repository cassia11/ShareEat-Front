<template>
  <div class="text-center">
    <h1 class="row " id="title">{{ title }}</h1>
    <p class="row">{{ description }}</p>
    <div class="row w-50" v-for="place in places" :key="place.id">
      <div class="col-8">
        <span class="row text-white">{{ place.name }}</span>
        <span class="row text-white">{{ place.plates_qtd }} pratos</span>
      </div>
      <button class="rounded-circle" href="#">Goo</button>
    </div>
  </div>
</template>

<script>
import placesService from "../services/places";
export default {
  name: "Place",
  data: () => ({
    title: "Lugares",
    description: "6 lugares cadastrados",
    places: []
  }),
  created() {
    placesService
      .getPlaces()
      .then(response => {
        this.places = response.data;
      })
      .catch(error => {});
  }
};
</script>

<style scoped>
#title {
  font-family: Courier, "Lucida Console", monospace;
  font-weight: bold;
  font-size: 200%;
  color: #f3aa00;
  text-align: center;
}
p {
  text-align: center;
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  color: #ffffff;
  opacity: 1;
  text-align: center;
}
.color-card {
  background: #333333 0% 0% no-repeat padding-box;
}
</style>