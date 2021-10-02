import React, { useEffect, useState } from "react";
import { Form, Row } from "react-bootstrap";
import Meal from "../Meal/Meal";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState([]);

    const handleSearchField = (event) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    };

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => setMeals(data.meals));
    }, [searchText]);

    return (
        <div>
            <Form>
                <Form.Group
                    className="mb-3 w-25 text-center mx-auto"
                    controlId="formBasicEmail"
                >
                    <Form.Control
                        onChange={handleSearchField}
                        type="text"
                        placeholder="Enter-meal"
                    />
                </Form.Group>
            </Form>
            <div className='container'>
                <Row xs={1} md={3} className="g-4">
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
                </Row>
            </div>
        </div>
    );
};

export default Meals;
