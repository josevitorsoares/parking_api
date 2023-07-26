import { client } from "../../../database/db";
import { IVacancies } from "../VacanciesRepository";
import { Vacancies } from "../../models/Vacancies";
import { AppError } from "../../http/middlwares/AppError";

export class VacanciesRepository implements IVacancies{
    async create(vacancy_number: string): Promise<void> {
        const vacancies = new Vacancies();

        const vacancyNumber = await this.verifyVacancyNumber(vacancy_number);

        if (vacancyNumber) {
            throw new AppError("Vacancy number already exists", 422);
        }

        vacancies.vacancy_number = vacancy_number;

        const query = "INSERT INTO vacancies (id, vacancy_number, available) VALUES ($1, $2, $3)";
        const values = [vacancies.id, vacancies.vacancy_number, vacancies.available];

        try {
            await client.query(query, values).then(() => console.log("Vacancy was created!")).catch((error) => console.error(error));
        } catch (error) {
            console.error("Error creating Vacancy: ", error);
        }
    }

    async updateAvailableVacancy(vacancy_id: string, status: boolean): Promise<void>{
        const query = "UPDATE vacancies SET available = $1 WHERE id = $2";
        const values = [status, vacancy_id];

        try {
            await client.query(query, values).then(() => console.log("Vacancy was updated")).catch((error) => console.error(error));
        } catch (error) {
            console.error("Error updating Vacancy: ", error);
        }
    }

    async findByID(id: string): Promise<Vacancies> {
        const query = "SELECT id FROM vacancies WHERE id = $1";

        const vacancy = await client.query(query, [id]);
        return vacancy.rows[0];
    }

    async verifyAvaliableVacancy(vacancy_id: string): Promise<Vacancies> {
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
}