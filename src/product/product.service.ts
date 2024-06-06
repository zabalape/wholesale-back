import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Product } from './schema/product.schema'
@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<Product>,
  ) {}
  async findAll(): Promise<Product[]> {
    return this.productModel.find({ isDeleted: false }).exec()
  }
  async findOne(id: string): Promise<Product> {
    return this.productModel.findOne({ _id: id, isDeleted: false }).exec()
  }
  async create(product: Product): Promise<Product> {
    const newProduct = new this.productModel(product)
    return newProduct.save()
  }
  async update(id: string, product: Product): Promise<Product> {
    return this.productModel
      .findByIdAndUpdate(id, product, { new: true })
      .exec()
  }
  async delete(id: string): Promise<Product> {
    return this.productModel.findById(id, { isDeleted: true })
  }
}
