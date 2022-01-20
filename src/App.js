import { useEffect, useState } from "react";
import News from "./components/News";
import Spinner from "./components/Spinner";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function getNews() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1`
        );

        const responseData = await response.json();

        setData(responseData.articles);

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    }
    getNews();
  }, []);

  const updateCurrentNews = (data) => {
    setData((prevData) => prevData.concat(data));
  };

  return (
    <main className="w-full h-full bg-blue-100">
      <div className="max-w-5xl mx-auto bg-white p-10 border-x-2 border-black">
        <h1 className="text-5xl text-center font-bold my-2 mb-6 text-violet-600">
          News Headlines
        </h1>
        {data.length > 0 && (
          <News data={data} updateCurrentNews={updateCurrentNews} />
        )}
        {loading && <Spinner />}
      </div>
    </main>
  );
}

export default App;
