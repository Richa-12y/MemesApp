import React, { useEffect, useState } from "react";
import Card from "../../comoponents/Card";
import { fetchMemeData } from "../../api/memesApi";

const Home = () => {
  const [details, setDetails] = useState([]);
  useEffect(() => {
    fetchMemeData().then((memes) => setDetails(memes.data.memes));
  }, []);
  console.log(details);

  return (
    <div className="card-all-conatiner">
      {details.map((el, index) => (
        <Card key={el.id} imageUrl={el.url} name={el.name} count={index + 1} />
      ))}
    </div>
  );
};

export default Home;
