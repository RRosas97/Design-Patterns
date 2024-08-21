import { IInstructorDetails } from "./IInstructorDetails";
import { ISchedule } from "./ISchedule";
import { IStudent } from "./IStudent";
import { Course } from "./Course";

export class CourseBuilder{
    private name: string = '';
    private description: string = '';
    private materials: string[] = [];
    private instructorDetails: IInstructorDetails = { name: '', email: '', experience: 0 };
    private schedule: ISchedule | null = null;
    private students: IStudent[] | null = null;
    private startDate: Date | null = null;
    private endDate: Date | null = null;
    private customMethod:(cadena:string) => void = (cadena:string) => {}

    

    
    

    public setName(name:string):CourseBuilder{
        this.name = name
        return this
    }

    public setDescription(description: string): CourseBuilder {
        this.description = description;
        return this;
    }
 
    public setMaterials(materials: string[]): CourseBuilder {
        this.materials = materials;
        return this;
    }

    public setInstructor(instructor: IInstructorDetails): CourseBuilder {
        this.instructorDetails = instructor;
        return this;
    }

    public setSchedule(schedule: ISchedule): CourseBuilder {
        this.schedule = schedule;
        return this;
    }

    public setStudents(students: IStudent[]): CourseBuilder {
        this.students = students;
        return this;
    }

    public setStartDate(startDate: Date): CourseBuilder {
        this.startDate = startDate;
        return this;
    }

    public setEndDate(endDate: Date): CourseBuilder {
        this.endDate = endDate;
        return this;
    }

    public setCustomMethod(method:(cadena:string)=>void):CourseBuilder{
        this.customMethod = method;
        return this;
    }

    public fromPrototype(curso:Course):CourseBuilder{
        this.name = curso.name
        this.description = curso.description
        this.materials = [...curso.materials]
        this.instructorDetails = {...curso.instructorDetails}
        this.schedule = curso.schedule? {...curso.schedule}:null
        this.students = curso.students?  curso.students.map(student => ({ ...student })):null 
        this.startDate = curso.startDate ? new Date(curso.startDate.getTime()) : null 
        this.endDate = curso.endDate ? new Date(curso.endDate.getTime()) : null 
        this.customMethod = curso.addExtraBehaviour
        return this;
    }

    public BuildCourse():Course{
        const course = new Course(
            this.name,
            this.description,
            this.materials,
            this.instructorDetails,
            this.schedule,
            this.students,
            this.startDate,
            this.endDate
        );
        course.addExtraBehaviour = this.customMethod;
        return course;
    } 



    
    
}

