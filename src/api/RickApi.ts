import { ApiEndpoints } from 'src/enum/ApiEndpoints';
import BaseApi from './BaseApi';
import { CharacterItem } from 'src/types/CharacterItem';
// import { RickQueryParams } from 'src/enum/RickQueryParams';

type ICharacterResponse = CharacterItem[];

interface IRickApi {
  getCharacters(/* name: string */): Promise<ICharacterResponse>;
}

export default class RickApi extends BaseApi implements IRickApi {
  async getCharacters(/* name: string */) {
    try {
      const response = await this.instance.get(
        ApiEndpoints.Character /* , {
        params: {
          [RickQueryParams.Name]: name,
        },
      } */
      );
      return response.data.results;
    } catch {
      console.error();
    }
  }
}
