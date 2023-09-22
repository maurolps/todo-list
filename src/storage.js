const defaultTodolist = 
  `
  [
    {
     "name": "prj1",
     "complete": false,
     "todo-list": [
       {
         "name": "todo1",
         "title": "My to-do list 1",
         "description": "This is how it works, do it!",
         "dueDate": "15/12/2023",
         "priority": "high",
         "complete": true,
         "tasks": [
           {
             "task": "It's working part 1",
             "complete": false
           },
           {
             "task": "It's working part 2",
             "complete": true
           }
         ]
       },
       {
         "name": "todo2",
         "title": "My to-do list 2",
         "description": "This is how it works, do it 2!",
         "dueDate": "15/12/2023",
         "priority": "high",
         "complete": true,
         "tasks": [
           {
             "task": "It's working part 1",
             "complete": false
           },
           {
             "task": "It's working part 2",
             "complete": true
           }
         ]
       }
     ]
    },
    {
     "name": "prj2",
     "complete": false,
     "todo-list": [
       {
         "name": "todo1",
         "title": "My to-do list 1 - prj2",
         "description": "This is how it works, do it! - prj2",
         "dueDate": "15/12/2023",
         "priority": "high",
         "complete": true,
         "tasks": [
           {
             "task": "It's working part 1 - prj2",
             "complete": false
           },
           {
             "task": "It's working part 2 - prj2",
             "complete": true
           }
         ]
       },
       {
         "name": "todo2",
         "title": "My to-do list 2  - prj2",
         "description": "This is how it works, do it 2! - prj2",
         "dueDate": "15/12/2023",
         "priority": "high",
         "complete": true,
         "tasks": [
           {
             "task": "It's working part 1 - prj2",
             "complete": false
           },
           {
             "task": "It's working part 2 - prj2",
             "complete": true
           }
         ]
       }
     ]
    }
   ]
   `

export const loadProject = () => {
  const todoList = localStorage.getItem("todolist");
  if (todoList !== null) {
    console.log ("Data found! Loading your To-do list...")
    return JSON.parse(todoList);
  } else {
    console.log("Data not found. Creating default To-do list...");
    localStorage.setItem("todolist", defaultTodolist);
    return JSON.parse(defaultTodolist);
  }
}

export const saveProject = (todoList) => {
  localStorage.setItem("todolist", JSON.stringify(todoList));
}

