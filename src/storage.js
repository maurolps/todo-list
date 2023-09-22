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
         "priority": "high",
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
         "priority": "low",
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
         "priority": "low",
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
         "priority": "high",
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
         "priority": "low",
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
         "priority": "high",
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
         "priority": "low",
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

export const loadProject = () => {
  const todoList = localStorage.getItem("todolist");
  let parseList = {};
  if (todoList !== null) {
    console.log ("Data found! Loading your To-do list...");
    try { 
      parseList = JSON.parse(todoList);
      console.log('type: ', typeof(parseList));
    } catch (err) {
      console.log('Parser error. Loading default To-do list... ');
      return JSON.parse(defaultTodolist);
    }
    return parseList; 
  } else {
    console.log("Data not found. Creating default To-do list...");
    localStorage.setItem("todolist", defaultTodolist);
    return JSON.parse(defaultTodolist);
  }
}

export const saveProject = (todoList) => {
  localStorage.setItem("todolist", JSON.stringify(defaultTodolist));
}

