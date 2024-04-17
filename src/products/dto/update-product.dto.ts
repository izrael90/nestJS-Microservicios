import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsOptional, IsString, IsUUID } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {
  // @IsString()
  // @IsOptional()
  // name?: string;
  // @IsString()
  // @IsOptional()
  // description?: string;
  // @IsNumber()
  // @IsOptional()
  // @Type(() => Number)
  // price?: number;

  @IsString()
  @IsUUID()
  @IsOptional()
  id?: string;
}
