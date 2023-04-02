import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { ImportProductDto } from './dto/import.dto';
import { Readable } from 'stream';
import * as Papa from 'papaparse';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async import(@UploadedFile() file: Express.Multer.File) {
    const products: ImportProductDto[] = [];
    const stream = Readable.from(file.buffer);
    const csvData = Papa.parse(stream, {
      header: false,
      worker: true,
      delimiter: ',',
      step: function (row) {
        console.log('Row: ', row.data);
        products.push({
          productId: row.data[0],
          level: Number(row.data[1]),
        });
      },
    });
    return this.inventoryService.import(products);
  }

  @Get('products')
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('products/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(+id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
