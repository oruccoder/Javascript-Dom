//  Replace Child

const cardBody = document.querySelector(".card-body");

// <h5 class="text-xl font-semibold text-gray-800 mb-4">Todo List</h5>

const newTitle = document.createElement("h1")
newTitle.className = "text-xl font-semibold text-gray-800 mb-4";
newTitle.textContent = "Todo List - New";

console.log(cardBody.childNodes);


cardBody.replaceChild(newTitle,cardBody.childNodes[1])