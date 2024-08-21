import { Course } from "./Course";
import { CoursePresentation } from "./CoursePresentation";


export class PresntacionOnline extends CoursePresentation{
    private platform:string

    constructor(platform:string, curso: Course){
        super(curso)
        this.platform = platform
    }


    public presentarCurso(): void {
        console.log('Este curso será impartido mediante la plataforma '+ this.platform)
        this.curso.displayCourseInfo()
    }

    public showOnlineResults():void{
        console.log('Los materiales del curso son:')
        this.curso.getMaterials().forEach(material =>{console.log(material)})
    }

    public enviarRecordatorio(cadena:string):void{
        console.log('Este es un recordatorio del curso en línea: '+ cadena)
    }
}
