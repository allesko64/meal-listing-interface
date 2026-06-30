import { useState, useEffect } from "react"
import "./App.css"
import { useMeals } from "./hooks/useMeals"
import { MealCard } from "./components/MealCard"

export default function App() {
  const { meals, loading, error } = useMeals()
  const [theme, setTheme] = useState("dark")

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
  }, [theme])

  return (
    <main className="page-wrapper">
      <div className="container flex-col">
        <header className="flex-between">
          <div className="flex-col">
            <p className="title-section">Curated collection</p>
            <h1 className="title-display">Recipes</h1>
          </div>
          <button
            className="btn btn--ghost"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
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
