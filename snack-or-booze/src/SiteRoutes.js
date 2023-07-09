import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import SnackOrBoozeApi from "./Api";
import Menu from "./FoodMenu";
import Snack from "./FoodItem";
import NewItemForm from "./NewItemForm";


function SiteRoutes(){
const [isLoading, setIsLoading] = useState(true);
const [snacks, setSnacks] = useState([]);
const [drinks, setDrinks] = useState([]);


useEffect(() => {
  async function getSnacks() {
    setIsLoading(true);
    let snacks = await SnackOrBoozeApi.getSnacks();
    setSnacks(snacks);
    setIsLoading(false);
  }
  getSnacks();
}, []);

useEffect(() => {
  async function getDrinks() {
    setIsLoading(true);
    let drinks = await SnackOrBoozeApi.getDrinks();
    setDrinks(drinks);
    setIsLoading(false);
  }
  getDrinks();
}, []);

if (isLoading) {
  return <p>Loading &hellip;</p>;
}

const updateSnacks = (newSnack) => {
  setSnacks(snacks => [...snacks, { ...newSnack, id: newSnack.name }]);
}

const updateDrinks = (newDrink) => {
  setDrinks(drinks => [...drinks, { ...newDrink, id: newDrink.name }]);
}

return (
    <Routes>
    <Route  path="/" element={<Home snacks={snacks} drinks={drinks}/>}>
    </Route>
    <Route  path="/snacks" element={<Menu items={snacks} title="Snacks" url="snacks"/>}>
    </Route>
    <Route path="/snacks/:id" element={<Snack items={snacks} cantFind="/snacks" />}>
    </Route>
    <Route  path="/drinks" element={<Menu items={drinks} title="Drinks" url="drinks" />}>
    </Route>
    <Route path="/drinks/:id" element={<Snack items={drinks} cantFind="/drinks" />}>
    </Route>
    <Route path="/add" element={<NewItemForm updateSnacks={updateSnacks} updateDrinks={updateDrinks} />}>
    </Route>

    <Route path="*" element={<h1 style={{color:"black"}}>Oops page could not be found!</h1>}>
    </Route>
  </Routes>

);

}

export default SiteRoutes;