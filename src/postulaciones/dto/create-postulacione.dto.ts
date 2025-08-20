import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Resultado } from "../enums/resultado.enum";

export class CreatePostulacioneDto {
    estudiante: Estudiante;
    estado: Resultado
};
