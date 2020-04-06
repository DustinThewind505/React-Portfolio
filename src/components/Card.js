import React, { useState, useEffect } from 'react';
import axios from "axios";

const Card = props => {
    const [githubData, setGithubData] = useState([])

    useEffect(() => {

        axios.get(`https://api.github.com/users/DustinThewind505`)
        .then(response => {
            console.log(response.data);
            setGithubData("ello poppet")
        })
        .catch(error => console.error("axios error"))


    }, [])

    return (
        <div>
            <h1>Ello Poppet</h1>

        </div>
    )
}

export default Card;
// https://api.github.com/users/DustinThewind505
// https://api.github.com/users/DustinThewind505/followers