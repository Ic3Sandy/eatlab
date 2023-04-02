import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  Put,
} from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { UpdateInventoryDto } from './dto/update-inventory.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Readable } from 'stream';
import * as Papa from 'papaparse';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Post('import')
  @UseInterceptors(FileInterceptor('file'))
  async import(@UploadedFile() file: Express.Multer.File) {
    const stream = Readable.from(file.buffer);
    Papa.parse(stream, {
      header: false,
      worker: true,
      delimiter: ',',
      step: async (row) => {
        await this.inventoryService.import({
          productId: row.data[0],
          level: Number(row.data[1]),
        });
      },
    });
  }

  @Get('products')
  findAll() {
    return this.inventoryService.findAll();
  }

  @Get('products/:id')
  findOne(@Param('id') id: string) {
    return this.inventoryService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateInventoryDto: UpdateInventoryDto,
  ) {
    return this.inventoryService.update(id, updateInventoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventoryService.remove(+id);
  }
}
