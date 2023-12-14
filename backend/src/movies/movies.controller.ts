import { Controller } from '@nestjs/common';
import { Get, UseGuards } from '@nestjs/common/decorators';
import { AuthGuard } from '@nestjs/passport';
import { Movie } from './movies.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  getAllMovies(): Promise<Movie[]> {
    return this.moviesService.getAllMovies();
  }
}
