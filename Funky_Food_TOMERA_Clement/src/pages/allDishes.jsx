import PlatCard from ".././components/PlatCard.jsx";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllDishes() {
  const [dataPlats, setDataPlats] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    setLoading(true);
    fetch("https://dummyjson.com/recipes")
      .then((response) => response.json())
      .then((data) => {
        setDataPlats(data.recipes);
        setLoading(false);
      });
  }

  return (
    <>
      <Link
        to={`/`}
        className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform"
        data-discover="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-arrow-left size-5"
        >
          <path d="m12 19-7-7 7-7"></path>
          <path d="M19 12H5"></path>
        </svg>
        Retour au Menu
      </Link>
      <div className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
            Tous les plats
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            Des plats sélectionnés qui vont vous époustoufler ! 🌈✨
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {loading ? (
              <div>Chargement</div>
            ) : (
              dataPlats.map((plat) => (
                <PlatCard
                  key={plat.id}
                  id={plat.id}
                  titre={plat.name}
                  img={plat.image}
                  categorie={plat.cuisine}
                  kcal={plat.caloriesPerServing}
                  tpsPreparation={plat.prepTimeMinutes + plat.cookTimeMinutes}
                  nbPortions={plat.servings}
                  tags={plat.tags}
                  note={plat.rating}
                  nbAvis={plat.reviewCount}
                  difficulte={plat.difficulty}
                ></PlatCard>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllDishes;
