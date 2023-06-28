import { v4 as uuidV4 } from "uuid"

class Cars {
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

export { Cars };