import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stories from "./components/Stories";
import Button from "./components/Button";
import Trending from "./components/Trending";
import Destination from "./components/Destination";
import Herocontent from "./Herocontent";
import Storiescontent from "./Storiescontent";
import Trendingcontent from "./Trendingcontent";

function App() {
  const leftColumnData = Trendingcontent.slice(0, 3);
  const rightColumnData = Trendingcontent.slice(3, 6);

  return (
    <>
      <Navbar />

      {Herocontent.map((hero) => (
        <Hero key={hero.id} {...hero} />
      ))}
{/*
    
      */}
      <Stories />
      <Button />

      <Trending
        leftColumnData={leftColumnData}
        rightColumnData={rightColumnData}
      />

      <Destination />
    </>
  );
}

export default App;
