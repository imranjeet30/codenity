// utils/errorHandler.js
export const useErrorHandler = () => {
  const handle = (error) => {
    if (error.response) {
      // Server responded with error status
      switch (error.response.status) {
        case 401:
          handleUnauthorized()
          break
        case 403:
          handleForbidden()
          break
        case 422:
          // Let component handle validation errors
          return Promise.reject(error)
        default:
          handleServerError(error)
      }
    } else if (error.request) {
      // Request was made but no response
      handleNetworkError()
    } else {
      // Something happened in setting up the request
      handleClientError(error)
    }
    return Promise.reject(error)
  }

  return { handle }
}