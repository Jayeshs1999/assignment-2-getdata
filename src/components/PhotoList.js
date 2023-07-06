import React, { useEffect, useState } from "react";
import PhotoItem from "../reusableComponents/PhotoItem";
import Spinner from "../reusableComponents/Spinner";

const PhotoList = (props) => {
  const [apiData, setAPIData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    callAPI();
  }, []);

  const callAPI = async () => {
    try {
      const url = `https://jsonplaceholder.typicode.com/photos`;
      setLoading(true);
      let data = await fetch(url);
      let parseData = await data.json();
      setAPIData(parseData);
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };
  return (
    <div className="container">
      {loading && !error && <Spinner />}
      {!loading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {apiData.map((elements) => (
            <div style={{ width: "20%", margin: "20px" }} key={elements?.id}>
              <PhotoItem
                thumbnailUrl={elements?.thumbnailUrl}
                title={elements?.title}
              />
            </div>
          ))}
        </div>
      )}
      {error && (
        <img
          src="https://t4.ftcdn.net/jpg/03/08/92/49/360_F_308924911_jsWAfFOqdSGglzvF7zcNcXIo06eS7Wch.jpg"
          className="card-img-top"
          alt="..."
        />
      )}
    </div>
  );
};

export default PhotoList;
