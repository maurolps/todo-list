const defaultTodolist = 
  [
    {
     "name": "project",
     "title": "Workout",
     "marked": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Daily Routine",
         "dueDate": "15/12/2023",
         "priority": true,
         "color": "red",
         "marked": false,
         "tasks": [
           {
             "task": "Wake up morning",
             "marked": true
           },
           {
             "task": "30 min of cardio",
             "marked": false
           },
           {
             "task": "Eat healthy meat",
             "marked": false
           },
           {
             "task": "Work out for 40 minutes",
             "marked": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Weekly tasks",
         "dueDate": "15/12/2023",
         "priority": false,
         "color": "lime",
         "marked": false,
         "tasks": [
           {
             "task": "Exercise everyday",
             "marked": false
           },
           {
             "task": "Plan your workouts",
             "marked": false
           },
           {
             "task": "Stretch for 10 min after each workout",
             "marked": false
           }
           
         ]
       },
       {
         "name": "todo",
         "title": "Monthly tasks",
         "dueDate": "15/12/2023",
         "priority": false,
         "color": "cyan",
         "marked": false,
         "tasks": [
           {
             "task": "Track your progress",
             "marked": false
           },
           {
             "task": "Make adjustments to your workouts as needed",
             "marked": false
           },
           {
             "task": "Set new goals for yourself",
             "marked": false
           },
           {
             "task": "Reward yourself for the hard work",
             "marked": false
           }
           
         ]
       }
     ]
    },
    {
     "name": "project",
     "title": "Career",
     "marked": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Job Search",
         "dueDate": "20/03/2024",
         "priority": false,
         "color": "purple",
         "marked": false,
         "tasks": [
           {
             "task": "Update resume",
             "marked": false
           },
           {
             "task": "Create a LinkedIn profile",
             "marked": false
           },
           {
             "task": "Research potential employers",
             "marked": false
           },
           {
             "task": "Apply for at least 3 jobs per day",
             "marked": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Skill Development",
         "dueDate": "15/01/2024",
         "priority": true,
         "color": "pink",
         "marked": false,
         "tasks": [
           {
             "task": "Identify skills to improve",
             "marked": false
           },
           {
             "task": "Enroll in online courses",
             "marked": false
           },
           {
             "task": "Set up a study schedule",
             "marked": false
           }
         ]
       }
     ]
   },
   {
     "name": "project",
     "title": "Home Improvement",
     "marked": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Kitchen Renovation",
         "dueDate": "28/02/2024",
         "priority": true,
         "color": "teal",
         "marked": false,
         "tasks": [
           {
             "task": "Create a budget",
             "marked": false
           },
           {
             "task": "Hire a contractor",
             "marked": false
           },
           {
             "task": "Monitor progress",
             "marked": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Garden Makeover",
         "dueDate": "30/04/2024",
         "priority": false,
         "color": "lime",
         "marked": false,
         "tasks": [
           {
             "task": "Plan landscaping changes",
             "marked": false
           },
           {
             "task": "Plant flowers",
             "marked": false
           },
           {
             "task": "Create an outdoor seating area",
             "marked": false
           }
         ]
       }
     ]
   }
  ]


import {NewCard, newProjectMenu} from './displayController.js';

function loadStorage () {
  const todoList = localStorage.getItem("todolist");
  let parseList = {};
  if (todoList !== null) {
    try { 
      parseList = JSON.parse(todoList);
    } catch (err) {
      console.log('Parser error. Loading default To-do list... ');
      parseList = defaultTodolist;
    }
  } else {
    console.log("Data not found. Creating default To-do list...");
    localStorage.setItem("todolist", JSON.stringify(defaultTodolist));
    parseList = defaultTodolist;
  }
  return parseList;
}

export const LoadProjects = () => {
  const parseList = loadStorage();

  const loadTodoList = (projectIndex) => {
    const todo = parseList[projectIndex]["todo-list"];
  
    for (let i = 0; i < todo.length; i++) {
      const addCard = NewCard(todo[i].title, todo[i].color, todo[i].priority);
      for (let j = 0; j < todo[i].tasks.length; j++) {
        const tasks = todo[i].tasks[j];
        addCard.newTask(tasks.task, false, tasks.marked);
      }
    }
  }

  const loadMenu = () => {
    for (let i = 0; i < parseList.length; i++) {
      newProjectMenu(parseList[i].title);
    }
  }

  return {loadTodoList, loadMenu}
}

export const saveProject = (todoList, reset = false) => {
  if (reset) {
    localStorage.setItem("todolist", JSON.stringify(defaultTodolist));
    return;
  } if (todoList !== null) {
  localStorage.setItem("todolist", JSON.stringify(todoList));
  }

}

export const UpdateStorage = () => {
  const todoList = loadStorage();

  const saveTask = (projectIndex, cardIndex, task) => {
    const newTask = { task, "marked": false };
    todoList[projectIndex]["todo-list"][cardIndex].tasks.push(newTask);
    saveProject(todoList);
  }

  const saveCard = (projectIndex, title) => {
    const newCard = {
      "name": "todo", title,
      "dueDate": "20/05/2025",
      "priority": false,
      "tasks": []
    }
    todoList[projectIndex]["todo-list"].push(newCard);
    saveProject(todoList);
  }

  const saveMark = (projectIndex, cardIndex, taskId, marked) => {
    todoList[projectIndex]["todo-list"][cardIndex].tasks[taskId].marked = marked;
    saveProject(todoList);
  }

  const saveEdit = (projectIndex, cardIndex, taskId, task) => {
    todoList[projectIndex]["todo-list"][cardIndex].tasks[taskId].task =  task;
    saveProject(todoList);
  }

  const saveTheme = (projectIndex, cardIndex, color) => {
    todoList[projectIndex]["todo-list"][cardIndex].color =  color;
    saveProject(todoList);
  }

  const savePin = (projectIndex, cardIndex, priority) => { 
  todoList[projectIndex]["todo-list"][cardIndex].priority = priority;
  saveProject(todoList);
  }

  return {saveTask, saveCard, saveMark, saveEdit, saveTheme, savePin}
}