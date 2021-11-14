import {
  Controller,
  Get,
  Query,
  Param,
  Post,
  Body,
  Put,
  Delete,
  HttpStatus,
  HttpCode,
  Res,
  // ParseIntPipe,
} from '@nestjs/common';
import { Response } from 'express';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

import { ParseIntPipe } from '../../common/parse-int.pipe';
<<<<<<< HEAD
import { MongoIdPipe } from '../../common/mongo-id.pipe';
=======
import { MongoIdPipe } from './../../common/mongo-id.pipe';
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
import {
  CreateProductDto,
  UpdateProductDto,
  FilterProductsDto,
} from '../dtos/products.dtos';
import { ProductsService } from './../services/products.service';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' })
<<<<<<< HEAD
  async getProducts(@Query() params: FilterProductsDto) {
    return await this.productsService.findAll(params);
=======
  getProducts(@Query() params: FilterProductsDto) {
    return this.productsService.findAll(params);
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
  }

  @Get('filter')
  getProductFilter() {
    return `yo soy un filter`;
  }

  @Get(':productId')
  @HttpCode(HttpStatus.ACCEPTED)
<<<<<<< HEAD
  async getOne(@Param('productId', MongoIdPipe) productId: string) {
=======
  getOne(@Param('productId', MongoIdPipe) productId: string) {
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
    return this.productsService.findOne(productId);
  }

  @Post()
  create(@Body() payload: CreateProductDto) {
    return this.productsService.create(payload);
  }

  @Put(':id')
<<<<<<< HEAD
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() payload: UpdateProductDto,
  ) {
=======
  update(@Param('id') id: string, @Body() payload: UpdateProductDto) {
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
    return this.productsService.update(id, payload);
  }

  @Delete(':id')
<<<<<<< HEAD
  delete(@Param('id', MongoIdPipe) id: string) {
=======
  delete(@Param('id') id: string) {
>>>>>>> bd781bd849c066f1fa8aa5f0d06df8f06a947c4a
    return this.productsService.remove(id);
  }
}
