import { Test, TestingModule } from '@nestjs/testing'
import { getModelToken } from '@nestjs/mongoose'
import { ProductService } from './product.service'
import { Product, ProductDocument } from './schema/product.schema'
import { ProductController } from './product.controller'
import { Model } from 'mongoose'

const mockProduct = {
  _id: '1',
  name: 'Product 1',
  category: 'Category 1',
  quantity: 100,
  unit: 'pcs',
  threshold: 10,
  price: 20,
  isDeleted: false,
}

const mockProductModel = {
  find: jest.fn().mockReturnValue({
    skip: jest.fn().mockReturnThis(),
    limit: jest.fn().mockReturnThis(),
    exec: jest.fn().mockResolvedValue([mockProduct]),
  }),
  findOne: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockProduct),
  }),
  findByIdAndUpdate: jest.fn().mockReturnValue({
    exec: jest.fn().mockResolvedValue(mockProduct),
  }),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  create: jest.fn().mockImplementation((_dto) => ({
    save: jest.fn().mockResolvedValue(mockProduct),
  })),
  exec: jest.fn().mockResolvedValue(mockProduct),
}

describe('ProductService', () => {
  let service: ProductService
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  let model: Model<ProductDocument>

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        ProductService,
        {
          provide: getModelToken(Product.name),
          useValue: mockProductModel,
        },
      ],
    }).compile()

    service = module.get<ProductService>(ProductService)
    model = module.get<Model<ProductDocument>>(getModelToken(Product.name))
  })

  it('should be defined', () => {
    expect(service).toBeDefined()
  })

  it('should return all products', async () => {
    const products = await service.findAll(1, 1)
    expect(products).toEqual([mockProduct])
  })

  it('should return a single product', async () => {
    const product = await service.findOne('1')
    expect(product).toEqual(mockProduct)
  })

  it('should create a new product', async () => {
    const newProduct = await service.create(mockProduct as any)
    expect(newProduct).toEqual(mockProduct)
  })

  it('should update a product', async () => {
    const updatedProduct = await service.update('1', mockProduct as any)
    expect(updatedProduct).toEqual(mockProduct)
  })

  it('should delete a product', async () => {
    const deletedProduct = await service.delete('1')
    expect(deletedProduct).toEqual(mockProduct)
  })
})
