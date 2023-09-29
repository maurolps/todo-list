import { LoadProjects, saveProject } from './storage.js';
import { docClickHandler} from './displayController.js';

const projectList = LoadProjects();
projectList.loadTodoList(0);
projectList.loadMenu();
docClickHandler(); 

