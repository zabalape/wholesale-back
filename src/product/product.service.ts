import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product, ProductDocument } from './schemas/product.schema'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  async findAll(page: number, limit: number): Promise<Product[]> {
    return this.productModel
      .find({ estaEliminado: false })
      .skip((page - 1) * limit)
      .limit(limit)
      .exec()
  }

  async findOne(id: string): Promise<Product> {
    const product = await this.productModel
      .findOne({ _id: id, estaEliminado: false })
      .exec()
    if (!product) {
      throw new NotFoundException(
        `El producto con el ID: ${id}, no se encuentra`,
      )
    }
    return product
  }

  async search(query: string): Promise<Product[]> {
    return this.productModel.find({
      nombre: new RegExp(query, 'i'),
      estaEliminado: false,
    })
  }

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.productModel(createProductDto)
    return newProduct.save()
  }

  async update(
    id: string,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const updatedProduct = await this.productModel
      .findByIdAndUpdate(id, updateProductDto, { new: true })
      .exec()
    if (!updatedProduct) {
      throw new NotFoundException(
        `El producto con el ID: ${id}, no se encuentra`,
      )
    }
    return updatedProduct
  }

  async delete(id: string): Promise<Product> {
    const deletedProduct = await this.productModel
      .findByIdAndUpdate(id, { estaEliminado: true }, { new: true })
      .exec()
    if (!deletedProduct) {
      throw new NotFoundException(
        `El producto con el ID: ${id}, no se encuentra`,
      )
    }
    return deletedProduct
  }
}
