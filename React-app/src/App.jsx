import { useEffect, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";
import Card from "./Card";
function App() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [show, setShow] = useState([]);
  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setShow(data.results);
      });
  }, []);

  const filterData = () => {
    console.log(search.toLowerCase());
    const filteredData = data.filter(
      (loadeddata) => loadeddata.name.toLowerCase() === search.toLowerCase()
    );
    if (filteredData.length === 0) {
      Swal.fire({
        title: "Sorry",
        text: "No data found this name",
        icon: "error"
      });
      return;
    }
    setShow(filteredData);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-info w-full max-w-xs rounded-3xl"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={filterData}
          className="btn btn-active btn-primary ml-2 rounded-2xl"
        >
          Search
        </button>
      </div>

      <div className="mt-20 grid lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-3 lg:space-y-10 space-y-5 lg:ml-4 md:ml-[200px]">
        {show.map((data) => (
          <Card key={data.name} data={data}></Card>
        ))}
      </div>
    </div>
  );
}

export default App;
