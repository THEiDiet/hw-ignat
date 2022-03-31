export type requestBody = { success: boolean }

export const requestAPI = {
  request: (body: requestBody) => {
    return fetch('https://neko-cafe-back.herokuapp.com/auth/test', {
      headers: {
        'Content-Type': 'Application/json'
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
  }
}