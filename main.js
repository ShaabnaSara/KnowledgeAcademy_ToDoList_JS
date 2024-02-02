const inputBox = document.getElementById("input-box");
const ListContainer = document.getElementById("list-container");

function AddTask() {
  if (inputBox.value == "") {
    alert("Please Write Your Task !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    ListContainer.appendChild(li);
  }
  inputBox.value = "";
}
ListContainer.addEventListener("click", function (e) {
  if ((e.target.tagName = "LI")) {
    e.target.classList.toggle("checked");
  }
});
