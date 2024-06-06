import { Module } from '@nestjs/common'
import { IngredientesController } from './ingredientes.controller'

@Module({
  controllers: [IngredientesController],
})
export class IngredientesModule {}
