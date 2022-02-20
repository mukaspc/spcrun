import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../app/hooks';
import { load } from '../features/loading/loadingSlice';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

interface IAllNews {
  message: string;
  news: INews[];
}

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: Date | string;
  source: { id: number | null; name: string };
  title: string;
  url: string;
  urlToImage: string;
}

function NewsScreen() {
  const dispatch = useAppDispatch();
  const defaultNews: IAllNews = {
    message: '',
    news: [],
  };
  const [news, setNews]: [IAllNews, (news: IAllNews) => void] = useState(defaultNews);

  const transformDate = (date: string | Date): string => {
    let newDate = '';
    const dateObject = new Date(date);

    newDate = `${dateObject.getDate()}/${dateObject.getMonth()}/${dateObject.getFullYear()}`;
    return newDate;
  };

  useEffect(() => {
    dispatch(load(false));
    axios
      .request({
        method: 'GET',
        url: 'https://current-news.p.rapidapi.com/news/sport',
        headers: {
          'x-rapidapi-host': process.env.REACT_APP_RAPID_NEWS_HOST as string,
          'x-rapidapi-key': process.env.REACT_APP_RAPID_NEWS_KEY as string,
        },
      })
      .then((response) => {
        setNews(response.data);
        dispatch(load(false));
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <article>
      <h1 className="text-2xl mb-4">News</h1>
      <ul>
        {news.news.length ? (
          news.news.map((post, index) => (
            <li key={`${index}_${post.publishedAt}`} className="sm:flex mb-6 last-of-type:mb-0">
              <figure className="sm:flex w-full sm:max-w-[14rem] h-40 rounded-md overflow-hidden">
                <img src={post.urlToImage} alt={post.title} className="w-full h-full object-cover" />
              </figure>
              <header className="mt-4 sm:mt-0 sm:ml-8">
                <span className="block text-sm text-gray-400">Published: {transformDate(post.publishedAt)}</span>
                <h2 className="mt-2 text-lg font-medium leading-tight">{post.title}</h2>
                <span className="block text-sm">{post.description}</span>
                <div className="mt-4">
                  <Link to="/">
                    <Button theme="secondary" optionalClass="py-1">
                      Read more
                    </Button>
                  </Link>
                </div>
              </header>
            </li>
          ))
        ) : (
          <li className="text-sm text-gray-400">Loading posts...</li>
        )}
      </ul>
    </article>
  );
}

export default NewsScreen;
