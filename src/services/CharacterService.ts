import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApiEndpoints } from 'src/enum/ApiEndpoints';
import { RickQueryParams } from 'src/enum/RickQueryParams';
import { CharacterItem } from 'src/types/CharacterItem';

interface ResponseCharacter {
  info: object;
  results: CharacterItem[];
}

const characterAPI = createApi({
  reducerPath: 'characterAPI',
  baseQuery: fetchBaseQuery({ baseUrl: ApiEndpoints.BaseUrl }),
  endpoints: (build) => ({
    getCharactersByName: build.query<ResponseCharacter, string>({
      query: (name) => ({
        url: ApiEndpoints.Character,
        params: {
          [RickQueryParams.Name]: name,
        },
      }),
    }),
    getCharacterById: build.query<CharacterItem, number>({
      query: (id) => ({
        url: `${ApiEndpoints.Character}/${id}`,
      }),
    }),
  }),
});

export const { useGetCharacterByIdQuery, useGetCharactersByNameQuery } = characterAPI;

export default characterAPI;
