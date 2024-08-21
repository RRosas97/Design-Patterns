import { UIFactory } from "./UIFactory";
import { StudentButton } from "./UIObjects/StudentButton";
import { StudentDialog } from "./UIObjects/StudentDialog";



export class StudentUIFactory implements UIFactory{
    public createButton() {
        return new StudentButton()
    }
    public createDialog() {
        return new StudentDialog()
    }
}