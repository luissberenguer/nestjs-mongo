import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
<<<<<<< HEAD
export class User extends Document{
  @Prop()
  email: string;

  @Prop()
  password: string;

  @Prop()
=======
export class User extends Document {
  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
