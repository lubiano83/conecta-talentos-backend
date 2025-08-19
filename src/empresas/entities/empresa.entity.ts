import { ApiProperty } from "@nestjs/swagger";
import { Tamano } from "../enums/tamano.enum";

export class Empresa {
    
    @ApiProperty()
    id: number;

    @ApiProperty()
    nombre: string;

    @ApiProperty()
    sitioWeb: string;

    @ApiProperty()
    tipo: Tamano

    constructor(
        id: number,
        nombre: string,
        sitioWeb: string,
        tipo: Tamano
    ) {
        this.id = id;
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.tipo = tipo;
    };
};