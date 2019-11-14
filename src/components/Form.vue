<template>
    <div class="section">
        <h1 id="title">{{ title }}</h1>
        <div id="box" v-for="plate in plates" :key="plate.id">
            <label class="mt-20">Nome do Prato</label>
            <b-input placeholder="Prato" id="input" v-model="form.comments"></b-input>
            <label class="mt-20">Valor</label>
            <b-input placeholder="0,00" id="input" v-model="form.value"></b-input>R$
            <label class="mt-20">Descrição do Prato</label>
            <b-input placeholder="Insira uma descrição" id="input" v-model="form.description"></b-input>R$
            <p>*A Descricao deve conter até 200 caracteres</p>
            <b-container fluid>
                <b-row class="mb-3">
                    <b-col md="1.5" class="ml-md-auto">
                        <b-button squared type="submit"
                                  class="answer-btn mt-20">Salvar
                        </b-button>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    import platesService from '../services/plates'
    export default {
        data: () => ({
            form : {
                comments: "",
                value: 0,
                description:""
            },
            submitForm() {
                platesService.save(this.form)
            },
                })
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