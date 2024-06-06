import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'
import { Product } from './schema/product.schema.ts'

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async findAll(): Promise<Product[]> {
    return this.productService.findAll()
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findOne(id)
  }

  @Post()
  async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
    return this.productService.create(createProductDto)
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    return this.productService.update(id, updateProductDto)
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<Product> {
    return this.productService.delete(id)
  }
}
