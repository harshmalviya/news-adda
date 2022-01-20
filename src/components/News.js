import React, { useState } from "react";
import NewsItem from "./NewsItem";

function News({ data, updateCurrentNews }) {
  const [page, setPage] = useState(2);
  const fetchMoreNews = async () => {
    setPage((prevPage) => prevPage + 1);
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey==${process.env.REACT_APP_NEWS_API_KEY}&page=${page}`
    );

    const responseData = await response.json();

    updateCurrentNews(responseData.articles);
  };

  return (
    <div>
      {data.map((item, index) => (
        <NewsItem key={index} data={item} />
      ))}
      <div className="flex justify-center">
        <button
          className="bg-violet-500 text-white p-2 py-1 hover:bg-red-300 rounded-md"
          onClick={fetchMoreNews}
        >
          More News
        </button>
      </div>
    </div>
  );
}

export default News;
