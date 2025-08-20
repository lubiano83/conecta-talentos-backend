import { Module } from '@nestjs/common';
import { OfertasLaboralesService } from './ofertas-laborales.service';
import { OfertasLaboralesController } from './ofertas-laborales.controller';
import { EmpresasModule } from 'src/empresas/empresas.module';

@Module({
  controllers: [OfertasLaboralesController],
  providers: [OfertasLaboralesService],
  imports: [EmpresasModule],
  exports: [OfertasLaboralesService]
})
export class OfertasLaboralesModule {}
