import { Link } from "react-router-dom";
import Header from "../components/Header";

function ErrorPage() {
  return (
    <>
      <Header></Header>
      <div className="bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-black text-center mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500">
            Youpi, c’est une super page
          </h2>
          <p className="text-center text-gray-600 mb-12 text-lg">
            On ne m’a pas trop précisé son contenu donc j’ai décidé de raconter
            ma vie dedans.
          </p>
          <p className="text-center text-gray-600 mb-12 text-lg">
            <a href="https://fr.wikipedia.org/wiki/Point_exclarrogatif">
              Cliquez sur ce texte pour voir un article Wikipédia intéressant
            </a>
            .
          </p>
          <Link
            className="absolute top-8 left-8 bg-white/90 backdrop-blur-sm text-purple-600 px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition-all flex items-center gap-2 shadow-xl hover:scale-105 transform z-10"
            to={`/`}
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
        </div>
      </div>
    </>
  );
}

export default ErrorPage;
