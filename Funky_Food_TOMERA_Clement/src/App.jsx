import { useState } from "react";
import "./style.css";
import PlatCard from "./components/PlatCard.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  const [count, setCount] = useState(0);

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
                <PlatCard
                  id="1"
                  titre="Pizza Margherita Classique"
                  img="https://cdn.dummyjson.com/recipe-images/1.webp"
                  categorie="Italienne"
                  kcal="300"
                  tpsPreparation="35"
                  nbPortions="4"
                  tags={["Pizza", "Italienne"]}
                  note="4.6"
                  nbAvis="98"
                  difficulte="Facile"
                ></PlatCard>
                <PlatCard
                  id="2"
                  titre="Tacos Épicés Fiesta"
                  img="https://cdn.dummyjson.com/recipe-images/7.webp"
                  categorie="Mexicaine"
                  kcal="380"
                  tpsPreparation="35"
                  nbPortions="6"
                  tags={["Tacos", "Mexicaine", "Épicé"]}
                  note="4.8"
                  nbAvis="142"
                  difficulte="Facile"
                ></PlatCard>
                <PlatCard
                  id="3"
                  titre="Buddha Bowl Arc-en-Ciel"
                  img="https://cdn.dummyjson.com/recipe-images/2.webp"
                  categorie="Végan"
                  kcal="380"
                  tpsPreparation="50"
                  nbPortions="2"
                  tags={["Sain", "Végan", "Bowl"]}
                  note="4.7"
                  nbAvis="87"
                  difficulte="Moyen"
                ></PlatCard>
                <PlatCard
                  id="4"
                  titre="Spaces cookies"
                  img="https://cdn.dummyjson.com/recipe-images/3.webp"
                  categorie="Gourmand"
                  kcal="450"
                  tpsPreparation="50"
                  nbPortions="2"
                  tags={["Gourmand", "Festif", "Détente"]}
                  note="4.7"
                  nbAvis="87"
                  difficulte="Moyen"
                ></PlatCard>
                <PlatCard
                  id="5"
                  titre="Saumon Grillé Groovy"
                  img="https://cdn.dummyjson.com/recipe-images/5.webp"
                  categorie="Gourmand"
                  kcal="340"
                  tpsPreparation="50"
                  nbPortions="2"
                  tags={["Saumon", "Sain", "Grillé"]}
                  note="4.5"
                  nbAvis="76"
                  difficulte="Facile"
                ></PlatCard>
                <PlatCard
                  id="6"
                  titre="Pâtes Primavera Psychédéliques"
                  img="https://cdn.dummyjson.com/recipe-images/6.webp"
                  categorie="Italienne"
                  kcal="380"
                  tpsPreparation="50"
                  nbPortions="2"
                  tags={["Pâtes", "Végé", "Italienne"]}
                  note="4.4"
                  nbAvis="65"
                  difficulte="Facile"
                ></PlatCard>
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
