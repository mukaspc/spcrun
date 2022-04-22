import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAppDispatch } from '../app/hooks';
import { load } from '../features/loading/loadingSlice';
import Button from '../common/Button';
import NewsModal from '../common/NewsModal';
import plug from '../assets/img/spc-plug.jpg';
import { transformDate } from '../features/date/transformDate';
import { Link } from 'react-router-dom';

interface IAllNews {
  message: string;
  news: INews[];
}

interface INews {
  author: string;
  content: string;
  description: string;
  publishedAt: Date | string;
  source: { id: number | null; name?: string };
  title: string;
  url: string;
  urlToImage: string;
}

function NewsScreen() {
  const dispatch = useAppDispatch();
  const defaultPost: INews = {
    author: '',
    content: '',
    description: '',
    publishedAt: '',
    source: { id: null, name: '' },
    title: '',
    url: '',
    urlToImage: '',
  };
  const defaultNews: IAllNews = {
    message: '',
    news: [],
  };
  const [post, setPost]: [INews, (post: INews) => void] = useState(defaultPost);
  const [news, setNews]: [IAllNews, (news: IAllNews) => void] = useState(defaultNews);

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
      <Link to="/">
        <div className="absolute -top-2 left-5 inline-flex items-center mb-2 text-white bg-green-500 hover:bg-green-600 transition-bg rounded-md px-2 py-[0.1rem]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 fill-current text-white" viewBox="0 0 448 512">
            <path d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z" />
          </svg>
          <span className="ml-2 text-xs">Back to dashboard</span>
        </div>
      </Link>
      <h1 className="text-2xl mb-4">News</h1>
      <ul className="flex flex-wrap">
        {news.news.length ? (
          news.news.map((post, index) => (
            <li key={`${index}_${post.publishedAt}`} className="md:flex w-full md:w-1/2 mb-6 md:pr-8 last-of-type:mb-0">
              <figure className="md:flex w-full md:min-w-[10rem] md:max-w-[10rem] h-40 rounded-md overflow-hidden">
                <img src={post.urlToImage || plug} alt={post.title} className="w-full h-full object-cover" />
              </figure>
              <header className="mt-4 md:mt-0 md:ml-8">
                <span className="block text-sm text-gray-400">Published: {transformDate(post.publishedAt)}</span>
                <h2 className="mt-2 text-lg font-medium leading-tight">{post.title}</h2>
                <div className="mt-4">
                  <Button
                    theme="secondary"
                    optionalClass="py-1"
                    modal={true}
                    bsTarget="#newsModal"
                    onClick={() => setPost(post)}
                  >
                    Details
                  </Button>
                </div>
              </header>
            </li>
          ))
        ) : (
          <li className="text-sm text-gray-400">Loading posts...</li>
        )}
      </ul>

      <NewsModal dataPost={post} />
    </article>
  );
}

export default NewsScreen;
