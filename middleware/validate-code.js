import api from '@/lib/api'

export default async function ({ store, redirect }) {
  try {
    // let code = localStorage.getItem('code')
    let tokenCurrent = localStorage.getItem('token')
    if (tokenCurrent) {
      //TODO Validar token
    } else {
      return redirect('/')
    }
  } catch (_) {
    localStorage.removeItem('token')
    return redirect('/')
  }
}
