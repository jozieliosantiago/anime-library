import { useState, useEffect } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import axios from 'axios';

import { ktisuApi } from '../services/kitsuApi';

import styles from '../styles/home.module.scss';
import { MovieCard } from '../components/MovieCard';

import { Anime, GetAnimeResponse } from '../types';
import { AverageRating } from '../components/AverageRating';

interface HomeProps {
  animes: GetAnimeResponse;
}

export default function Home({ animes }: HomeProps) {
  const [mostWatched, setMostWatched] = useState<Anime>({} as Anime);

  useEffect(() => {
    async function getMostWatched() {
      const { data } = await axios.get('https://kitsu.io/api/edge/anime/11');
      const { data: animeData } = data;
      setMostWatched(animeData);
    }

    getMostWatched();
  }, []);

  return (
    <>
      <Head>
        <title>Anime Library</title>
      </Head>

      <main className={styles.homeContainer}>
        <div className={styles.headerHome}>
          <h2>Most Watched</h2>

          <img
            src={mostWatched.attributes?.coverImage.large}
            alt={mostWatched.attributes?.canonicalTitle}
          />

          <div className={styles.featuredAnime}>
            <h1 className={styles.mostWatchedTitle}>
              {mostWatched.attributes?.canonicalTitle}
            </h1>

            <div>
              <AverageRating
                averageRating={mostWatched.attributes?.averageRating}
              />
            </div>

            <Link href={`/anime/11`}>
              <a>More</a>
            </Link>
          </div>
        </div>

        <div className={styles.animeContainer}>
          <h2>Animes</h2>

          <div className={styles.animeContent}>
            {animes.data.length &&
              animes.data.map((anime) => (
                <MovieCard
                  id={anime.id}
                  key={anime.id}
                  attributes={anime.attributes}
                />
              ))}
          </div>
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await ktisuApi.get<GetAnimeResponse>(
    `/anime?page[limit]=20&page[offset]=0`
  );

  const { data: animeList } = data;
  const formattedData = animeList.map((anime) => {
    const {
      id,
      attributes: {
        canonicalTitle,
        startDate,
        averageRating,
        synopsis,
        description,
        ageRatingGuide,
        posterImage,
        coverImage,
        episodeCount,
        youtubeVideoId,
      },
    } = anime;

    return {
      id,
      attributes: {
        canonicalTitle,
        startDate,
        averageRating,
        synopsis,
        description,
        ageRatingGuide,
        posterImage,
        coverImage,
        episodeCount,
        youtubeVideoId,
      },
    };
  });

  const animes = {
    ...data,
    data: formattedData,
  };

  return {
    props: { animes },
  };
};
