import { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';

import axios from 'axios';

import { Button } from 'antd';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

import { AverageRating } from '../../components/AverageRating';

import { ktisuApi } from '../../services/kitsuApi';
import { Anime, Episodes, PaginationLinks } from '../../types';

import styles from './styles.module.scss';
import { EpisodeDetails } from '../../components/EpisodeDetails';

interface AnimeDetalhesProps {
  anime: Anime;
  categories: string[];
}

export default function AnimeDetalhes({
  anime,
  categories,
}: AnimeDetalhesProps) {
  const [episodes, setEpisodes] = useState<Episodes>({} as Episodes);
  const [pagination, setPagination] = useState<PaginationLinks>(
    {} as PaginationLinks
  );

  const {
    attributes: {
      canonicalTitle,
      coverImage,
      posterImage: { large: posterLargeImage },
      synopsis,
      averageRating,
      startDate,
      youtubeVideoId,
      episodeCount,
    },
    relationships,
  } = anime;

  const {
    episodes: {
      links: { related },
    },
  } = relationships;
  const year = new Date(startDate).getFullYear();
  const large = coverImage?.large;

  useEffect(() => {
    async function getEpisodes() {
      const { data } = await axios.get<Episodes>(related);
      const { links } = data;
      setPagination(links);
      setEpisodes(data);
    }

    getEpisodes();
  }, []);

  async function prevNextPage(prevNext) {
    const { data } = await axios.get<Episodes>(prevNext);
    const { links } = data;

    setEpisodes(data);
    setPagination(links);
  }

  return (
    <>
      <Head>
        <title>Anime Library</title>
      </Head>
      <div className={styles.animeContainer}>
        <div className={styles.animeHeader}>
          <img src={large || posterLargeImage} alt="" />
        </div>

        <div className={styles.animeContent}>
          <div className={styles.contentInfo}>
            <h1>{canonicalTitle}</h1>
            <span className={styles.year}>{year}</span>
            <span className={styles.episodeCount}>
              Total episodes: {episodeCount}
            </span>

            <AverageRating averageRating={averageRating} />

            <div className={styles.categories}>
              {categories.map((categorie) => (
                <span key={categorie}>{categorie}</span>
              ))}
            </div>
          </div>

          <div>
            <h4>Synopsis</h4>
            <p>{synopsis}</p>

            {youtubeVideoId && (
              <div className={styles.videoPreview}>
                <h2>Trailer</h2>

                <iframe
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                ></iframe>
              </div>
            )}

            <div className={styles.episodes}>
              <h2>Episodes</h2>

              {episodes.data?.length &&
                episodes.data.map((episode) => (
                  <EpisodeDetails key={episode.id} episode={episode} />
                ))}

              <div className={styles.pagination}>
                <Button
                  onClick={() => prevNextPage(pagination.prev)}
                  disabled={!pagination?.prev}
                  icon={<LeftOutlined />}
                />
                <Button
                  onClick={() => prevNextPage(pagination.next)}
                  disabled={!pagination?.next}
                  icon={<RightOutlined />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;
  const [
    {
      data: { data: animeData },
    },
    {
      data: { data: animeCategories },
    },
  ] = await Promise.all([
    ktisuApi.get(`/anime/${id}`),
    ktisuApi.get(`/anime/${id}/categories`),
  ]);
  const categories = Object.keys(animeCategories[0].relationships);

  const anime = animeData;

  return {
    props: {
      anime,
      categories,
    },
  };
};
