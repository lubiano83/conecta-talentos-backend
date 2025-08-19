import { BadRequestException, HttpException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { Empresa } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {

  private empresas: Empresa[] = [];

  create(createEmpresaDto: CreateEmpresaDto) {
      try {
        const empresa = this.empresas.find(empresa => empresa.nombre.toLowerCase().trim() === createEmpresaDto.nombre.toLowerCase().trim());
        if(empresa) throw new BadRequestException("Esa empresa ya existe..");
        const empresaCreada = this.empresas.push(new Empresa(this.empresas.length+1, createEmpresaDto.nombre, createEmpresaDto.sitioWeb, createEmpresaDto.tipo ));
        return empresaCreada;
      } catch (error) {
        if(error instanceof HttpException) throw error;
        throw new InternalServerErrorException("Hubo un error en el servidor..");
      }
  }

  findAll() {
      try {
        return this.empresas;
      } catch (error) {
        if(error instanceof HttpException) throw error;
        throw new InternalServerErrorException("Hubo un error en el servidor..");
      }
  }

  findOne(id: number) {
      try {
        const empresa = this.empresas.find(empresa => empresa.id === id);
        if(!empresa) throw new NotFoundException("Esa empresa no existe..");
        return empresa;
      } catch (error) {
        if(error instanceof HttpException) throw error;
        throw new InternalServerErrorException("Hubo un error en el servidor..");
      }
  }

  remove(id: number) {
      try {
        const empresa = this.empresas.find(empresa => empresa.id === id);
        if(!empresa) throw new NotFoundException("Esa empresa no existe..");
        const empresasRestantes = this.empresas.filter(empresa => empresa.id !== id);
        return this.empresas = empresasRestantes;
      } catch (error) {
        if(error instanceof HttpException) throw error;
        throw new InternalServerErrorException("Hubo un error en el servidor..");
      }
  }
}
