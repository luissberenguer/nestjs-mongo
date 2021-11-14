import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

<<<<<<< HEAD
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Order extends Document{
  @Prop()
  date: Date;

  @Prop()
  user: User;

  @Prop()
  products: Product[];
=======
import { Customer } from './customer.entity';

@Schema()
export class Order extends Document {
  @Prop({ type: Date })
  date: Date;

  @Prop({ type: Types.ObjectId, ref: Customer.name, required: true })
  customer: Customer | Types.ObjectId;
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
}

export const OrderSchema = SchemaFactory.createForClass(Order);
