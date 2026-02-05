import "./style.css";
import PlatCard from "./components/PlatCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useEffect, useState } from "react";

function App() {
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
      <div id="root">
        <div className="min-h-screen bg-gradient-to-br from-purple-400 via-pink-400 to-orange-300">
          <Header></Header>
          <div className="bg-white px-4 py-12">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
                Notre Menu Groovy
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
                      tpsPreparation={
                        plat.prepTimeMinutes + plat.cookTimeMinutes
                      }
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
          <Footer></Footer>
        </div>
      </div>
    </>
  );
}

export default App;
