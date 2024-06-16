const Recipe = ({ recipe, handleAdd }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    preparing_time,
    ingredients,
    calories,
  } = recipe;

  return (
    <div>
      <div className="card p-6 border h-full border-[#28282833]">
        <figure>
          <img
            src={recipe_image}
            alt="Shoes"
            className="rounded-xl h-[175px] md:h-[200px] w-full object-cover object-center"
          />
        </figure>
        <div className="card-body p-0 pt-6">
          <h2 className="card-title mb-3 ">{recipe_name}</h2>
          <p className="text-sm lg:text-base text-[#150B2B99]">
            {short_description}
          </p>
          <hr className="my-1" />
          <h2 className="text-[#282828] font-medium">
            Ingredients: {ingredients.length}
          </h2>
          <ul className="text-[#878787] text-sm md:text-base list-disc ml-6">
            <li>{ingredients[0]}</li>
            <li>{ingredients[1]}</li>
            <li>{ingredients[2]}</li>
          </ul>
          <hr className="my-1" />
          <div className="flex items-center gap-5 mb-2 text-[#282828CC]">
            <div className="flex items-center gap-2 md:gap-3">
              <i className="fa-regular fa-clock"></i>
              <p className="text-sm md:text-base">{preparing_time} Min</p>
            </div>
            <div className="flex items-center gap-2 md:gap-3">
              <i className="fa-solid fa-fire-flame-curved"></i>
              <p className="text-sm md:text-base">{calories} Calories</p>
            </div>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleAdd(recipe)}
              className="md:py-3 py-2 bg-[#0BE58A] hover:bg-[#34a073] border-2 border-[#0BE58A] hover:border-[#34a073] text-base md:text-lg duration-300 rounded-full w-full font-bold text-black"
            >
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
