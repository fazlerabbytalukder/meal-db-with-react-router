import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import './Meal.css';

const Meal = (props) => {
    const { idMeal, strMeal, strMealThumb, strInstructions } = props.meal;
    const history = useHistory()

    const handleMealClick = () => {
        history.push(`/meal/${idMeal}`);
    }
    return (
        <div>
            <Col>
                <Card className='card-height'>
                    <Card.Img variant="top" src={strMealThumb} />
                    <Card.Body>
                        <Card.Title>{strMeal}</Card.Title>
                        <Card.Text>
                            {strInstructions.slice(0, 200)}
                        </Card.Text>
                    </Card.Body>
                    <Link to={`/meal/${idMeal}`}>Visit</Link>
                    <Link to={`/meal/${idMeal}`}><Button>visit 2</Button></Link>
                    <button onClick={handleMealClick}>visit 3</button>
                </Card>
            </Col>
        </div>
    );
};

export default Meal;