/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, IsBoolean, Min } from 'class-validator'

export class CreateCustomerDto {
  @IsString()
  @IsNotEmpty()
  nombre: string

  @IsString()
  @IsNotEmpty()
  email: string

  @IsNumber()
  @Min(0)
  telefono: number

  @IsString()
  @IsNotEmpty()
  direccion: string

  @IsBoolean()
  @IsNotEmpty()
  estaEliminado: boolean
}
