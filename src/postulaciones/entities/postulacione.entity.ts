import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Resultado } from "../enums/resultado.enum";
import { ApiProperty } from "@nestjs/swagger";

export class Postulacione {

    @ApiProperty()
    id: number;

    @ApiProperty()
    fechaPostulacion: Date;

    @ApiProperty()
    estudiante: Estudiante;

    @ApiProperty()
    estado: Resultado;

    constructor(
        id: number,
        estudiante: Estudiante,
        estado: Resultado
    ) {
        this.id = id;
        this.fechaPostulacion = new Date();
        this.estudiante = estudiante;
        this.estado = estado;
    };
};