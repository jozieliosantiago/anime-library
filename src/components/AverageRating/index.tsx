import { Rate } from 'antd';

interface AverageRatingProps {
  averageRating: string;
}

export function AverageRating({ averageRating }: AverageRatingProps) {
  const average = Math.round((Number(averageRating) * 5) / 100);

  return <Rate disabled defaultValue={average} />;
}
