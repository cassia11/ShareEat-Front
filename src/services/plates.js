import axios from 'axios'

export default {
    save: (plate) => axios.post(`/pratos/`, plate)
}

export default {
    getPlates : (id) => axios.get(`/${id}/pratos`)
}