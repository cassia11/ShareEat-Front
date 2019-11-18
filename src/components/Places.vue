<template>
  <div>
    <h1 class="title text-center">
      <b>{{ title }}</b>
    </h1>
    <p class="text-white text-center" v-if="description == 1">{{ description }} lugar cadastrado</p>
    <p class="text-white text-center" v-else>{{ description }} lugares cadastrados</p>
    <div class="div" v-for="place in places" :key="place.id">
      <img class src="../assets/add.png" @click="more(place.id)" width="60" height="40" />
      <div class="box card text-white bg-dark mb-3">
        <div class="card-body" @click="plates(place.id)">
          <span class="row text-white">
            <b>{{ place.name }}</b>
          </span>
          <span class="row text-white" v-if="place.plates_qtd == 1">{{ place.plates_qtd }} prato</span>
          <span class="row text-white" v-else>{{ place.plates_qtd }} pratos</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import placesService from "../services/places";
export default {
  name: "Place",
  data: () => ({
    title: "Lugares",
    description: null,
    places: []
  }),
  created() {
    placesService
      .getPlaces()
      .then(response => {
        this.places = response.data;
        this.description = response.data.length;
      })
      .catch(error => {});
  },
  methods: {
    more(identify) {
      this.$router.push({ name: "Register", params: { id: identify } });
    },
    plates(identify) {
      this.$router.push({ name: "Plates", params: { id: identify } });
    }
  }
};
</script>

<style scoped>
.title {
  font-family: Courier, "Lucida Console", monospace;
  font-size: 200%;
  color: #f3aa00;
}
.color-card {
  background: #333333 0% 0% no-repeat padding-box;
}
.image {
  width: 20%;
  height: 80%;
}
.div {
  text-align: right !important;
}
</style>