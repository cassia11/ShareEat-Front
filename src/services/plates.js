import axios from 'axios'

export default {
    save: (plate) => axios.post(`cadastrar`, plate),
    getPlates : (id) => axios.get(`${id}/pratos`)
}