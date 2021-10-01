import Base from './client'

export default class extends Base {
  post () {
    return this.request('POST', 'profile')
  }

  get () {
    return this.request('GET', 'profile')
  }

  update (data) {
    const options = {
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json-patch+json' }
    }
    return this.request('PATCH', 'profile', options)
  }
}
