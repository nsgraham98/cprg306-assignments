"use client";
import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient)
    {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
            const data = await response.json();
            return data.meals || [];
        }
        catch (error) {
            console.error(error.message);
            return [];
        }
    };

export default function MealIdeas({ingredient}) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        loadMealIdeas(ingredient)
    }, 
    [ingredient]);

    const loadMealIdeas = async (ingredient) => {
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
    };

    return (
        <div>
            <h1 className="text-3xl font-bold m-2 text-center">Meal Ideas</h1>
            {meals.length > 0 ? (
                <ul >   
                    {meals.map((meal) => (
                        <li key={meal.idMeal} className="p-2 m-4 bg-slate-900 max-w-sm">
                        <p>{meal.strMeal}</p>   
                        </li>
                    ))}
                </ul> 
                ) : (
                    <p className="p-2 m-4 bg-slate-900 max-w-sm">No meal ideas found for: {ingredient} </p>              
                )}
        </div>
    )
};
