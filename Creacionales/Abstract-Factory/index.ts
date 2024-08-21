
import { UIManager } from './UIManager';
import { UIFactory } from './UIFactory';
import { AdminUIFactory } from './AdminUIFactory';
import { StudentUIFactory } from './StudentUIFactory';
import { InstructorUIFactory } from './InstructorUIFactory';


const uiAdminFactory = new AdminUIFactory(); 
const uiManagerAdmin = new UIManager(uiAdminFactory);
const uiFactoryStudent = new StudentUIFactory(); 
const uiManagerStudent = new UIManager(uiFactoryStudent);
const uiFactoryInstructor = new StudentUIFactory(); 
const uiManagerInstructor = new UIManager(uiFactoryInstructor);


const adminUI = uiManagerAdmin.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();


const studentUI = uiManagerStudent.createUI('admin');
studentUI.button.render();
studentUI.dialog.show();

const instructorUI = uiManagerInstructor.createUI('admin');
instructorUI.button.render();
instructorUI.dialog.show();
