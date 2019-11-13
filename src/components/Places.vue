<template>
    <div class="secao">
        <h1 id="titulo">{{ titulo }}</h1>
        <p>{{ descricao }}</p>
        <div id="caixa" v-for="place in places" :key="place.id">
            <p id="lugar" {{ place.name }}></p>
            <p>23 pratos</p>
        </div>
        <button class="botao" v-on:click="$emit()">+</button>
    </div>
</template>

<script>
    import placesService from '../services/places'
    export default {
        name: 'titulo',
        data () {
            return {
                titulo: 'Lugares',
                descricao: '6 lugares cadastrados'
            }
        },
        mounted () {
            placesService.getPlaces()
                .then((places) => {
                    this.$set(this, 'places', places)
                })
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .secao {
        text-align: center;
    }
    #titulo {
        font-family: Courier, "Lucida Console", monospace;
        font-weight: bold;
        font-size: 200%;
        color: #F3AA00;
    }
    p {
        text-align: center;
        font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
        color: #FFFFFF;
        opacity: 1;
    }
    #caixa {
        width: 400px;
        height: 100px;
        background: #333333 0% 0% no-repeat padding-box;
        box-shadow: 4px 4px 16px #00000029;
        border-radius: 8px;
        opacity: 1;
    }
    .botao {
        position: relative;
        border: none;
        border-radius: 50px;
        display: inline-block;
        height: 36px;
        line-height: 36px;
        padding: 0 16px;
        text-transform: uppercase;
        vertical-align: middle;
        margin-top: -2px;
        margin-left: 15px;
        margin-right: 15px;
    }
    #lugar {
        padding: 10px;
        margin-top: 20px;
        font-weight: bold;
        font-size: medium;
    }
</style>