"use client";
import { react, useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient)
    {
        try {
            const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
            // return {idMeal, strMeal, strMealThumb}
            return data
        }
        catch (error) {
            console.error(error.message);
        }
    };

export default function MealIdeas(ingredient) {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        loadMealIdeas(ingredient)
    }, 
    [ingredient]);
    
    // object meal = {
    //     idMeal,
    //     strMeal,
    //     strMealThumb
    // }

    const loadMealIdeas = (ingredient) => {
        setMeals(fetchMealIdeas(ingredient));
    };

    return (
        <div>
            <h1>Meal Ideas</h1>
            {meals.length > 0 ? (
                <ul>   
                    {meals.map((meal) => (
                        <li key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                            <img src={meal.strMealThumb} alt={meal.strMeal} />                     
                        </li>
                    ))}
                </ul> 
                ) : (
                    <p>No meal ideas found</p>
                )}
        </div>
    )



};
