import axios from 'axios'

export default {
    getPlaces: () => axios.get('/api/lugares')
}