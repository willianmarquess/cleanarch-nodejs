import BaseEntity from '../../shared/entities/base.entity.js'


export default class User extends BaseEntity {
  constructor (id, email, password) {
    super(id)
    this.email = email
    this.password = password
  }
}
