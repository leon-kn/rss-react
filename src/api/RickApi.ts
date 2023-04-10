import { ApiEndpoints } from 'src/enum/ApiEndpoints';
import BaseApi from './BaseApi';
import { CharacterItem } from 'src/types/CharacterItem';
import { RickQueryParams } from 'src/enum/RickQueryParams';

type ICharacterResponse = CharacterItem[];

interface IRickApi {
  getAllCharacters(): Promise<ICharacterResponse>;
  getCharacter(id: number): Promise<CharacterItem>;
  searchCharacters(name: string): Promise<ICharacterResponse | CharacterItem>;
}

export default class RickApi extends BaseApi implements IRickApi {
  async getAllCharacters() {
    try {
      const response = await this.instance.get(ApiEndpoints.Character);
      return response.data.results;
    } catch {
      throw new Error('Characters are not found');
    }
  }

  async searchCharacters(name: string) {
    try {
      const response = await this.instance.get(ApiEndpoints.Character, {
        params: {
          [RickQueryParams.Name]: name,
        },
      });
      return response.data.results;
    } catch {
      return [];
    }
  }

  async getCharacter(id: number) {
    try {
      const response = await this.instance.get(`${ApiEndpoints.Character}/${id}`);
      return response.data;
    } catch {
      throw new Error('Single character is not found');
    }
  }
}
