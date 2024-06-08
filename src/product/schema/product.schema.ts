import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
export type ProductDocument = Product & Document
@Schema()
export class Product extends Document {
  @Prop({ required: true })
  name: string
  @Prop({ required: true })
  category: string
  @Prop({ required: true })
  quantity: number
  @Prop({ required: true })
  unit: string
  @Prop({ required: true })
  threshold: number
  @Prop({ required: true })
  price: string
  @Prop({ required: true })
  isDeleted: boolean
}
export const ProductSchema = SchemaFactory.createForClass(Product)
