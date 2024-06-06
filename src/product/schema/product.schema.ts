import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
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
  treshold: string
  @Prop({ required: true })
  price: string
  @Prop({ required: true })
  isDeleted: boolean
}
export const ProductSchema = SchemaFactory.createForClass(Product)
