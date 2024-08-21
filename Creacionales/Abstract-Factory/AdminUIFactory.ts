import { UIFactory } from "./UIFactory";
import { AdminButton } from "./UIObjects/AdminButton";
import { AdminDialog } from "./UIObjects/AdminDialog";


export class AdminUIFactory implements UIFactory{
    public createButton() {
        return new AdminButton();  
    }
    public createDialog() {
        return new AdminDialog();
    }
}