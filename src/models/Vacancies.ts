import { v4 as uuidV4 } from "uuid";

export class Vacancies {
    id?: string;
    vacancy_number: string;
    available: boolean;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
            this.available = true;
        }
    }
}