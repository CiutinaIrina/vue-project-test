import qs from 'qs'

const CLIENT_ID = 'b8d9ce715f37cc8';
const ROOT_URL = 'https://api.imgur.com'

export default {
    login(){
        const querystring = {
            client_id: CLIENT_ID,
            response_type: 'token'
        }
        const url = `${ROOT_URL}/oauth2/authorize?${qs.stringify(querystring)}`
        window.location = url
    }
}