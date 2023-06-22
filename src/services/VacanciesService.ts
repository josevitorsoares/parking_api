import { client } from "../../database/db";
import { Vacancies } from "../models/Vacancies";

class VacanciesServices {
    async create(vacancy_number: number): Promise<void>{
        const vacancies = new Vacancies();

        vacancies.vacancy_number = vacancy_number;

        const query = "INSERT INTO vacancies (id, vacancy_number) VALUES ($1, $2)";
        const values = [vacancies.id, vacancies.vacancy_number];

        await client
            .query(query, values)
            .then(() => console.log("Vacancy was created!"))
            .catch((error) => console.error(error));
    }
}

export { VacanciesServices };