import React, { useState, useEffect } from "react";
import Card from "../Card/Card";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch the mock JSON data
    fetch('/mockData.json')
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  console.log(data, data.length);
  
  
  if(data.length == 0){
    return (<h1 className="text-xl font-bold flex justify-center items-center my-8">Loading....</h1>);
  } else{
    return (<div className="w-full p-4 flex gap-4 flex-col lg:flex-row flex-wrap justify-center">
      <Card 
      title = "Shraddha Kapoor: The Journey of a Versatile Star"
      description="Shraddha Kapoor is a popular Bollywood actress known for her versatile roles and captivating performances in films like Chhichhore and Stree."
      source="ChatGPT"/>
      {data[0].articles.map((data) => (
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
}

export default Home;
