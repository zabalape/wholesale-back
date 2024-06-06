import { IsString, IsNumber, IsNotEmpty, Min } from 'class-validator'
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string
  @IsString()
  @IsNotEmpty()
  category: string
  @IsNumber()
  @Min(0)
  quantity: number
  @IsString()
  @IsNotEmpty()
  unit: string
  @IsNumber()
  @Min(0)
  price: number
}
