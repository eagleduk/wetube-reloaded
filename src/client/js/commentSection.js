const videoContainer = document.getElementById("videoContainer");
const form = document.getElementById("commentForm");
const commentContainer = document.querySelector("div.video__comments");

const deleteNode = (e) => {
  const { parentNode } = e.target;

  const id = parentNode.dataset.id;
  console.log(id);

  fetch(`/api/comment/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });

  parentNode.remove();
};

const addComment = (text, id) => {
  const videoComments = document.querySelector(".video__comments ul");

  const newComment = document.createElement("li");
  newComment.dataset.id = id;
  newComment.className = "video__comment";

  const icon = document.createElement("i");
  icon.className = "fas fa-comment";

  const span = document.createElement("span");
  span.innerText = ` ${text}`;

  const span2 = document.createElement("span");
  span2.classList = "deleteBtn";
  span2.innerText = "❌";
  span2.addEventListener("click", deleteNode);

  newComment.appendChild(icon);
  newComment.appendChild(span);
  newComment.appendChild(span2);
  videoComments.prepend(newComment);
};

const handleAddComment = async (event) => {
  event.preventDefault();
  const textarea = form.querySelector("textarea");
  const text = textarea.value;
  const videoId = videoContainer.dataset.id;
  if (text === "") {
    return;
  }
  const response = await fetch(`/api/video/${videoId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text }),
  });
  if (response.status === 201) {
    textarea.value = "";
    const { newCommentId } = await response.json();
    addComment(text, newCommentId);
  }
};

if (form) {
  form.addEventListener("submit", handleAddComment);
  commentContainer.querySelectorAll("span.deleteBtn").forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", deleteNode);
  });
}
