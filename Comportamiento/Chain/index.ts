
import { CourseBuilder } from './CourseBuilder';
import { PresntacionOnSide } from './PresentacionOnside';
import { PresntacionOnline } from './PresentacionOnline';
import {StudentEnrollmentValidator,MaterialAvailabilityValidator,CourseStartDateValidator} from './ConcreteCourseValidators'


const studentValidator = new StudentEnrollmentValidator()
const materialValidator = new MaterialAvailabilityValidator()
const courseStartValidator = new CourseStartDateValidator()

const basicCourse = new CourseBuilder()
.setName('Introducción a TypeScript')
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setCustomMethod((message:string)=>{console.log('Se agregó funcionalidad extra '+ message)})
.BuildCourse();

console.log('Curso 1:');
// basicCourse.displayCourseInfo();
console.log('*****************************************');
basicCourse.addExtraBehaviour('Extra mensaje: Este curso es sabatino');


const advancedCourse = new CourseBuilder().setName('TypeScript Avanzado')
.setDescription('Template para cursos avanzados')
.setMaterials(['Libro', 'Videos', 'Proyectos','Diapositivas'])
.setSchedule({days:['Lunes'],time:'De 8 am a 5 pm'})
.setStudents([{ name: 'Kevin', email: 'Kevin@example.com' },
            { name: 'Victor', email: 'Victor@example.com' },
            { name: 'Camila', email: 'Camila@example.com' },
            { name: 'Jose', email: 'Jose@example.com' },
            { name: 'Amairani', email: 'Amairani@example.com' }])
.setStartDate(new Date(2024, 8, 1))
.setEndDate(new Date(2024, 11, 30))
.BuildCourse();



const presentacionOnside = new PresntacionOnSide('Interlomas',advancedCourse)
presentacionOnside.presentarCurso()
presentacionOnside.confirmarAsistencia(true)
presentacionOnside.showPrerequisits()


//configurar cadena de validación

studentValidator.setNext(materialValidator).setNext(courseStartValidator)

try {
    studentValidator.validate(advancedCourse)
    const presentacionOnside = new PresntacionOnSide('Interlomas',advancedCourse)
    presentacionOnside.presentarCurso()
    presentacionOnside.confirmarAsistencia(true)
    presentacionOnside.showPrerequisits()

} catch (error) {
    console.error('Fallo alguno de  los validadores')
    console.error(error)
}





