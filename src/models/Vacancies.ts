import { v4 as uuidV4 } from "uuid";

class Vacancies {
    id?: string;
    vacancy_number: number;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Vacancies };