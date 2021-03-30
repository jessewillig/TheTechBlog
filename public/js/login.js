const loginForm = async function (event) {
    event.preventDefault();

    const usernameEl = document.querySelector('#username-input-login').value.trim();
    const passwordEl = document.querySelector('#password-input-login').value.trim();  
    
    if ( usernameEl && passwordEl) {
        const res = await fetch('/api/user', {
            method: 'POST',
            body: JSON.stringify({
                usernameEl,
                passwordEl
            }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(function () {
            document.location.replace('/dashboard');
        })
        .catch(err => console.log(err))
    }
}

document.querySelector('#login-form').addEventListener('submit', loginForm);