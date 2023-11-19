// Stories.jsx

import React from 'react';
import Storiescontent from '../Storiescontent';

const Stories = () => {
  return (
    <div className="flex flex-wrap gap-4 px-[80px] py-[40px] justify-between">
      {Storiescontent.map((story) => (
        <div key={story.id} className="shadow-md flex flex-col rounded-md p-2 gap-2 w-[300px] h-auto">
          <img src={story.cardimg} alt="Thumbnail" className="h-[160px] rounded-md" />
          <div className="location bg-blue-200 w-[100px] text-center text-blue-800 font-semibold py-2 rounded-md">
            {story.location}
          </div>
          <h1 className="text-2xl font-bold">{story.thumbnail}</h1>
          <div className="banner-author flex gap-5">
            <img src={story.authorimg} className="w-7 h-7 rounded-full" alt="Author" />
            <h2 className="text-black font-semibold text-md">{story.author}</h2>
            <p className="text-black text-md">{story.postedOn}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stories;
