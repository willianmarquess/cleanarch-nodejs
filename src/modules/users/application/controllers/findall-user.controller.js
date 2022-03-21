import Http from '../../../shared/helpers/http/http.js'

export default class FindAllUserController {
    constructor (findAllUseCase) {
        this.findAllUseCase = findAllUseCase
    }

    async handle () {
        try {
            const users = await this.findAllUseCase.execute()
            return Http.ok(users)
        } catch (error) {
            return Http.error(error)
        }
    }
}