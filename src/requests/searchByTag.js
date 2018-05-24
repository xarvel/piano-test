import axios from 'axios'

export default function (tag, page,itemsPerPage) {
  return axios.get('/api/search?order=desc&sort=activity&tagged=' + tag + '&site=stackoverflow&page=' + page + '&pagesize=' + itemsPerPage + '&filter=!9Z(-x-Q)8')
}
