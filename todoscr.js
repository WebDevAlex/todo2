ready(() => {

    let todoList = new TodoList();
    todoList.addTask('asdf1');
    todoList.addTask('asdf2');
    todoList.addTask('asdf3');

    let list = document.getElementById('todo__list');
    let todoInput = document.querySelectorAll('.todo__add');

    let itemCounter = 0;

    todoInput.forEach((element) => {

        element.addEventListener('keyup', handleKeyUp);

        function handleKeyUp(event) {
            if(event.keyCode === 13 && todoInput.value != ""){

                let task = todoList.addTask(element.value);
                addTaskToList(task);
                element.value = "";

                console.log(todoList.tasks);
            }
        }
    });

    /**
     * fügt einen Task der Liste(DOM) hinzu
     * @param task
     */
    let addTaskToList = (task)=>{
        let newDomItem = createItemDom(task);
        list.appendChild(newDomItem);
    };


    /**
     * Baut die initiale Liste auf
     * @param taskListe
     */
    let initTaskList = (taskListe) => {
        taskListe.forEach(task => {
            let i = createItemDom(task);
            list.appendChild(i);
        })
    };

    /**
     * Erstellt ein dom item für einen neuen task
     * @param task
     * @returns {HTMLLIElement}
     */
    let createItemDom = (task) => {
    let item = document.createElement('li');
    item.task = task;

    let del = document.createElement('button');
    del.innerText='del';
    del.classList.add('delete');
    item.appendChild(del);

    let erledigt = document.createElement('button');
    erledigt.innerText='done';
    erledigt.classList.add('erledigt');
    item.appendChild(erledigt);

    item.classList.add('todo__item');
    let text = document.createElement('text');
    text.innerText = task.text;
    item.appendChild(text);

    console.dir(e.target.classList)
    return item;
};

    // Initialisiert die Liste
    list.innerHTML = '';
    initTaskList(todoList.tasks);
});