interface PosterImage {
  large: string;
  medium: string;
}

interface CoverImage {
  large: string;
}

interface Relationships {
  episodes: {
    links: {
      related: string;
    };
  };
}

export interface PaginationLinks {
  first: string;
  last: string;
  next: string;
  prev: string;
}

export interface AnimeAttributes {
  canonicalTitle: string;
  startDate: string;
  averageRating: string;
  synopsis: string;
  description: string;
  ageRatingGuide: string;
  posterImage: PosterImage;
  coverImage: CoverImage;
  episodeCount: number;
  youtubeVideoId: string;
}

export interface Anime {
  id: string;
  attributes: AnimeAttributes;
  relationships: Relationships;
}

export type GetAnimeResponse = {
  data: Anime[];
  links: PaginationLinks;
  meta: object;
};

export interface Episode {
  id: string;
  attributes: {
    number: number;
    canonicalTitle: string;
    synopsis: string;
    seasonNumber: number;
    thumbnail: {
      original: string;
    };
  };
}

export interface Episodes {
  data: Episode[];
  links: PaginationLinks;
}
