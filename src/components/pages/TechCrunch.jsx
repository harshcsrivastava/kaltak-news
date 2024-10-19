import React, { useState, useEffect } from "react";
import Card from "../Card/Card";
import config from "../../conf/config";

function TechCrunch() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${config.newsApiKey}`
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);
  

  
  return (data.length == 0)? (<h1 className="text-xl font-bold flex justify-center items-center my-8">Loading....</h1>) : (<div className="w-full p-4 flex gap-4 flex-col lg:flex-row flex-wrap justify-center">
    {data.articles.map((data) => (
        <Card
          title={data.title}
          imageURL={data.urlToImage}
          publishedDate={data.publishedAt}
          description={data.description}
          author={data.author}
          source={data.source.name}
          redirect={data.url}
          isvisible={data.source.name}
        />
      ))}
  </div>);
}

export default TechCrunch