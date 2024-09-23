import { Libro } from 'src/libros/entities/libro.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

// Entidad prestamo..
@Entity()
export class Prestamo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @ManyToOne(() => Libro)
  libro: Libro;

  @Column()
  fechaPrestamo: Date;

  @Column()
  fechaDevolucion: Date;

  @Column()
  numeroIdentificacion: string;

  @Column()
  correo: string;

  @Column({ default: true })
isActive: boolean;
}
