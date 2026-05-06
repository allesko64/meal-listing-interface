export function MealCard({ meal }) {
  if (!meal) return null;

  const ingredients = Array.from({ length: 20 }, (_, index) => {
    const ingredient = meal[`strIngredient${index + 1}`]?.trim();
    const measure = meal[`strMeasure${index + 1}`]?.trim();

    if (!ingredient) return null;
    return measure ? `${measure} ${ingredient}` : ingredient;
  }).filter(Boolean);

  const tags = meal.strTags
    ? meal
        .strTags
        .split(",")
        .map((tag) => tag.trim())
        .filter(Boolean)
    : [];

  return (
    <article className="card">
      <div className="relative">
        <img className="card__img" src={meal.strMealThumb} alt={meal.strMeal} />

        <div className="overlay-badge-group">
          {meal.strCategory && <span className="badge badge--filled">{meal.strCategory}</span>}
          {meal.strArea && <span className="badge badge--outline">{meal.strArea}</span>}
        </div>
      </div>

      <div className="card__body flex-col">
        <h2 className="title-display text-sm">{meal.strMeal}</h2>

        {tags.length > 0 && (
          <div className="overlay-tag-group is-static">
            {tags.slice(0, 4).map((tag) => (
              <span className="tag" key={`${meal.idMeal}-${tag}`}>
                {tag}
              </span>
            ))}
          </div>
        )}

        <p className="text-muted text-sm line-clamp-6">{meal.strInstructions}</p>

        {ingredients.length > 0 && (
          <div className="flex-col">
            <p className="title-section">Ingredients</p>
            <ul className="text-sm">
              {ingredients.slice(0, 8).map((item, index) => (
                <li key={`${meal.idMeal}-${index}`}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <footer className="card__footer flex-between">
        <div className="flex-center">
          {meal.strYoutube && (
            <a className="btn btn--primary" href={meal.strYoutube} target="_blank" rel="noreferrer">
              Watch
            </a>
          )}
          {meal.strSource && (
            <a className="btn btn--ghost" href={meal.strSource} target="_blank" rel="noreferrer">
              Source
            </a>
          )}
        </div>

        {meal.strYoutube && (
          <a
            className="icon-btn"
            href={meal.strYoutube}
            target="_blank"
            rel="noreferrer"
            aria-label={`Watch ${meal.strMeal} on YouTube`}
          >
            ▶
          </a>
        )}
      </footer>
    </article>
  );
}