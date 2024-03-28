import React, { useState, useEffect } from "react";
import FlatItem from "./FlatItem";

const FlatList = () => {
  const [flatData, setFlatData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://raw.githubusercontent.com/Mud0610/Nexathon_proj/main/data.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const jsonData = await response.json();
        setFlatData(jsonData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="section-all-re">
      <div className="container">
        <div className="row">
          {flatData.map((flat, index) => (
            <FlatItem key={index} {...flat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlatList;
