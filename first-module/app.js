function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Something went wrong!', 500);
