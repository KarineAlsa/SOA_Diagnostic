import express from "express";
import dotenv from 'dotenv'
import path from 'path';
import { exec } from 'child_process';
import tutorRouter from "./TutorManagement/Infrastructure/Route/TutorRouter";
import subjectRouter from "./SubjectManagement/Infrastructure/Route/SubjectRouter";
dotenv.config()
const server = express();
const server_port =process.env.PORT;
server.use(express.json());
server.use('/api/v1/tutors', tutorRouter);
server.use('/api/v1/subjects', subjectRouter);


server.listen(process.env.PORT, () => {
    console.log(`Server listening on http://localhost:${server_port}/`);
});

const migrateScript = path.join(__dirname, '..', 'src', 'TutorManagement', 'Infrastructure', 'Migrations', 'Migration.ts');

const migrationProcess = exec(`ts-node ${migrateScript}`);

migrationProcess.on('exit', (code: number) => {
    if (code === 0) {
        console.log('Migración completada con éxito');
    } else {
        console.error('Error durante la migración');
    }
});


export default server;