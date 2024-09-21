import { Injectable } from '@nestjs/common';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prestamo } from './entities/prestamo.entity';

@Injectable()
export class PrestamosService {
  constructor(
    @InjectRepository(Prestamo) private readonly prestamoRepository: Repository<Prestamo>,
  ) { }

//  Metodo crear prestamo
  async create(createPrestamoDto: CreatePrestamoDto) {
    try {
      const pres = new Prestamo();
      const prestamo = this.prestamoRepository.create(createPrestamoDto)
      prestamo.fechaPrestamo = new Date();

      await this.prestamoRepository.save(prestamo);

      return{
        ok: true,
        message: 'Prestamo creado con exito',
        status: 201,
      };
    } catch (error) {
      return {
        ok: false,
        message: 'Ocurrio un error al guardar el prestamo',
        status: 500,
      };
    }
  }

  // Metodo obtener todos los prestamos
  async findAll() {
    try {
      // // Verifico si prestamos esta activo
      // const prestamo = await this.prestamoRepository.find({where: { isActive: true } });

// Verifico si prestamos están activos y los incluyo junto con los libros relacionados
const prestamo = await this.prestamoRepository.find({
  where: { isActive: true },
  relations: ['libro'], // Incluir la relación con el modelo Libro
});

      // Verifico si la longitud de prestamo es mayor a cero
      if(prestamo.length > 0){
         // Si es mayor a 0 retornar true, devolver los prestamos con estado 200
         return {ok: true, prestamo, status: 200};
      }

       // Si no se encontro nada retornar mensaje de error y el estado 400
       return {ok: false, message: 'No se encontraron prestamos', status: 400 };


    } catch (error) {
            // Mensaje de error al obtener los prestamos estado 500
            return {
              ok: false,
              message: 'Ocurrio un error al obtener los prestamos',
              status: 500,
            };
      
    }
  }

  findOne(id: number) {
    return `This action returns a #${id} prestamo`;
  }

  update(id: number, updatePrestamoDto: UpdatePrestamoDto) {
    return `This action updates a #${id} prestamo`;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }
}
