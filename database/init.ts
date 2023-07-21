import { client } from "./db";

const createTables = async () => {
    try {
        const createTableCarsQuery =
            `CREATE TABLE cars(
                id VARCHAR(255) PRIMARY KEY,
                owner VARCHAR(255) NOT NULL,
                license_plate VARCHAR(255) NOT NULL,
                telephone VARCHAR(255) NOT NULL
            )`;

        const createTableVacanciesQuery =
            `CREATE TABLE vacancies(
                id VARCHAR(255) PRIMARY KEY,
                vacancy_number VARCHAR(255) NOT NULL,
                available BOOLEAN NOT NULL
            )`;

        const createTableParkingQuery =
            ` CREATE TABLE parking(
                id VARCHAR(255) PRIMARY KEY,
                entry_time TIMESTAMP NOT NULL,
                exit_time TIMESTAMP,
                value NUMERIC NOT NULL,
                car_id VARCHAR(255),
                vacancy_id VARCHAR(255),

                CONSTRAINT FK_cars_id FOREIGN KEY(car_id) REFERENCES cars(id),
                CONSTRAINT FK_vacancies_id FOREIGN KEY(vacancy_id) REFERENCES vacancies(id)
            )`;

        await client
            .query(createTableCarsQuery)
            .then(() => console.log("Table cars was created"))
            .catch((error) => console.log(error));

        await client
            .query(createTableVacanciesQuery)
            .then(() => console.log("Table vacancies was created"))
            .catch((error) => console.log(error));

        await client
            .query(createTableParkingQuery)
            .then(() => console.log("Table parking was created"))
            .catch((error) => console.log(error));

        client.end();
        
    } catch (error) {
        console.error("Error creating tables: ", error);
    }
};

createTables();