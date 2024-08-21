
import { NotificationManager } from './NotificationManager';

export class EnrollmentService {
    private notificationManager: NotificationManager;

    constructor() {
        this.notificationManager = NotificationManager.getSingleInstance();
    }

    public enrollStudent(studentEmail: string): void {
        // Lógica para inscribir al estudiante...

        // Notificación de inscripción exitosa
        this.notificationManager.notifyByEmail('Tu inscripción al curso Patrones de Diseño fue exitosa', studentEmail);
        this.notificationManager.ownNotifybyTelegram('Telegram:Urgente realizar el pago', '54679981232 ');
    }
}
