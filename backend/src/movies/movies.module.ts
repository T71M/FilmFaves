import { Module } from '@nestjs/common';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoviesService } from './movies.service';
import { Movie } from './movies.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  exports: [MoviesService],
  providers: [MoviesService],
  controllers: [MoviesController],
})
export class MoviesModule {}
