import { Injectable } from '@nestjs/common';
import { CreateLibroDto } from './dto/create-libro.dto';
import { UpdateLibroDto } from './dto/update-libro.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Libro } from './entities/libro.entity';
import { Repository } from 'typeorm';
import { ok } from 'assert';

@Injectable()
export class LibrosService {
  constructor(
    @InjectRepository(Libro) private readonly libroRepository: Repository<Libro>,
  ) { }

  // Crear libros 
  async create(createLibroDto: CreateLibroDto) {
    try {
      // Creo un nuevo registro de libro.
      const libro = this.libroRepository.create(createLibroDto)
      // lo guardo en la base de datos
      await this.libroRepository.save(libro);

      // Mensaje de exito al agregar un nuevo libro
      return {
        ok: true,
        message: 'Libro creado con exito.',
        status: 201,
      };
    } catch (error) {
      // Mensaje de error si no se guardo el registro del libro
      return{
        ok: false,
        message: 'Ocurrio un error al guardar el libro.',
        status: 500,
      }
    }
  }

  // Metodo para encontrar todos los registros que hay en la tabla 
  async findAll() {
    try {
      const libros = await this.libroRepository.find({ where: { isActive: true } });

      /**
       * verifico si la longitud de libros es mayor a cero si se cumple retorno 
       * verdadero devuelvo los libros con estado 200
       * */
      if (libros.length > 0) {
        return { ok: true, libros, status: 200 };
      }

      /**
       * Si la condicion no se cumple retorno falso con un mensaje de que no se encontraron 
       * libros con estado 404
       */
      return { ok: false, message: 'No se encontraron libros', status: 404 }

    } catch (error) {
      return {
        ok: false,
        message: 'Ocurrio un error al obtener los libros',
        status: 500,
      };
    }
  }

  // Buscar libro por id
  findOne(id: number) {
    return `This action returns a #${id} libro`;
  }

  // Actualizar libro
  update(id: number, updateLibroDto: UpdateLibroDto) {
    return `This action updates a #${id} libro`;
  }

  // Eliminar Libro
  remove(id: number) {
    return `This action removes a #${id} libro`;
  }
}
