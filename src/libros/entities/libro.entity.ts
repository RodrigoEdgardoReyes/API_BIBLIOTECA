import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

// Entidad libros
@Entity("libros")
export class Libro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  anoEdicion: number;

  @Column()
  numPaginas: number;

  @Column({ default: true })
  isActive: boolean;
}
