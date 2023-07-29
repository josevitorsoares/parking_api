import { v4 as uuidV4 } from "uuid";

export class Cars {
    id: string;
    owner: string;
    license_plate: string;
    telephone: string;

    constructor(){
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}