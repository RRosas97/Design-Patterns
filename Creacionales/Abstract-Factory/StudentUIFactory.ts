import { UIFactory } from "./UIFactory";
import { StudentButton } from "./UIObjects/StudentButton";
import { StudentDialog } from "./UIObjects/StudentDialog";



export class AdminUIFactory implements UIFactory{
    public createButton() {
        return new StudentButton()
    }
    public createDialog() {
        return new StudentDialog()
    }
}