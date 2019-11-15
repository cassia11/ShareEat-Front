import axios from 'axios'

export default {
    save: (plate) => axios.post(`pratos`, plate),
    getPlates : (id) => axios.get(`${id}/pratos`)
}