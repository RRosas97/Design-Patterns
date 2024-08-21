
import { EnrollmentService } from './EnrollmentService';
import { BillingService } from './BillingService';


const enrollmentService = new EnrollmentService();
const billingService = new BillingService();

const contactMail:string = 'ricardo.rosas@axity.com';

enrollmentService.enrollStudent(contactMail);
billingService.notifyPaymentDue(contactMail);