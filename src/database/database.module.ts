import { Module, Global } from '@nestjs/common';
<<<<<<< HEAD
import { MongoClient } from 'mongodb';
import config from '../config';
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
=======
import { ConfigType } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoClient } from 'mongodb';

import config from '../config';
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

// const taskCollection = database.collection('tasks');
// const tasks = await taskCollection.find().toArray();

@Global()
@Module({
  imports: [
<<<<<<< HEAD
=======
    // MongooseModule.forRoot('mongodb://localhost:27017', {
    //   user: 'root',
    //   pass: 'root',
    //   dbName: 'platzi-store',
    // }),
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
    MongooseModule.forRootAsync({
      useFactory: (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName,
        } = configService.mongo;
        return {
          uri: `${connection}://${host}:${port}`,
          user,
          pass: password,
          dbName,
<<<<<<< HEAD
        }
=======
        };
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
      },
      inject: [config.KEY],
    }),
  ],
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
    {
      provide: 'MONGO',
      useFactory: async (configService: ConfigType<typeof config>) => {
        const {
          connection,
          user,
          password,
          host,
          port,
          dbName,
        } = configService.mongo;
        const uri = `${connection}://${user}:${password}@${host}:${port}/?authSource=admin&readPreference=primary`;
        const client = new MongoClient(uri);
        await client.connect();
        const database = client.db(dbName);
        return database;
      },
      inject: [config.KEY],
    },
  ],
<<<<<<< HEAD
  exports: ['API_KEY', 'MONGO'],
=======
  exports: ['API_KEY', 'MONGO', MongooseModule],
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
})
export class DatabaseModule {}
