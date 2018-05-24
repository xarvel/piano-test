import axios from 'axios'

export default function (questionID) {
  return axios.get('/api/questions/'+questionID+'?order=desc&sort=activity&site=stackoverflow&filter=!-*jbN-lAlw-5')
}

