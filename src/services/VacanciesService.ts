import { client } from "../../database/db";
import { Vacancies } from "../models/Vacancies";

class VacanciesServices {
    async create(vacancy_number: string): Promise<void>{
        const vacancies = new Vacancies();

        vacancies.vacancy_number = vacancy_number;

        const query = "INSERT INTO vacancies (id, vacancy_number, available) VALUES ($1, $2, $3)";
        const values = [vacancies.id, vacancies.vacancy_number, vacancies.available];

        await client
            .query(query, values)
            .then(() => console.log("Vacancy was created!"))
            .catch((error) => console.error(error));
    }

    async updateAvailableVacancy(vacancy_id: string){
        const query = "UPDATE vacancies SET available = false WHERE id = $1";

        await client
            .query(query, [vacancy_id])
            .then(()=>console.log("Vacancy was updated"))
            .catch((error)=> console.error(error));
    }

    async findByID(id: string) {
        const query = "SELECT id FROM vacancies WHERE id = $1";

        const vacancy = await client.query(query, [id]);
        return vacancy;
    }

    async verifyAvaliableVacancy(vacancy_id: string){
        const query = "SELECT id FROM vacancies WHERE id = $1 AND available = true";

        const vacancy = await client.query(query, [vacancy_id]);
        return vacancy.rows[0];
    }

    async verifyAllAvailableVacancies(): Promise<number>{
        const query = "SELECT COUNT(ID) FROM vacancies GROUP BY available HAVING available = true";

        const vacancies = await client.query(query);
        return vacancies.rowCount;
    }
}

export { VacanciesServices };