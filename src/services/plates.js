import http from '../utils/http'

export default {
    save: (plate) => http.post('/cadastrar/', plate)
        .then(response => alert('salvo com sucesso'))
        .catch(error => alert('ocorreu um erro'))
}

export default {
    getPlates : (id) => http.get(`/${id}/pratos`)
}