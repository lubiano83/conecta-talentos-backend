import { Postulacione } from "src/postulaciones/entities/postulacione.entity";
import { Trabajos } from "../enums/trabajos.enum";
import { ApiProperty } from "@nestjs/swagger";

export class OfertasLaborale {

    @ApiProperty()
    id: number;

    @ApiProperty()
    fechaCreacion: Date;

    @ApiProperty()
    descripcion: string;

    @ApiProperty()
    cargo: string;

    @ApiProperty()
    region: string;

    @ApiProperty()
    tipo: Trabajos;

    @ApiProperty()
    estado: boolean;

    @ApiProperty()
    empresa: string;

    @ApiProperty()
    postulaciones: Postulacione[];

    constructor(
        id: number,
        descripcion: string,
        cargo: string,
        region: string,
        tipo: Trabajos,
        estado: boolean,
        empresa: string
    ) {
        this.id = id;
        this.fechaCreacion = new Date();
        this.descripcion = descripcion;
        this.cargo = cargo;
        this.region = region;
        this.tipo = tipo;
        this.estado = estado;
        this.empresa = empresa;
        this.postulaciones = [];
    };
};