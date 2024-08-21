import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";


export class PresntacionOnSide extends CoursePresentation{
    private location:string

    constructor(location:string, curso: Course){
        super(curso)
        this.location = location
    }


    public presentarCurso(): void {
        console.log('Este curso será impartido en '+ this.location)
        this.curso.displayCourseInfo()
    }

    public showPrerequisits():void{
        console.log('Presentarse 15 minutos antes en la sala asignada, avisar de asistencia en recepción')
       
    }

    public confirmarAsistencia(confirmacion:boolean):void{
        if(confirmacion){
            console.log('El asistente confirmo su asistencia')
        } else {
            console.log('El asistente no ha confirmado su asistencia')
        }
    }
}