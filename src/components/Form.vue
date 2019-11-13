<template>
    <div class="section">
        <h1 id="title">{{ title }}</h1>
        <div id="box" v-for="place in places" :key="place.id">
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
    export default {
        name: 'title',
        data () {
            return {
                title: 'Form',
                description: '6 lugares cadastrados'
            }
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