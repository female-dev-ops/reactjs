import React from 'react';



const BookItem = ({ article }) => {

    return (
      <>
      <div  >
      <>
          {article && (
      <div  id={article._id}>
          <div  component="img"
          src={article.multimedia?.[0]?.url ?
              `https://nytimes.com/${article.multimedia[0].url}` :
              'https://upload.wikimedia.org/wikipedia/commons/4/40/New_York_Times_logo_variation.jpg'
          } alt="news-img" />
          <div>
              <div color="primary" variant="h6">
                  <a href={article.web_url} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                      {article.headline.main}</a>
              </div>
              <div color="textSecondary" variant="subtitle2">
                  {article.byline.original}
              </div>
              <div variant="body2" component="p">
                  {article.snippet}
              </div>
          </div>
      </div>
          )}
          </>
      </div>
      </>
    );
};



export default BookItem;
