import React from "react";
import "./App.scss";

var today = new Date();

export interface IDietMealPortion {
  name: string;
  quantity: string;
  extra?: string;
}

export interface IDietMeal {
  name: string;
  ingredients: IDietMealPortion[];
}

export interface IDietDay {
  day: number;
  label: string;
  meals: IDietMeal[];
}

const DietMeals: IDietDay[] = [
  {
    day: 0,
    label: "Domenica",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pasta integrale (media)",
            quantity: "100g",
            extra: "se pasta fresca, +20g",
          },
          {
            name: "Sugo pomodoro & basilico",
            quantity: "150g",
            extra: "può contenere funghi a piacere",
          },
          {
            name: "Salmone ai ferri e limone",
            quantity: "150g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "100g",
          },
          {
            name: "Affettato di tacchino",
            quantity: "80g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 1,
    label: "Lunedì",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pasta integrale (media)",
            quantity: "70g",
            extra: "se pasta fresca, +20g",
          },
          {
            name: "Misto verdure lesse",
            quantity: "150g",
          },
          {
            name: "Parmigiano",
            quantity: "50g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "100g",
          },
          {
            name: "Petto di pollo al limone",
            quantity: "150g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 2,
    label: "Martedì",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pasta integrale (media)",
            quantity: "70g",
            extra: "se pasta fresca, +20g",
          },
          {
            name: "Legumi",
            quantity: "150g",
          },
          {
            name: "Pane di frumento",
            quantity: "30g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "90g",
          },
          {
            name: "Pesce spada",
            quantity: "250g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 3,
    label: "Mercoledì",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pasta integrale (media)",
            quantity: "100g",
            extra: "se pasta fresca, +20g",
          },
          {
            name: "Pomodorini ciliegina",
            quantity: "250g",
          },
          {
            name: "Petto di pollo al limone",
            quantity: "120g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "100g",
          },
          {
            name: "Uova in camicia (2x)",
            quantity: "120g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 4,
    label: "Giovedì",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pasta integrale (media)",
            quantity: "100g",
            extra: "se pasta fresca, +20g",
          },
          {
            name: "Zucca gialla",
            quantity: "150g",
          },
          {
            name: "Tonno sgocciolato",
            quantity: "55g",
            extra: "può essere anche 100g di misto mare / vongole",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "100g",
          },
          {
            name: "Vitello ai ferri",
            quantity: "150g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 5,
    label: "Venerdì",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Riso",
            quantity: "70g",
          },
          {
            name: "Legumi",
            quantity: "180g",
          },
          {
            name: "Pane di frumento",
            quantity: "40g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "90g",
          },
          {
            name: "Merluzzo al pomodoro",
            quantity: "250g",
          },
          {
            name: "Verdure crude miste",
            quantity: "150g",
          },
        ],
      },
    ],
  },
  {
    day: 6,
    label: "Sabato",
    meals: [
      {
        name: "Colazione",
        ingredients: [
          {
            name: "Latte parzialmente scremato",
            quantity: "200g",
          },
          {
            name: "Biscotti integrali",
            quantity: "40g",
          },
        ],
      },
      {
        name: "Seconda Colazione",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Pranzo",
        ingredients: [
          {
            name: "Pane di frumento",
            quantity: "80g",
          },
          {
            name: "Petto di pollo ai ferri",
            quantity: "150g",
          },
          {
            name: "Verdure cotte",
            quantity: "150g",
          },
        ],
      },
      {
        name: "Merenda",
        ingredients: [
          {
            name: "Frutta di stagione",
            quantity: "200g",
          },
        ],
      },
      {
        name: "Cena",
        ingredients: [
          {
            name: "Pizza margherita",
            quantity: "300g",
          },
        ],
      },
    ],
  },
];

function App() {
  const [activeDay, setActiveDay] = React.useState<number>(today.getDay());

  const todaysMeal: IDietDay | undefined = DietMeals.find(
    (meal) => meal.day === activeDay
  );

  return (
    <div
      className="page-main-wrap"
      style={{ backgroundImage: "url('diet.png')" }}
    >
      <div className="page-inner-wrap">
        {todaysMeal && (
          <div>
            <div className="meals-title">
              <div className="meals-title-label">
                Giornata: {todaysMeal.label}
              </div>
              <select
                onChange={(e: any) => {
                  setActiveDay(+e.target.value);
                }}
              >
                {DietMeals.map((meal, index) => (
                  <option
                    selected={meal.day === activeDay}
                    key={index}
                    value={meal.day}
                  >
                    {meal.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="meals-wrapper">
              {todaysMeal.meals.map((meal, index) => (
                <div key={index} className="meal">
                  <div className="meal-name">{meal.name}</div>
                  <div className="meal-ingredients">
                    <ul>
                      {meal.ingredients.map((ingredient, index) => (
                        <li key={index} className="meal-ingredient-main-wrap">
                          <div className="meal-ingredient">
                            <div className="meal-ingredient-name">
                              {ingredient.name}
                            </div>
                            <div className="meal-ingredient-quantity">
                              {ingredient.quantity}
                            </div>
                          </div>
                          {ingredient.extra && (
                            <div className="meal-ingredient-extra">
                              {ingredient.extra}
                            </div>
                          )}
                        </li>
                      ))}
                    </ul>
                    <hr />
                  </div>
                </div>
              ))}
            </div>
            <div className="under-hint">Olio totale 30g, crudo</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
