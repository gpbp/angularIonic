export interface Event {
    clientID: string;
    title: string;
    description: string;
    full_day: boolean;
    first_day: Date;
    last_day: Date;
}