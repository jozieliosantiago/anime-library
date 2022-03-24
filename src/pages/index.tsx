import { useState, useEffect, useCallback } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import { ktisuApi } from '../services/kitsuApi';

import styles from '../styles/home.module.scss';
import { MovieCard } from '../components/MovieCard';

import { Anime, GetAnimeResponse } from '../types';
import { Loading } from '../components/Loading';
import { Carousel } from '../components/Carousel';

interface HomeProps {
  animes: GetAnimeResponse;
  trending: Anime[];
}

export default function Home({ animes, trending }: HomeProps) {
  const { data } = animes;
  const [animeList, setAnimeList] = useState(data);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setOffset(animeList.length);
  }, [animeList]);

  const loadMore = useCallback(async () => {
    setLoading(true);

    try {
      const { data: responseData } = await ktisuApi.get<GetAnimeResponse>(
        `/anime?page[limit]=20&page[offset]=${offset}`
      );
      setAnimeList((currentList) => [...currentList, ...responseData.data]);

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, [offset]);

  useEffect(() => {
    window.onscroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 5) {
        if (!loading) loadMore();
      }
    };
  }, [loadMore, loading]);

  return (
    <>
      <Head>
        <title>Anime Library</title>
      </Head>

      <Carousel carouselElements={trending} />

      <main className={styles.homeContainer}>
        <div className={styles.animeContainer}>
          <h2>Animes</h2>

          <div className={styles.animeContent}>
            {animeList.length &&
              animeList.map((anime) => (
                <MovieCard
                  id={anime.id}
                  key={anime.id}
                  attributes={anime.attributes}
                />
              ))}
          </div>

          {loading && <Loading />}
        </div>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await ktisuApi.get<GetAnimeResponse>(
    `/anime?page[limit]=20&page[offset]=0`
  );

  const {
    data: { data: trending },
  } = await ktisuApi.get<GetAnimeResponse>('trending/anime');

  return {
    props: { animes: data, trending },
  };
};
