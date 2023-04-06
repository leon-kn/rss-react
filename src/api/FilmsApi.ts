import { ApiEndpoints } from 'src/enum/ApiEndpoints';
import BaseApi from './BaseApi';
import { FilmsQueryParams } from 'src/enum/FilmsQueryParams';
import { FilmsQueryValues } from 'src/enum/FilmsQueryValues';
import { FilmItem } from 'src/types/FilmItem';

type IFilmsResponse = FilmItem[];

interface IFilmsApi {
  getTopFilms(page: number): Promise<IFilmsResponse>;
}

export default class FilmsApi extends BaseApi implements IFilmsApi {
  async getTopFilms(page: number) {
    try {
      const response = await this.instance.get(ApiEndpoints.TopFilms, {
        params: {
          [FilmsQueryParams.Type]: FilmsQueryValues.TopBest,
          [FilmsQueryParams.Id]: page,
        },
      });
      return response.data.films;
    } catch {
      console.error();
    }
  }
}
