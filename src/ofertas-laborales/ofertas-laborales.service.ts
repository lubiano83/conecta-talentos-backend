import { BadRequestException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateOfertasLaboraleDto } from './dto/create-ofertas-laborale.dto';
import { UpdateOfertasLaboraleDto } from './dto/update-ofertas-laborale.dto';
import { OfertasLaborale } from './entities/ofertas-laborale.entity';
import { EmpresasService } from 'src/empresas/empresas.service';

@Injectable()
export class OfertasLaboralesService {

  private ofertasLaborales: OfertasLaborale[] = [];

  constructor( private readonly empresasService: EmpresasService ) {};

  create(createOfertasLaboraleDto: CreateOfertasLaboraleDto) {
    try {
      const empresas = this.empresasService.findAll();
      const empresaEncontrada = empresas.find(empresa => empresa.nombre.toLowerCase().trim() === createOfertasLaboraleDto.empresa.toLowerCase().trim());
      if(!empresaEncontrada) throw new NotFoundException("Esa empresa no existe..");
      const ofertaLaboralCreada = this.ofertasLaborales.push(new OfertasLaborale(
        this.ofertasLaborales.length+1,
        createOfertasLaboraleDto.descripcion,
        createOfertasLaboraleDto.cargo,
        createOfertasLaboraleDto.region,
        createOfertasLaboraleDto.tipo,
        createOfertasLaboraleDto.estado,
        createOfertasLaboraleDto.empresa
      ))
      return ofertaLaboralCreada;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  findAll(empresa?: string, estado?: string) {
    try {
      const ofertas = ( empresa && estado ) ? this.ofertasLaborales.filter(oferta => oferta.empresa === empresa && oferta.estado === Boolean(estado))
      : empresa ? this.ofertasLaborales.filter(oferta => oferta.empresa === empresa)
      : estado ? this.ofertasLaborales.filter(oferta => oferta.estado === Boolean(estado))
      : this.ofertasLaborales;
      return ofertas;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  findOne(id: number) {
    try {
      const oferta = this.ofertasLaborales.find(oferta => oferta.id === id);
      if(!oferta) throw new NotFoundException("Esa oferta laboral no existe..");
      return oferta;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  update(id: number, updateOfertasLaboraleDto: UpdateOfertasLaboraleDto) {
    try {
      let oferta = this.ofertasLaborales.find(oferta => oferta.id === id);
      if(!oferta) throw new NotFoundException("Esa oferta laboral no existe..");
      oferta.estado = updateOfertasLaboraleDto.estado ?? oferta.estado;
      return oferta;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }

  remove(id: number) {
    try {
      const oferta = this.ofertasLaborales.find(oferta => oferta.id === id);
      if(!oferta) throw new NotFoundException("Esa oferta laboral no existe..");
      const ofertasRestantes = this.ofertasLaborales.filter(oferta => oferta.id !== id);
      return this.ofertasLaborales = ofertasRestantes;
    } catch (error) {
      if(error instanceof HttpException) throw error;
      throw new InternalServerErrorException("Hubo un error en el servidor..");
    }
  }
}
