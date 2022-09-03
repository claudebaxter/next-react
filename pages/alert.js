import styles from './alert.module.css';
import cn from 'classnames';
import Layout from '../components/layout';

export default function Alert({ children, type }) {
  return (
    <Layout>
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error',
      })}
    >
      {children}
    </div>
    </Layout>
  );
}