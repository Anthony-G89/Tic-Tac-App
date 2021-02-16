import axios from "axios";


const BASEURL = "https://www.swapi.tech/api/people/?name="
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    starWarCharacterSearch: function (query) {
        return axios.get(BASEURL + query)
    }
}