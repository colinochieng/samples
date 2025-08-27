
  try {
    const res = await fetch('http://192.168.0.24:5000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    const data = await res.json()

    if (res.ok) {
      localStorage.setItem('token', data.token)
      alert('Login successful')
      window.location.href = '/dashboard.html'
    } else {
      document.getElementById('message').textContent =
        data.message || 'Login failed'
    }
  } catch (err) {
    document.getElementById('message').textContent = 'Network error'
  }
})
