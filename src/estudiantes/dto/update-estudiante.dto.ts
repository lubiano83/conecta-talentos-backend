import { PartialType } from '@nestjs/mapped-types';
import { CreateEstudianteDto } from './create-estudiante.dto';

export class UpdateEstudianteDto extends PartialType(CreateEstudianteDto) {
    nombre?: string;
    apellidos?: string;
    edad?: number;
    profesion?: string;
};