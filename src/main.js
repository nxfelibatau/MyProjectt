document.addEventListener("DOMContentLoaded", () => {
    const actions = document.querySelector("#actions");
    const formWrapper = document.querySelector("#form-wrapper");

    // Retrieve todos from localStorage
    let todos = JSON.parse(localStorage.getItem("todos")) || [];

    // Function to create or update the todos list in ul tag
    function createTodos(todos) {
        const todosList = document.querySelector("#todos-list");
        todosList.innerHTML = ""; // Clear the list

        todos.forEach((todo, index) => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between";

            const content = document.createElement("span");
            content.textContent = todo.content;
            content.style.textDecoration = todo.status ? "initial" : "line-through";
            content.style.color = todo.status ? "initial" : "red";

            const deleteBtn = document.createElement("i");
            deleteBtn.className = "bi bi-trash3 text-danger";
            deleteBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                createTodos(todos);
            });

            const completeBtn = document.createElement("i");
            completeBtn.className = "bi bi-check-circle text-success";
            completeBtn.addEventListener("click", () => {
                todos[index].status = !todos[index].status;
                localStorage.setItem("todos", JSON.stringify(todos));
                createTodos(todos);
            });

            const div = document.createElement("div");
            div.append(completeBtn);
            div.append(deleteBtn);

            li.append(content);
            li.append(div);
            todosList.append(li);
        });
    }

    // Initial rendering of todos
    createTodos(todos);

    // Event listeners for actions
    Array.from(actions.children).forEach(action => {
        if (action.dataset.action === "add") {
            action.addEventListener("click", () => {
                formWrapper.innerHTML = `
                    <form id="add">
                        <input type="text" class="form-control" name="add" placeholder="Add todos:" />
                    </form>
                `;

                const addForm = document.querySelector("#add");
                addForm.addEventListener("submit", e => {
                    e.preventDefault();
                    const addInput = addForm.querySelector("input[name='add']");
                    if (addInput.value) {
                        todos.push({ content: addInput.value, status: true });
                        localStorage.setItem("todos", JSON.stringify(todos));
                        createTodos(todos);
                        addInput.value = "";
                    } else {
                        alert('No todos added');
                    }
                });
            });
        } else if (action.dataset.action === "search") {
            action.addEventListener("click", () => {
                formWrapper.innerHTML = `
                    <form id="search">
                        <input type="text" class="form-control" name="search" placeholder="Search todos:" />
                    </form>
                `;

                const searchForm = document.querySelector("#search");
                searchForm.addEventListener("keyup", e => {
                    e.preventDefault();
                    const searchInput = searchForm.querySelector("input[name='search']");
                    if (searchInput.value) {
                        const filteredTodos = todos.filter(todo => todo.content.toLowerCase().includes(searchInput.value.toLowerCase()));
                        createTodos(filteredTodos);
                    } else {
                        createTodos(todos);
                    }
                });
            });
        }
    });
});