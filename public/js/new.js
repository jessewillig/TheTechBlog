const newForm = async = function(event) {
    event.preventDefault();
// titel of new post
    const title = document.querySelector('input[name="post-title"]').value;
    const body = document.querySelector('textarea[name="post-body"]').value;
    const token = localStorage.getItem("token");
    await fetch("api/post", {
        method: "POST",
        body: JSON.stringify({
            title,
            body
        }),
        headers: {
            "Content-Type": "application/json",
            autherization: "Bearer ${token}"
        }
    });
document.location.replace("/dashboard")
};

document.querySelector("#new-post").addEventListener("submit", newForm)
