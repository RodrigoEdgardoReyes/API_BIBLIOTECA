import { Module } from '@nestjs/common';
import { PrestamosService } from './prestamos.service';
import { PrestamosController } from './prestamos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Prestamo } from './entities/prestamo.entity';
import { Libro } from 'src/libros/entities/libro.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Prestamo, Libro])],
  controllers: [PrestamosController],
  providers: [PrestamosService],
}) 
export class PrestamosModule {}
