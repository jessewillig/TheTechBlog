const newPost = async = function (event) {
    event.preventDefault();

    const body = document.querySelector('#comment-body').nodeValue.trim();
    const postId = +window.location.pathname.split('/')[2];
    const postData = {
        body,
        post_id: postId,
    };

    if (body) {
        const response = await fetch(`/api/comments`, {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.ok) {
            document.location.reload();
        } else {
            alert('Unable to add comment');
        }
    }
};

document.querySelector('.new-comment-form').addEventListener('submit', newPost);