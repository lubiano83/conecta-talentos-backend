import { Trabajos } from "../enums/trabajos.enum";

export class CreateOfertasLaboraleDto {

    descripcion: string;
    cargo: string;
    region: string;
    tipo: Trabajos;
    estado: boolean;
    empresa: string;
    
};