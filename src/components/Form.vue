<template>
    <div class="section">
        <h1 id="title">{{ title }}</h1>
        <div id="box" v-for="plate in plates" :key="plate.id">
            <p>Nome do prato</p>
            <label>
                <input type="text"/>
            </label>
            <p>Valor</p>
            <label>
                <input type="number"/>
            </label>
            <p>Descricao do prato</p>
            <label>
                <textarea type="text"></textarea>
            </label>
            <p>*A Descricao deve conter até 200 caracteres</p>
        </div>
    </div>
</template>

<script>
    import platesService from '../services/plates'
    export default {
        mounted () {
            platesService.save()
                .then((plates) => {
                    this.$set(this, 'plates', plates)
                })
        }
    }
</script>

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
</style>