import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { CustomerModule } from './customer/customer.module'
import { ProductModule } from './product/product.module'
import { IngredientesModule } from './ingredientes/ingredientes.module'
import { MercadoPagoModule } from './mercado-pago/mercado-pago.module'
import { OrdenModule } from './orden/orden.module'
import { OrderItemModule } from './order-item/order-item.module'
import { RecetaModule } from './receta/receta.module'
import { PaymentStatusModule } from './payment-status/payment-status.module'
import { SupplierModule } from './supplier/supplier.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    CustomerModule,
    ProductModule,
    IngredientesModule,
    MercadoPagoModule,
    OrdenModule,
    OrderItemModule,
    RecetaModule,
    PaymentStatusModule,
    SupplierModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
