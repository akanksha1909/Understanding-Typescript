function generateError(message: string, code: number): never {
    throw { message, errorCode: code }
}

generateError('Something went wrong!', 500)
