import React from 'react';

export function ByName(itemName: string){

    fetch('http://localhost:8080/api/items/name/' + itemName, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
    }).then((response => response.json()))
        .then((json) => {
            console.log(json);
            return json;
        }).catch((error) => {
        console.error(error);
        return error;
    });
}
