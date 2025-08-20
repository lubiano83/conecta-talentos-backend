import { Module } from '@nestjs/common';
import { PostulacionesService } from './postulaciones.service';
import { PostulacionesController } from './postulaciones.controller';
import { OfertasLaboralesModule } from 'src/ofertas-laborales/ofertas-laborales.module';

@Module({
  controllers: [PostulacionesController],
  providers: [PostulacionesService],
  imports: [PostulacionesModule, OfertasLaboralesModule]
})
export class PostulacionesModule {}
