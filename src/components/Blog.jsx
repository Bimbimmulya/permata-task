import React from 'react';

const NewsList = ({ title, publishedAt, url, urlToImage }) => {

    

  return (
    
    <div className="card-blog">
        <img src={urlToImage} alt={title} className="img-blog" />
        <div className="content-card-blog">
            <div className="heading-title-blog">
                <h1>
                <a href={url}>{title.substring(0, 30)}...</a>
                </h1>
            </div>
            <div className="wrap-footer-blog">
                <p>{publishedAt}</p>
            </div>
        </div>
    </div>

  
  );
};

export default NewsList;
