// Trending.jsx
import React from "react";
import Heading from "./Heading";
function Trending({ leftColumnData, rightColumnData }) {
  <Heading />
  const renderColumn = (columnData) => {
    return columnData.map((item) => (
      <div className="tr-card flex gap-4 border-r border-t p-2 h-auto" key={item.id}>
        <div className="tr-card-l w-[250px] rounded-md">
          <img src={item.cardimg} alt="" className="h-full w-full rounded-md" />
        </div>
        <div className="tr-card-r flex flex-col justify-center gap-4">
          <div className="location bg-blue-200 w-[100px] text-center text-blue-800 font-semibold py-2 rounded-md">
            {item.location}
          </div>
          <h1 className="text-2xl font-bold">{item.thumbnail}</h1>
          <div className="banner-author flex gap-5">
            <img src={item.authorimg} className="w-7 h-7 rounded-full" alt="" />
            <h2 className="text-black font-semibold text-md">{item.author}</h2>
            <p className="text-black text-md">{item.postedOn}</p>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
  <Heading />
      <div className="tre-cont1 flex flex-col px-[80px] py-[40px] gap-4">
        <div className="flex flex-row gap-5">
          <div className="flex flex-col w-1/2 gap-8">{renderColumn(leftColumnData)}</div>
          <div className="flex flex-col w-1/2 gap-8">{renderColumn(rightColumnData)}</div>
        </div>
      </div>
    </>
  );
}

export default Trending;
