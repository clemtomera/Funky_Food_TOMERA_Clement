import TagPlat from "./TagPlat";

function PlatCard({
  id,
  titre,
  img,
  categorie,
  kcal,
  tpsPreparation,
  nbPortions,
  tags,
  note,
  nbAvis,
  difficulte,
}) {
  return (
    <a className="group" href={"/dish/" + id} data-discover="true">
      <div
        className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border-4 border-transparent hover:border-pink-400"
        style={{ transform: "rotate(-1deg)" }}
      >
        <div className="relative h-64 overflow-hidden">
          <img
            src={img}
            alt={titre}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded-full font-bold shadow-lg transform rotate-12">
            {difficulte}
          </div>
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-full flex items-center gap-1 shadow-lg">
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
              className="lucide lucide-star size-4 fill-yellow-400 text-yellow-400"
            >
              <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
            </svg>
            <span className="font-bold text-sm">{note}</span>
            <span className="text-xs text-gray-500">({nbAvis})</span>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-2xl font-black mb-3 text-gray-800 group-hover:text-pink-600 transition-colors">
            {titre}
          </h3>
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
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
                className="lucide lucide-clock size-4"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              <span>{tpsPreparation} min</span>
            </div>
            <div className="flex items-center gap-1">
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
                className="lucide lucide-users size-4"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
              </svg>
              <span>{nbPortions} portions</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <TagPlat intitule={tag}></TagPlat>
            ))}
          </div>
          <div className="pt-4 border-t border-gray-200">
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-gray-600">
                {categorie}
              </span>
              <span className="text-sm text-gray-500">{kcal} kcal</span>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default PlatCard;
