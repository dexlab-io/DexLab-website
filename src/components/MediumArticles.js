/* global MediumWidget:true */
import React from 'react';
import styled from 'styled-components';

import theme from '../utils/theme';

const Container = styled.section`
  .MediumPostsContainer {
    background-color: #ffffff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .MediumPostsTitle {
    font-family: 'Quicksand', sans-serif;
    font-size: 2.6rem;
    font-weight: 400;
    color: #000000;
    margin: 4% 0 2% 0;
    text-align: center;
  }

  .medium-widget-article__title {
    display: inline-block;
    cursor: pointer;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.6rem !important;
    line-height: 2rem;
    font-weight: 400;
    color: #000000;
    border: none;
    text-decoration: none;
  }

  .medium-widget-article__description {
    color: #000000;
    margin-top: 5px;
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem !important;
    font-weight: 500 !important;
    line-height: 1.3em;
  }
  button.getintouch {
    padding: 10px 22px 12px 22px;
    height: 42px;
    border-radius: 6px;
    background-color: #ffffff;
    font-size: 14px;
    color: #2e3c4f;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    border: none;
    cursor: pointer;
  }

  button.getintouch:hover {
    background-color: #2e3c4f;
    color: #ffffff;
  }

  @media (max-width: 560px) {
    .MediumPostsTitle {
      font-size: 1.8rem;
      margin: 10% 0 5% 0;
    }

    .medium-widget-article__row {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      flex-direction: column !important;
    }
  }
`;

class MediumArticles extends React.Component {
  componentDidMount() {
    MediumWidget.Init({
      renderTo: '#medium-widget',
      params: {
        resource: 'https://medium.com/dexlab-io',
        postsPerLine: 2,
        limit: 2,
        picture: 'big',
        fields: ['description'],
        ratio: 'landscape',
      },
    });
  }

  render() {
    return (
      <Container className="section">
        <div className="container MediumPostsContainer">
          <h1 className="MediumPostsTitle">Check our latest news</h1>
          <div id="articles">
            <div id="medium-widget" />
          </div>
          <button
            className="getintouch"
            onClick={() =>
              (window.location.href = 'https://medium.com/dexlab-io')
            }
            type="button"
          >
            ALL MEDIUM ARTICLES
          </button>
        </div>
      </Container>
    );
  }
}

export default MediumArticles;
