import "./styles.css";
import { buildRgb } from "./buildRgb";
import CardGuts from "./CardGuts";
import { useState, useEffect } from "react";

const getImageList = async () => {
  const response = await fetch("https://picsum.photos/v2/list?page=1&limit=30");
  console.log({ response });
  console.log(response.json);
  return response.json();
};

export default function App() {
  const [apiData, setApiData] = useState(null);

  useEffect(() => {
    console.log("HIT API FOR IMAGE LIST");
    const getSeedData = async () => {
      const data = await getImageList();
      setApiData(data);
    };
    getSeedData();
  }, []);
  const renderList = apiData?.map((item) => (
    <CardGuts key={item.id} mix={item} />
  ));
  return <div className="App">{renderList}</div>;
}
