import { client } from "../../../database/db";
import { IVacanciesRepository } from "../VacanciesRepository";
import { Vacancies } from "../../models/Vacancies";
import { AppError } from "../../http/middlewares/AppError";

export class VacanciesRepository implements IVacanciesRepository {
    async create(vacancy_number: string): Promise<void> {
        try {
            const vacancies = new Vacancies();

            vacancies.vacancy_number = vacancy_number;

            const query = "INSERT INTO vacancies (id, vacancy_number, available) VALUES ($1, $2, $3)";
            const values = [vacancies.id, vacancies.vacancy_number, vacancies.available];

            await client.query(query, values).then(() => console.log("Vacancy was created!")).catch((error) => console.error(error));
        } catch (error) {
            throw new AppError(`Error creating Vacancy: ${error}`);
        }
    }

    async updateAvailableVacancy(vacancy_id: string, status: boolean): Promise<void> {
        try {
            const query = "UPDATE vacancies SET available = $1 WHERE id = $2";
            const values = [status, vacancy_id];

            await client.query(query, values).then(() => console.log("Vacancy was updated")).catch((error) => console.error(error));
        } catch (error) {
            throw new AppError(`Error creating Vacancy: ${error}`);
        }
    }

    async findByID(id: string): Promise<Vacancies> {
        const query = "SELECT id FROM vacancies WHERE id = $1";

        const vacancy = await client.query(query, [id]);
        return vacancy.rows[0];
    }

    async verifyAvailableVacancy(vacancy_id: string): Promise<Vacancies> {
        const query = "SELECT id FROM vacancies WHERE id = $1 AND available = true";

        const vacancy = await client.query(query, [vacancy_id]);
        return vacancy.rows[0];
    }

    async verifyAllAvailableVacancies(): Promise<number> {
        const query = "SELECT available FROM vacancies WHERE available = false";

        const vacancies = await client.query(query);
        return vacancies.rowCount;
    }

    async verifyVacancyNumber(vacancy_number: string): Promise<Vacancies> {
        const query = "SELECT vacancy_number FROM vacancies WHERE vacancy_number = $1";

        const vacancy = await client.query(query, [vacancy_number]);
        return vacancy.rows[0];
    }

    async listAvailableVacancies(): Promise<Vacancies[]> {
        const query = "SELECT * FROM vacancies WHERE available = TRUE";

        const vacancies = await client.query(query);
        return vacancies.rows;
    }
}