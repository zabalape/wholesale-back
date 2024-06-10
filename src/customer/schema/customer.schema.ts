import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type CustomerDocument = Customer & Document

@Schema()
export class Customer extends Document {
  @Prop({ required: true })
  nombre: string

  @Prop({ required: true })
  email: string

  @Prop({ required: true })
  telefono: number

  @Prop({ required: true })
  direccion: string

  @Prop({ required: true })
  estaEliminado: boolean
}

export const CustomertSchema = SchemaFactory.createForClass(Customer)
