import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ProductDocument = Product & Document

@Schema()
export class Product extends Document {
  @Prop({ required: true })
  nombre: string

  @Prop({ required: true })
  categoria: string

  @Prop({ required: true })
  cantidad: number

  @Prop({ required: true })
  unidad: string

  @Prop({ required: true })
  umbral: number

  @Prop({ required: true })
  precio: number

  @Prop({ default: false })
  estaEliminado: boolean
}

export const ProductSchema = SchemaFactory.createForClass(Product)
