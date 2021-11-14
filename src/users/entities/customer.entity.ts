import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
<<<<<<< HEAD
export class Customer extends Document{
  @Prop()
  name: string;

  @Prop()
=======
export class Customer extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
  lastName: string;

  @Prop()
  phone: string;
}

<<<<<<< HEAD

=======
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
export const CustomerSchema = SchemaFactory.createForClass(Customer);
