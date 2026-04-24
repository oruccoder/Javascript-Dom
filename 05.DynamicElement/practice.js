// Dinamik olaraq element yaratmaq

const link = document.createElement("a");

// const cardBody = document.querySelector(".card-body")[0];

const todoList = document.querySelector("#list-group");

link.id = "goBlogWebiste";
link.className = "inline-block mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded text-sm transition"
link.href = "http://google.com";
link.target = "_blank";
link.innerHTML = "Personal Web Page";



/*


<li class="lists flex justify-between items-center p-4 hover:bg-gray-50 transition">
                            <span class="text-gray-700">Todo 3</span>
                            <a href="#" class="text-red-500 hover:text-red-700">
                                <i class="fa fa-remove"></i>
                            </a>
                        </li>

*/


const todo = document.createElement("li");
const todoSpan = document.createElement("span");
const todoLink = document.createElement("a");
const i = document.createElement("i");

todo.className = "flex justify-between items-center p-4 hover:bg-gray-50 transition";
todo.innerHTML = "Todo 4";

todoSpan.classList = "text-gray-700";

todoLink.href = "#";
todoLink.className = "text-red-500 hover:text-red-700";

i.className = "fa fa-remove";


todoLink.appendChild(i);
todo.appendChild(todoSpan);
todo.appendChild(todoLink);




todoList.appendChild(todo)
todoList.appendChild(todo)

console.log(todoList);
