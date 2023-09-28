const defaultTodolist = 
  `
  [
    {
     "name": "project",
     "title": "Workout",
     "complete": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Daily Routine",
         "dueDate": "15/12/2023",
         "priority": true,
         "color": "red",
         "complete": true,
         "tasks": [
           {
             "task": "Wake up morning",
             "complete": true
           },
           {
             "task": "30 min of cardio",
             "complete": true
           },
           {
             "task": "Eat healthy meat",
             "complete": false
           },
           {
             "task": "Work out for 40 minutes",
             "complete": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Weekly tasks",
         "dueDate": "15/12/2023",
         "priority": false,
         "color": "lime",
         "complete": true,
         "tasks": [
           {
             "task": "Exercise everyday",
             "complete": false
           },
           {
             "task": "Plan your workouts",
             "complete": true
           },
           {
             "task": "Stretch for 10 min after each workout",
             "complete": false
           }
           
         ]
       },
       {
         "name": "todo",
         "title": "Monthly tasks",
         "dueDate": "15/12/2023",
         "priority": false,
         "color": "cyan",
         "complete": true,
         "tasks": [
           {
             "task": "Track your progress",
             "complete": false
           },
           {
             "task": "Make adjustments to your workouts as needed",
             "complete": true
           },
           {
             "task": "Set new goals for yourself",
             "complete": false
           },
           {
             "task": "Reward yourself for the hard work",
             "complete": false
           }
           
         ]
       }
     ]
    },
    {
     "name": "project",
     "title": "Career",
     "complete": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Job Search",
         "dueDate": "20/03/2024",
         "priority": false,
         "color": "purple",
         "complete": false,
         "tasks": [
           {
             "task": "Update resume",
             "complete": true
           },
           {
             "task": "Create a LinkedIn profile",
             "complete": true
           },
           {
             "task": "Research potential employers",
             "complete": false
           },
           {
             "task": "Apply for at least 3 jobs per day",
             "complete": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Skill Development",
         "dueDate": "15/01/2024",
         "priority": true,
         "color": "pink",
         "complete": false,
         "tasks": [
           {
             "task": "Identify skills to improve",
             "complete": true
           },
           {
             "task": "Enroll in online courses",
             "complete": false
           },
           {
             "task": "Set up a study schedule",
             "complete": false
           }
         ]
       }
     ]
   },
   {
     "name": "project",
     "title": "Home Improvement",
     "complete": false,
     "todo-list": [
       {
         "name": "todo",
         "title": "Kitchen Renovation",
         "dueDate": "28/02/2024",
         "priority": true,
         "color": "teal",
         "complete": false,
         "tasks": [
           {
             "task": "Create a budget",
             "complete": false
           },
           {
             "task": "Hire a contractor",
             "complete": false
           },
           {
             "task": "Monitor progress",
             "complete": false
           }
         ]
       },
       {
         "name": "todo",
         "title": "Garden Makeover",
         "dueDate": "30/04/2024",
         "priority": false,
         "color": "lime",
         "complete": false,
         "tasks": [
           {
             "task": "Plan landscaping changes",
             "complete": true
           },
           {
             "task": "Plant flowers",
             "complete": true
           },
           {
             "task": "Create an outdoor seating area",
             "complete": false
           }
         ]
       }
     ]
   }
   ]
   `

import {NewCard, newProjectMenu} from './displayController.js';

function loadStorage () {
  const todoList = localStorage.getItem("todolist");
  let parseList = {};
  if (todoList !== null) {
    try { 
      parseList = JSON.parse(todoList);
    } catch (err) {
      console.log('Parser error. Loading default To-do list... ');
      parseList = JSON.parse(defaultTodolist);
    }
  } else {
    console.log("Data not found. Creating default To-do list...");
    localStorage.setItem("todolist", defaultTodolist);
    parseList = JSON.parse(defaultTodolist);
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
        addCard.newTask(todo[i].tasks[j].task);
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
    localStorage.setItem("todolist", defaultTodolist);
    return;
  }
  localStorage.setItem("todolist", JSON.stringify(todoList));
  
}

export const UpdateStorage = () => {
  const todoList = loadStorage();
  const addTask = (projectIndex, cardIndex, task) => {
    // console.log(`addTask (${projectIndex}, ${cardIndex}, ${task})`);
    const newTask = { task, "complete": false };
    todoList[projectIndex]["todo-list"][cardIndex].tasks.push(newTask);
    saveProject(todoList);
  }

  return {addTask}
}