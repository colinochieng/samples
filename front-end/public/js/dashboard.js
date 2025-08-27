async function loadUser() {
  const token = localStorage.getItem('token')
  if (!token) {
    window.location.href = '/login.html'
    return
  }
  let response
  try {
    const res = await fetch('http://192.168.0.24:5000/auth/get-user-details', {
      method: 'GET',
      credentials: 'include',
      headers: { Authorization: `Bearer ${token}` },
    })
    response = res
    if (!res.ok) throw new Error('Unauthorized')

    const user = await res.json()
    document.getElementById(
      'user'
    ).innerText = `Welcome ${user.name} (${user.email})`
  } catch (err) {
    console.log(response)
    alert('Session expired, please log in again.')
    window.location.href = '/login.html'
  }
}

document.getElementById('logoutBtn').addEventListener('click', async () => {
  const token = localStorage.getItem('token')

  const res = await fetch('http://192.168.0.24:5000/auth/logout', {
    method: 'DELETE',
    credentials: 'include',
    headers: { Authorization: `Bearer ${token}` },
  })

  if (res.ok) {
    localStorage.removeItem('token')
    window.location.href = '/login.html'
  } else {
    alert('Logout failed')
  }
})

loadUser()
