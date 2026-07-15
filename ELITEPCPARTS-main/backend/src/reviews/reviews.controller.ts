import { Controller, Get, Post, Delete, Param, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { Review } from './review.entity';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('reviews')
@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Get()
  findAll() {
    return this.reviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(+id);
  }

  @Post()
  create(@Body() data: Partial<Review>) {
    return this.reviewsService.create(data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(+id);
  }
}