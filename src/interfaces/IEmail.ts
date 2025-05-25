import { ISender } from './ISender';

export interface IEmail {
    id: string;
    subject: string;
    content: string;
    folder: 'inbox' | 'sent';
    from: ISender;
    date: string;
    isRead: boolean;
    isDeleted: boolean;
    isStarred: boolean;
}