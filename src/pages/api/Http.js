import React, { useEffect, useState } from 'react';
import Books from '../../components/books/Books';
import Wrapper from '../../components/helpers/Wrapper';
import axios from 'axios';
import LoadingSpinner from '../../components/UI/LoadingSpinner';
const HttpApi = () => {
    const [loading, setLoading] = useState(false);
    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    useEffect(() => {
        const getArticles = async () => {
            setLoading(true);
            const res = await axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=0IGXSR7Osg41PGmHtujHGEFT20Fh3NBQ`);
            setArticles(res.data.response.docs);

            setLoading(false);
        };
        getArticles();

    }, []);

    useEffect(() => {
      setFilteredCountries(
        articles.filter((article) =>
          article.headline.main.toLowerCase().includes(search.toLowerCase())
        )
      );
    }, [search, articles]);

    if (loading === true) {
      return (
        <div className='centered'>
          <LoadingSpinner />
        </div>
      );
    }

    return (
        <Wrapper>
        <input
          type="text"
          placeholder="Search Countries"
          onChange={(e) => setSearch(e.target.value)}
        />
        <Books articles={filteredCountries} />
        </Wrapper >
    );
};

export default HttpApi;
