import { Module } from '@nestjs/common';
import { PacientesController } from './pacientes.controller';

@Module({
  controllers: [PacientesController]
})
export class PacientesModule {}
