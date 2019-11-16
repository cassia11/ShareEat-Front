import axios from 'axios'

export default {
    getPlaces: () => axios.get(`lugares`),
    getPlaceId: (id) => axios.get(`lugares/${id}`)
}