<template>
    <div class="secao">
        <h1 id="titulo">{{ titulo }}</h1>
        <div id="caixa" v-for="place in places" :key="place.id">
            <p>Nome do prato</p>
            <input type="text"/>
            <p>Valor</p>
            <input type="number"/>
            <p>Descricao do prato</p>
            <textarea type="text"/>
            <p>*A Descricao deve conter até 200 caracteres</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'titulo',
        data () {
            return {
                titulo: 'Form',
                descricao: '6 lugares cadastrados'
            }
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
</style>