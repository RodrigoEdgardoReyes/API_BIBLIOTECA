import { PartialType } from '@nestjs/mapped-types';
import { CreatePrestamoDto } from './create-prestamo.dto';

// Falta
export class UpdatePrestamoDto extends PartialType(CreatePrestamoDto) {}
