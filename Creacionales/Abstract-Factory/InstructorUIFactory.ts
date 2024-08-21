import { UIFactory } from "./UIFactory";
import { InstructorButton } from "./UIObjects/InstructorButton";
import { InstructorDialog } from "./UIObjects/InstructorDialog";


export class InstructorUIFactory implements UIFactory{
    public createButton() {
        return new InstructorButton();  
    }
    public createDialog() {
        return new InstructorDialog();
    }
}