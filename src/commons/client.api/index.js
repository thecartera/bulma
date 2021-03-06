import Assets from './assets'
import Feed from './feed'
import Notifications from './notifications'
import Comments from './comments'
import Profile from './profile'
import Users from './users'
import Wallets from './wallets'

class Client {
  constructor (token = null) {
    this.assets = new Assets(token)
    this.feed = new Feed(token)
    this.notifications = new Notifications(token)
    this.comments = new Comments(token)
    this.profile = new Profile(token)
    this.users = new Users(token)
    this.wallets = new Wallets(token)
  }

  set token (token) {
    this.assets.token = token
    this.feed.token = token
    this.notifications.token = token
    this.comments.token = token
    this.profile.token = token
    this.users.token = token
    this.wallets.token = token
  }
}

export default new Client()
