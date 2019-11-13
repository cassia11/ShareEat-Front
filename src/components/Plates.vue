<template>
    <div class="section">
        <h1 id="title">{{ title }}</h1>
        <p>{{ description }}</p>
        <div id="box" v-for="place in places" :key="place.id">
            <p id="place" {{ place.name }}></p>
            <p>23 pratos</p>
        </div>
        <button class="button" v-on:click="$emit()">+</button>
    </div>

</template>

<script>
    export default {
        name: 'title',
        data () {
            return {
                title: 'Lugares',
                description: '6 lugares cadastrados'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .section {
        text-align: center;
    }
    #title {
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
    #box {
        width: 400px;
        height: 100px;
        background: #333333 0% 0% no-repeat padding-box;
        box-shadow: 4px 4px 16px #00000029;
        border-radius: 8px;
        opacity: 1;
    }
    .button {
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
    #place {
        padding: 10px;
        margin-top: 20px;
        font-weight: bold;
        font-size: medium;
    }
</style>