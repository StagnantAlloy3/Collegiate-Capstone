import React from 'react';

export function ByName(itemName: string) {

    const [json, setJson] = React.useState([])

    console.log("ByName function called with itemName: " + itemName)

    fetch(`http://localhost:8080/FoodAPI_war_exploded/api/items/by-name?itemname=${itemName}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((response => response.json()))
        .then((json) => {
            setJson(json);
        }).catch((error) => {
        console.error(error);
        return error;
    });
    return json;
}
