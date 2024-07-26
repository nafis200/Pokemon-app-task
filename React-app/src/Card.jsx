import { useEffect, useState } from "react";
const Card = ({ data }) => {
  const { name, url } = data;
  const [imageUrl, setImageUrl] = useState("");
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setImageUrl(data.sprites.front_default))
      .catch(error=>setImageUrl("image link not found"))
  }, [url]);
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img src={imageUrl} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
      </div>
    </div>
  );
};

export default Card;
