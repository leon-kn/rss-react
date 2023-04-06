export interface FilmItem {
  countries: Array<{ country: string }>;
  filmId: number;
  filmLength: string;
  genres: Array<{ genre: string }>;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  posterUrlPreview: string;
  rating: string;
  ratingChange: null;
  ratingVoteCount: number;
  year: string;
}
