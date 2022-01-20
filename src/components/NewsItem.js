import React from "react";

function NewsItem({ data }) {
  return (
    <>
      <a
        className="px-2 rounded-md text-blue-400 hover:text-blue-800"
        href={data.url}
        target="_blank"
        rel="noreferrer"
      >
        <div className="flex flex-col justify-center md:flex-row item-center my-1 gap-10 bg-slate-300 p-4 px-6 rounded-md text-gray-600 cursor-pointer">
          <img
            className="w-full md:w-40 h-32 object-contain md:object-cover"
            src={
              data.urlToImage
                ? data.urlToImage
                : "https://image.cnbcfm.com/api/v1/image/106926995-1628885360355-elon2.jpg?v=1639579996"
            }
            alt=""
          />
          <div>
            <div className="hover:text-white">
              <h1 className="text-xl font-bold  md:max-h-16 overflow-hidden hover:text-white ">
                {data.title}
              </h1>
              <h2 className="text-md font-extralight  ">
                {data.description
                  ? data.description.substring(0, 200)
                  : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, debitis perspiciatis id magnam a molestiae cupiditate incidunt dolor! Repellat nemo illo non in eligendi."}
              </h2>
              <div className="flex justify-between my-2">
                <h3>{new Date(data.publishedAt).toLocaleString()}</h3>
                <h3>{data.author ? data.author : "Pyush Deep from India"}</h3>
              </div>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

export default NewsItem;
