
import { UIManager } from './UIManager';
import { UIFactory } from './UIFactory';
import { AdminUIFactory } from './AdminUIFactory';


const uiFactory = new AdminUIFactory(); 
const uiManager = new UIManager(uiFactory);

const adminUI = uiManager.createUI('admin');
adminUI.button.render();
adminUI.dialog.show();

