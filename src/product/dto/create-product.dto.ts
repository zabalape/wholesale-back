/* eslint-disable prettier/prettier */
import { IsString, IsNumber, IsNotEmpty, IsBoolean, Min } from 'class-validator'

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nombre: string

  @IsString()
  @IsNotEmpty()
  categoria: string

  @IsNumber()
  @Min(0)
  cantidad: number

  @IsString()
  @IsNotEmpty()
  unidad: string

  @IsNumber()
  @Min(0)
  precio: number

  @IsNumber()
  @Min(0)
  umbral: number

  @IsBoolean()
  @IsNotEmpty()
  estaEliminado: boolean
}
