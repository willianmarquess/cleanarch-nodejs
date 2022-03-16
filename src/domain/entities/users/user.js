import Entity from '../shared/entity.js'

export default class User extends Entity {
  constructor (id, email, password) {
    super(id)
    this.email = email
    this.password = password
  }
}
