'use client';

import { useState } from 'react';
import Link from "next/link";

import timeAgo from '../lib/time-ago';

import styles from './story.module.css';

export default function Story({
  id,
  title,
  date,
  url,
  user,
  score,
  commentsCount,
}) {
  const { host } = url ? new URL(url) : { host: '#' };
  const [voted, setVoted] = useState(false);

  return (
    <div style={{ margin: '5px 0' }}>
      <div className={styles.title}>
        <span
          style={{
            cursor: 'pointer',
            fontFamily: 'sans-serif',
            marginRight: 5,
            color: voted ? '#ffa52a' : '#ccc',
          }}
          onClick={() => setVoted(!voted)}
        >
          &#9650;
        </span>
        <a href={url}>{title}</a>
        {url && (
          <span className={styles.source}>
            <a href={`http://${host}`}>{host.replace(/^www\./, '')}</a>
          </span>
        )}
      </div>
      <div className={styles.meta}>
        {score} {plural(score, 'point')} by{' '}
        <Link href={`/user?id=${user}`}>{user}</Link>{' '}
        <Link href={`/item?id=${id}`}>
          {timeAgo(new Date(date)) /* note: we re-hydrate due to ssr */} ago
        </Link>{' '}
        |{' '}
        <Link href={`/item?id=${id}`}>
          {commentsCount} {plural(commentsCount, 'comment')}
        </Link>
      </div>
    </div>
  );
}

const plural = (n, s) => s + (n === 0 || n > 1 ? 's' : '');
