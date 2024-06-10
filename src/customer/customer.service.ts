import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Customer, CustomerDocument } from './schema/customer.schema'
import { CreateProductDto } from './dto/create-customer.dto'
import { UpdateProductDto } './dto/update-customer.dto'

@Injectable()
export class ProductService {
    constructor(
        @InjectModel(Customer.name) private productModel: Model<CustomerDocument>,
    ) {}
    async findAll(page: number, limit: number): Promise<Customer[]> {
        return this.productModel
        .find({ estaEliminado: false })
        .skip((page - 1) * limit)
        .limit(limit)
        .exec()
    }
    async findOne(id: string): Promise<Customer> {
        const customer = await this.productModel.
        findOne({ _id: id, estaEliminado: false})
        .exec()
        if(!customer) {
            throw new NotFoundException(
                `El cliente con el ID: ${id}, no se encuentra`
            )
        }
        return customer
    }
    async search(query: string): Promise<Product[]> {
        return this.productModel.find({
            nombre: new RegExp(query, 'i'),
            estaEliminado: false
        })
}