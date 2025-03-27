import { NotificationsService } from './notifications.service';
import { NotificationType } from '@prisma/client';
export declare class NotificationsController {
    private readonly notificationsService;
    constructor(notificationsService: NotificationsService);
    sendNotification({ userId, message, type }: {
        userId: string;
        message: string;
        type: NotificationType;
    }): Promise<{
        type: import(".prisma/client").$Enums.NotificationType;
        id: string;
        createdAt: Date;
        userId: string;
        message: string;
        isRead: boolean;
    }>;
    getUserNotifications(userId: string): Promise<{
        type: import(".prisma/client").$Enums.NotificationType;
        id: string;
        createdAt: Date;
        userId: string;
        message: string;
        isRead: boolean;
    }[]>;
    markAsRead(id: string): Promise<{
        type: import(".prisma/client").$Enums.NotificationType;
        id: string;
        createdAt: Date;
        userId: string;
        message: string;
        isRead: boolean;
    }>;
}
