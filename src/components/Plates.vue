<template>
  <div class="section">
    <div>
      <h1 id="title">
        <b>{{place }}</b>
      </h1>
      <p class="text_plate" v-if="qtd == 1">{{ qtd }} prato</p>
      <p class="text_plate" v-else>{{ qtd }} pratos</p>
    </div>

    <div class="box card text-white bg-dark mb-3" v-for="plate in plates" :key="plate.id">
      <div class="card-body">
        <p class="value">
          <b>R$ {{ plate.value }}</b>
        </p>
        <span class="row text-white">
          <b>{{ plate.name }}</b>
        </span>
        <span class="row text-white">{{ plate.description }}</span>
      </div>
    </div>
    <div class="btnMaisBotoes">
      <div class="col-3 btnMaisBotoesBtn">
        <button class="btn btn-warning btnCircular btnPrincipal" name="2" @click=" redirect()">
          <i class="fa fa-plus-circle" aria-hidden="true"></i>
        </button>
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
  },
  methods: {
    redirect() {
      let cadastro = this.$route.params.id;
      this.$router.push({ name: "Register", params: { id: cadastro } });
    }
  },
};
</script>

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
.box {
  border-left: 4px solid #ffa500;
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
.btnMaisBotoes {
  position: fixed;
  float: bottom;
  bottom: 15px;
  right: 15px;
  z-index: 100;
}
.btnMaisBotoesBtn {
  display: inline-block;
}
.btnCircular {
  border-radius: 50%;
}

.btnPrincipal {
  font-size: 20px;
  padding: 15px;
}
</style>