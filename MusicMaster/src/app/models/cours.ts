export class Cours {
    name: string;
    url: string;
    done: boolean

    constructor(name: string, url: string) {
        this.name = name;
        this.url = url;
        this.done = false;
    }
}
