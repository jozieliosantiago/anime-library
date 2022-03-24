import { LoadingOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';

export function Loading() {
  return (
    <div className={styles.loading}>
      <LoadingOutlined color="#d80404" />
    </div>
  );
}
