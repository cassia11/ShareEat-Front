import axios from 'axios'

export default {
    save: (plate) => axios.post('/cadastrar/', plate)
        .then(response => alert('salvo com sucesso'))
        .catch(error => alert('ocorreu um erro'))
}

export default {
    getPlates : (id) => axios.get(`/${id}/pratos`)
}