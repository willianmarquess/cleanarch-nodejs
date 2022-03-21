export default class FindAllUserController {
    constructor (findAllUseCase) {
        this.findAllUseCase = findAllUseCase
    }

    async handle () {
        try {
            const users = await this.findAllUseCase.execute()
            return {
                body: users,
                statusCode: 200
            }
        } catch (error) {
            return {
                body: { error: error.message },
                statusCode: 400
            } 
        }
    }
}