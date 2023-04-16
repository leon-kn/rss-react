import { ApiEndpoints } from 'src/enum/ApiEndpoints';
import BaseApi from './BaseApi';
import { CharacterItem } from 'src/types/CharacterItem';
import { RickQueryParams } from 'src/enum/RickQueryParams';
interface IRickApi {
  getAllCharacters(): Promise<CharacterItem[]>;
  searchCharacters(name: string): Promise<CharacterItem[]>;
  getCharacter(id: number): Promise<CharacterItem>;
}

export default class RickApi extends BaseApi implements IRickApi {
  async getAllCharacters(): Promise<CharacterItem[]> {
    try {
      const response = await this.instance.get(ApiEndpoints.Character);
      return response.data.results;
    } catch {
      throw new Error('Characters are not found');
    }
  }

  async searchCharacters(name: string): Promise<CharacterItem[]> {
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

  async getCharacter(id: number): Promise<CharacterItem> {
    try {
      const response = await this.instance.get(`${ApiEndpoints.Character}/${id}`);
      return response.data;
    } catch {
      throw new Error('Single character is not found');
    }
  }
}
