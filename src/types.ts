interface PosterImage {
  large: string;
  medium: string;
  meta: {
    dimensions: {
      large: {
        width: number;
        height: number;
      };
    };
  };
}

interface CoverImage {
  large: string;
  meta: {
    dimensions: {
      large: {
        height: number;
        width: number;
      };
    };
  };
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
  createdAt: string;
  showType: string;
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

export interface IAgeRating {
  rateClass: 'age10' | 'age12' | 'age14' | 'age16' | 'age18' | 'all';
  rateValue: string;
}
