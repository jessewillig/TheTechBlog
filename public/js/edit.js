const updateForm = async = function (event) {
    event.preventDefault();

    const title = document.querySelector('#post-title').value.trim();
    const body = document.querySelector('#post-body').value.trim();
    const token = +window.location.toString().split('/')[5];

    console.log(token);
    if (title && body) {
        const response = await fetch(`/api/posts/${token}`, {
            method: 'PUT',
            body: JSON.stringify({
                title,
                body
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create post!');
        }
    }
};

document.querySelector('#update-post').addEventListener('submit', updateForm);