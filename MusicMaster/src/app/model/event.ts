export interface Event {
    client_id: string;
    name: string;
    description: string;
    full_day: boolean;
    first_day: Date;
    last_day: Date;
}