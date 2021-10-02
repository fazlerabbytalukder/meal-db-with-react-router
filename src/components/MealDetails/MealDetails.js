import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router';

const MealDetails = () => {
    const { mealId } = useParams();
    const [meal, setMeal] = useState([]);
    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMeal(data.meals[0]))
    }, [])

    const { strMeal, strMealThumb, strInstructions } = meal;
    return (
        <div>
            <h1>Meal Details id No Is: {mealId}</h1>
            <Card className='mx-auto' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={strMealThumb} />
                <Card.Body>
                    <Card.Title>{strMeal}</Card.Title>
                    <Card.Text>
                        {strInstructions}
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MealDetails;