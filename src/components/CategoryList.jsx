import { imgs, categories } from "./../data/data";
import { CategoryCard } from "./CategoryCard";

const [
  imgCiencia,
  imgDeportes,
  imgFilosofia,
  imgGeografia,
  imgHistoria,
  imgLiteratura,
  imgTecnologia,
  imgBasketball,
  imgAnime
] = imgs;

export const CategoryList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center mt-10 gap-4">
      <CategoryCard
        category={categories.ciencia}
        src={imgCiencia}
        alt={`Categoría ${categories.ciencia}`}
        color="from-blue-500 to-purple-500"
      />
      <CategoryCard
        category={categories.deportes}
        src={imgDeportes}
        alt={`Categoría ${categories.deportes}`}
        color="from-orange-500 to-red-500"
      />
      <CategoryCard
        category={categories.filosofia}
        src={imgFilosofia}
        alt={`Categoría ${categories.filosofia}`}
        color="from-zinc-500 to-slate-500"
      />
      <CategoryCard
        category={categories.historia}
        src={imgHistoria}
        alt={`Categoría ${categories.historia}`}
        color="to-amber-500 from-orange-500"
      />
      <CategoryCard
        category={categories.literatura}
        src={imgLiteratura}
        alt={`Categoría ${categories.literatura}`}
        color="from-red-500 to-pink-500"
      />
      <CategoryCard
        category={categories.geografia}
        src={imgGeografia}
        alt={`Categoría ${categories.geografia}`}
        color="from-green-500 to-yellow-500"
      />
      <CategoryCard
        category={categories.tecnologia}
        src={imgTecnologia}
        alt={`Categoría ${categories.tecnologia}`}
        color="from-blue-500 to-cyan-500"
      />
      <CategoryCard
        category={categories.anime}
        src={imgAnime}
        alt={`Categoría ${categories.anime}`}
        color="from-blue-500 to-cyan-500"
      />
      <CategoryCard
        category={categories.basketball}
        src={imgBasketball}
        alt={`Categoría ${categories.basketball}`}
        color="from-blue-500 to-cyan-500"
      />
    </div>
  );
};
