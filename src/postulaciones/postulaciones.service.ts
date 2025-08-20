import { HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreatePostulacioneDto } from './dto/create-postulacione.dto';
import { UpdatePostulacioneDto } from './dto/update-postulacione.dto';
import { Postulacione } from './entities/postulacione.entity';
import { EstudiantesService } from 'src/estudiantes/estudiantes.service';
import { OfertasLaboralesService } from 'src/ofertas-laborales/ofertas-laborales.service';

@Injectable()
export class PostulacionesService {

  private postulaciones: Postulacione[] = [];

  constructor(
    private readonly estudientesService: EstudiantesService,
    private readonly ofertasLaboralesService: OfertasLaboralesService
  ) {};

  create(createPostulacioneDto: CreatePostulacioneDto) {
    try {
      const ofertas = this.ofertasLaboralesService.findAll();
      
      const estudiante = this.estudientesService.findOne(createPostulacioneDto.estudiante.id);
      if(!estudiante) throw new NotFoundException("Ese estudiante no existe..");
      const postulacionCreada = this.postulaciones.push(new Postulacione(
        this.postulaciones.length+1,
        createPostulacioneDto.estudiante,
        createPostulacioneDto.estado
      ))
      return postulacionCreada;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  findAll() {
    return `This action returns all postulaciones`;
  }

  findOne(id: number) {
    return `This action returns a #${id} postulacione`;
  }

  update(id: number, updatePostulacioneDto: UpdatePostulacioneDto) {
    return `This action updates a #${id} postulacione`;
  }

  remove(id: number) {
    return `This action removes a #${id} postulacione`;
  }
}
