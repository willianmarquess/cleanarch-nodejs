export const expressAdapter = (controllerInstance) => {
    return async (request, response) => {
        const { body, statusCode } = await controllerInstance.handle({
            body: request.body,
            params: request.params
        })
        return response.status(statusCode).json(body)
    }
}

