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
}

export { VacanciesServices };