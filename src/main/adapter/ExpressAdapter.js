export default class ExpressAdapter {
    constructor (request, response) {
        this.request = request
        this.response = response
    }

    async adapt (controllerInstance) {
        const { body, statusCode } = await controllerInstance.execute({
            body: this.request.body,
            params: this.request.params
        })
        return this.response.status(statusCode).json(body)
    }

}