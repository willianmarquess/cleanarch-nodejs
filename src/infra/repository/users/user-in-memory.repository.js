export default class UserRepositoryInMemory {
    constructor (dbInstance) {
        this.dbInstance = dbInstance
    }

    async save (user) {
        this.dbInstance.push(user)
        return await Promise.resolve(user)
    }

    async findAll () {
        return await Promise.resolve(this.dbInstance)
    }

    async findById (id) {
        return await Promise.resolve(this.dbInstance.find((user) => user.id === id))
    }

    async findByEmail (email) {
        return await Promise.resolve(this.dbInstance.find((user) => user.email === email))
    }
}