<template>
  <div class="section">
    <div>
      <h1 id="title">
        <b>{{place }}</b>
      </h1>
      <p class="text_plate" v-if="qtd == 1">{{ qtd }} prato</p>
      <p class="text_plate" v-else>{{ qtd }} pratos</p>
    </div>

    <div class="card text-white bg-dark mb-3" v-for="plate in plates" :key="plate.id">
      <div class="card-body">
        <p class="value">R$ {{ plate.value }}</p>
        <span class="row text-white">{{ plate.name }}</span>
        <span class="row text-white">{{ plate.description }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import platesService from "../services/plates";
import placesService from "../services/places";

export default {
  name: "Plate",
  data() {
    return {
      place: "",
      plates: [],
      qtd: null
    };
  },
  created() {
    platesService
      .getPlates(this.$route.params.id)
      .then(response => {
        this.plates = response.data;
        this.qtd = response.data.length;
      })
      .catch(error => {});

    placesService
      .getPlaceId(this.$route.params.id)
      .then(response => {
        this.place = response.data[0].name;
      })
      .catch(error => {});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#title {
  text-align: center;
  font-family: Courier, "Lucida Console", monospace;
  font-weight: bold;
  font-size: 200%;
  color: #f3aa00;
}
.text_plate {
  text-align: center;
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
  color: #ffffff;
  opacity: 1;
}
#box {
  width: 400px;
  height: 150px;
  background: #333333 0% 0% no-repeat padding-box;
  box-shadow: 4px 4px 16px #00000029;
  border-radius: 8px;
  opacity: 1;
}
#place {
  padding: 10px;
  margin-top: 20px;
  font-weight: bold;
  font-size: medium;
}
.value {
  float: right;
}
</style>