import { BadRequestException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEstudianteDto } from './dto/create-estudiante.dto';
import { UpdateEstudianteDto } from './dto/update-estudiante.dto';
import { Estudiante } from './entities/estudiante.entity';

@Injectable()
export class EstudiantesService {

  private estudiantes: Estudiante[] = [];

  create(createEstudianteDto: CreateEstudianteDto) {
    try {
      const estudianteExiste = this.estudiantes.find(estudiante => estudiante.email.toLowerCase().trim() === createEstudianteDto.email.toLowerCase().trim())
      if(estudianteExiste) throw new BadRequestException("Ese estudiante ya esta registrado..");
      const estudiante = this.estudiantes.push(new Estudiante( this.estudiantes.length+1, createEstudianteDto.nombre, createEstudianteDto.apellidos, createEstudianteDto.edad, createEstudianteDto.profesion, createEstudianteDto.email ));
      return estudiante;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  findAll() {
    try {
      return this.estudiantes;
    } catch (error) {
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  findOne(id: number) {
    try {
      const estudianteEncontrado = this.estudiantes.find(estudiante => estudiante.id === id);
      if(!estudianteEncontrado) throw new NotFoundException("Ese estudiante no existe..");
      return estudianteEncontrado;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  update(id: number, updateEstudianteDto: UpdateEstudianteDto) {
    try {
      let estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
      if(!estudiante) throw new NotFoundException("Ese estudiante no existe..");
      estudiante.nombre = updateEstudianteDto.nombre ?? estudiante.nombre;
      estudiante.apellidos = updateEstudianteDto.apellidos ?? estudiante.apellidos;
      estudiante.edad = updateEstudianteDto.edad ?? estudiante.edad;
      estudiante.profesion = updateEstudianteDto.profesion ?? estudiante.profesion;
      return estudiante;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  remove(id: number) {
    try {
      const estudiante = this.estudiantes.find(estudiante => estudiante.id === id);
      if(!estudiante) throw new NotFoundException("Ese estudiante no existe..");
      const estudiantesRestantes = this.estudiantes.filter(estudiante => estudiante.id !== id);
      return this.estudiantes = estudiantesRestantes;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }
}
