import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';

// Modulo de prestamos..
@Module({
  imports: [TypeOrmModule.forFeature([Prestamo])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
})
export class PrestamosModule {}
