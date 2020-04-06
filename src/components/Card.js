import React, { useState, useEffect } from 'react';
import axios from "axios";

const Card = props => {
    const [githubData, setGithubData] = useState([])

    useEffect(() => {

        axios.get(`https://api.github.com/users/DustinThewind505`)
            .then(response => {
                console.log(response.data);
                setGithubData(response.data)
            })
            .catch(error => console.error("axios error"))


    }, [])

    return (
        <section key={githubData.id}>
            <div>
                <h3>{githubData.name}</h3>
                <img src={githubData.avatar_url} />
                <p>Portfolio: {githubData.blog}</p>
            </div>
            <div>
                <h4>{githubData.login}</h4>
                <h5>{githubData.bio}</h5>
                <h6>{githubData.location}</h6>
                <p>Followers: {githubData.followers}</p>
                <p>Following: {githubData.following}</p>
                <p>Repos: {githubData.public_repos}</p>
                <p>Joined: {githubData.created_at}</p>
                <p>Last Updated: {githubData.updated_at}</p>
            </div>

        </section>
    )
}

export default Card;
// https://api.github.com/users/DustinThewind505
// https://api.github.com/users/DustinThewind505/followers