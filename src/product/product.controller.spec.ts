import { Test, TestingModule } from '@nestjs/testing'
import { ProductController } from './product.controller'
import { ProductService } from './product.service'
import { CreateProductDto } from './dto/create-product.dto'
import { UpdateProductDto } from './dto/update-product.dto'

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

const mockProductService = {
  findAll: jest.fn().mockResolvedValue([mockProduct]),
  findOne: jest.fn().mockResolvedValue(mockProduct),
  create: jest.fn().mockResolvedValue(mockProduct),
  update: jest.fn().mockResolvedValue(mockProduct),
  delete: jest.fn().mockResolvedValue(mockProduct),
}

describe('ProductController', () => {
  let controller: ProductController

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductController],
      providers: [
        {
          provide: ProductService,
          useValue: mockProductService,
        },
      ],
    }).compile()

    controller = module.get<ProductController>(ProductController)
  })

  it('should be defined', () => {
    expect(controller).toBeDefined()
  })

  it('should return all products', async () => {
    const products = await controller.findAll()
    expect(products).toEqual([mockProduct])
  })

  it('should return a single product', async () => {
    const product = await controller.findOne('1')
    expect(product).toEqual(mockProduct)
  })

  it('should create a new product', async () => {
    const createProductDto: CreateProductDto = mockProduct as any
    const newProduct = await controller.create(createProductDto)
    expect(newProduct).toEqual(mockProduct)
  })

  it('should update a product', async () => {
    const updateProductDto: UpdateProductDto = mockProduct as any
    const updatedProduct = await controller.update('1', updateProductDto)
    expect(updatedProduct).toEqual(mockProduct)
  })

  it('should delete a product', async () => {
    const deletedProduct = await controller.delete('1')
    expect(deletedProduct).toEqual(mockProduct)
  })
})
