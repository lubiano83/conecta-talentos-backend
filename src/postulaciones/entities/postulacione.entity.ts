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
    estado: Resultado

    constructor(
        id: number,
        fechaPostulacion: Date,
        estudiante: Estudiante,
        estado: Resultado
    ) {
        this.id = id;
        this.fechaPostulacion = fechaPostulacion;
        this.estudiante = estudiante;
        this.estado = estado;
    };
};