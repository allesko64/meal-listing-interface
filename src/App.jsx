import "./App.css"
import { useMeals } from "./hooks/useMeals"
import { useDarkMode } from "./hooks/useDarkMode"
import { MealCard } from "./components/MealCard"
import { DarkModeToggle } from "./components/DarkModeToggle"

export default function App() {
  const { meals, loading, error } = useMeals()
  const { isDark, toggle } = useDarkMode()

  return (
    <main className="page-wrapper">
      <div className="container flex-col">
        <header className="header-row">
          <div className="flex-col">
            <p className="title-section">Curated collection</p>
            <h1 className="title-display">Recipes</h1>
          </div>
          <DarkModeToggle isDark={isDark} onToggle={toggle} />
        </header>

        {loading && <p className="text-muted">Loading meals...</p>}
        {error && <p className="is-danger">Error: {error}</p>}

        {!loading && !error && meals.length === 0 && (
          <p className="text-muted">No meals can be founded found</p>
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
