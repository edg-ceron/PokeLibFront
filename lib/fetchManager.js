import axios from 'axios';

// import { cleanStorageAuth } from '@/utils/general'

// @Options Object
//  *isFile

const fetchManager  = async (url, options = {}, errorModal = {}) => {
  const config = {
    method: options.method || 'GET',
    url,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      ...options.headers
    },
    data: options.data || null,
    responseType: options.responseType || 'json',
    params: options.params || null
  };

  return axios(config)
      .then((response) => {
        return ({ data: response.data })
      })
      .catch((error) => {
        console.log('error.data', error)
        let response = {data: { error: error.response?.data || 'Ha ocurrido un error, inténtelo más tarde.'}, status: error.response?.status || 503 }

        if (response?.status === 401 || response?.status === 403) {
          return redirect()
        }

        return response
    });
}

function redirect() {
  let getUrl = window.location;
  let baseUrl = getUrl.protocol + "//" + getUrl.host + "/" + getUrl.pathname.split('/')[1];
  // cleanStorageAuth()
  window.location.href = baseUrl;
}

export default fetchManager
