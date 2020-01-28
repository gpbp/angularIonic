export interface Tutorial {
    tutorialId: string;
    name: string;
    link: string;
    done?: boolean;
    clientId?: string;
    difficulty_level: number;
}