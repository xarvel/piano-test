import axios from 'axios'

export default function (authorID, page, itemsPerPage) {
  return axios.get('/api/users/' + authorID + '/questions?order=desc&sort=activity&site=stackoverflow&page=' + page + '&pagesize=' + itemsPerPage + '&filter=!9Z(-x-Q)8')
}
