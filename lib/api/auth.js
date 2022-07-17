export default {
  async getAllCauses ( page = 1, size = 10, filter, category ) {
    const url = utils.urlQueryData('cause', { page, size, filter, category })
    const response = await fetch(` ${API_URL}/${url}`, {
      headers: { 'Access-Control-Allow-Origin': true },
    })
    let resp = await response.json()

    if (!response.ok) {
      this.isLoading = false
      if (response.status === 400) {
        throw new Error(response.message)
      }
    }
    return resp
   },
}
