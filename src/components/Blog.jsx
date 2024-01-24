import React from 'react';

const NewsList = ({ title, publishedAt, url, urlToImage }) => {

    

  return (
    
    <div className="p-2">
        <img src={urlToImage} alt={title} className="p8-8 rounded py-2 items-center m-auto h-60 w-full object-cover" />
        <div className="flex flex-col h-full">
            <div className="mb-2">
                <h1 className="font-bold">
                <a href={url}>{title.substring(0, 50)}</a>
                </h1>
            </div>
            <div>
                <p className="text-text">{publishedAt}</p>
            </div>
        </div>
    </div>

  
  );
};

export default NewsList;
