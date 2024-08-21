
import { INotificationService } from './INotificationService';
import { EmailNotificationService } from './EmailNotificationService';
import { SMSNotificationService } from './SMSNotificationService';
import { ExternalNotificationService } from './ExternalNotificationService';
import {NotificationAdapter} from './NotificationAdapter'

export class NotificationManager {
    private emailService: INotificationService;
    private smsService: INotificationService;
    private telegramService: INotificationService;
    private static instanciaUnica:NotificationManager;
//Se pone un private al constructor para que se 
    private constructor() {
        this.emailService = new EmailNotificationService();
        this.smsService = new SMSNotificationService();
        this.telegramService = new NotificationAdapter(new ExternalNotificationService());
    }
    public static getSingleInstance():NotificationManager{
       if(!NotificationManager.instanciaUnica){
        NotificationManager.instanciaUnica = new NotificationManager() //Ahora sí se hace la instancia única, si no existe desde antes
       }
       return NotificationManager.instanciaUnica;
    }

    public notifyByEmail(message: string, recipient: string): void {
        this.emailService.sendNotification(message, recipient);
    }

    public notifyBySMS(message: string, recipient: string): void {
        this.smsService.sendNotification(message, recipient);
    }

    public ownNotifybyTelegram(message:string,recipient:string):void{
        this.telegramService.sendNotification(message,recipient);
    }
}
