import axios from 'axios'

export default function (queryString, page, itemsPerPage) {
  return axios.get('/api/search?order=desc&sort=activity&intitle=' + queryString + '&site=stackoverflow&page=' + page + '&pagesize=' + itemsPerPage + '&filter=!9Z(-x-Q)8')
}
