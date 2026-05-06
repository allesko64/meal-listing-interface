import "./App.css"
import { useMeals } from "./hooks/useMeals"
import { MealCard } from "./components/MealCard"

export default function App() {
  const { meals, loading, error } = useMeals()

  return (
    <main className="page-wrapper">
      <div className="container flex-col">
        <header className="flex-col">
          <p className="title-section">Curated collection</p>
          <h1 className="title-display">Recipes</h1>
        </header>

        {loading && <p className="text-muted">Loading meals...</p>}
        {error && <p className="is-danger">Error: {error}</p>}

        {!loading && !error && meals.length === 0 && (
          <p className="text-muted">No meals found</p>
        )}

        {!loading && meals.length > 0 && (
          <section className="grid-3">
            {meals.map((meal) => (
              <MealCard meal={meal} key={meal.idMeal || meal.id} />
            ))}
          </section>
        )}
      </div>
    </main>
  )
}
