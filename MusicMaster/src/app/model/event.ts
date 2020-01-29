import { IEvent } from 'ionic2-calendar/calendar';

export interface Event extends IEvent {
    description?: string;
    userId: string;
}