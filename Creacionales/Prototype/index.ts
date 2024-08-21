
import { CourseBuilder } from './CourseBuilder';

const basicCourse = new CourseBuilder()
.setName('Introducción a TypeScript')
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setCustomMethod((message:string)=>{console.log('Se agregó funcionalidad extra '+ message)})
.BuildCourse();

console.log('Curso 1:');
basicCourse.displayCourseInfo();
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

console.log('Curso 2:');
advancedCourse.displayCourseInfo();
console.log('*****************************************');
console.log('Imprimendo clon para base de datos')

const cursoavanzadoBasedeDatos= new CourseBuilder().fromPrototype(advancedCourse.clone())
.setName("Curso de Base de datos")
.setInstructor({ name: 'Alice', email: 'alice@example.com', experience: 5 })
.setSchedule({days:['Lunes'],time:'De 8 am a 10 am'})
.BuildCourse()

cursoavanzadoBasedeDatos.displayCourseInfo()
console.log('*****************************************');
console.log('Imprimendo clon para avanzado de Apis')

const cursoavanzadoApis= new CourseBuilder().fromPrototype(advancedCourse.clone())
.setName("Curso avanzado de Api's")
.setInstructor({ name: 'Gerardo', email: 'alice@example.com', experience: 5 })
.setSchedule({days:['Lunes'],time:'De 10 am a 12 pm'})
.BuildCourse()

cursoavanzadoApis.displayCourseInfo()



