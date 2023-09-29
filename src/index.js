import { LoadProjects, saveProject } from './storage.js';
import { docClickHandler} from './displayController.js';

// Reset storage to defaults
// saveProject('', true);
const projectList = LoadProjects();
projectList.loadTodoList(0);
projectList.loadMenu();
docClickHandler(); 

