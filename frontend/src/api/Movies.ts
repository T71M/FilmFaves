import { Base } from "./Base";

export default class Movies extends Base {
  async getAllMovies() {
    return await this.request.get("/movies/");
  }
}
