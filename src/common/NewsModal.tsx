import React from 'react';
import plug from '../assets/img/spc-plug.jpg';
import Button from './Button';
import { transformDate } from '../features/date/transformDate';

interface IPost {
  dataPost: {
    author: string;
    content: string;
    description: string;
    publishedAt: Date | string;
    source: { id: number | null; name?: string };
    title: string;
    url: string;
    urlToImage: string;
  };
}

function NewsModal(data: IPost) {
  const { title, author, description, publishedAt, url, urlToImage, source } = data.dataPost;

  return (
    <div className="news-modal">
      <div
        className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="newsModal"
        tabIndex={-1}
        aria-labelledby="newsModalLabel"
        aria-hidden={true}
      >
        <div className="modal-dialog modal-dialog-scrollable relative w-auto pointer-events-none">
          <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div className="modal-header flex flex-shrink-0 justify-between p-4 rounded-t-md">
              <div className="text-xl font-medium leading-normal text-gray-800" id="newsModalLabel">
                {title}
              </div>
              <button
                type="button"
                className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body relative">
              <figure className="w-full h-60 overflow-hidden">
                <img src={urlToImage || plug} alt={title} className="w-full h-full object-cover" />
              </figure>
              <div className="my-4 px-4">
                <p className="text-sm">{description}</p>
                <ul className="mt-4 text-sm text-gray-400">
                  <li>Published: {transformDate(publishedAt)}</li>
                  {author ? <li>Author: {author}</li> : ''}
                  {source.name ? <li>Source: {source.name}</li> : ''}
                </ul>
                <div className="mt-4">
                  <a href={url} rel="noopener noreferrer" target="_blank" title="Open full post">
                    <Button theme="primary">Open full post</Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsModal;
