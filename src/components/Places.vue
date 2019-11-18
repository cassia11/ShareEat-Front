<template>
  <div>
    <h1 class="title text-center">
      <b>{{ title }}</b>
    </h1>
    <p class="text-white text-center" v-if="description == 1">{{ qtd }} lugar cadastrado</p>
    <p class="text-white text-center" v-else>{{ description }} lugares cadastrados</p>

    <div class="div" v-for="place in places" :key="place.id">
      <div class="box card text-white bg-dark mb-3">
        <div class="card-body" @click="plates(place.id)">
          <div class="data">
            <span class="row text-white">
              <b>{{ place.name }}</b>
            </span>
            <span class="row text-white">{{ place.plates_qtd }} pratos</span>
          </div>
        </div>
      </div>
      <div class="button">
        <button right class="btn btn-dark btnCircular" name="2" @click="more(place.id)">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
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

.btnCircular {
  text-align: right;
  border-radius: 50%;
  font-size: 20px;
  padding: 15px;
}
.div {
  text-align: right !important;
  justify-content: space-between;
}
</style>