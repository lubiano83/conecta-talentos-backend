import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmpresasModule } from './empresas/empresas.module';
import { EstudiantesModule } from './estudiantes/estudiantes.module';
import { OfertasLaboralesModule } from './ofertas-laborales/ofertas-laborales.module';
import { PostulacionesModule } from './postulaciones/postulaciones.module';

@Module({
  imports: [EmpresasModule, EstudiantesModule, OfertasLaboralesModule, PostulacionesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
