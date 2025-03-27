import { PrismaService } from 'src/prisma/prisma.service';
import { NotificationType } from '@prisma/client';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    sendNotification(userId: string, message: string, type: NotificationType): Promise<{
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
    markAsRead(notificationId: string): Promise<{
        type: import(".prisma/client").$Enums.NotificationType;
        id: string;
        createdAt: Date;
        userId: string;
        message: string;
        isRead: boolean;
    }>;
}
