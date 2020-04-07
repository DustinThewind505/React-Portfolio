import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";



const Card = () => {
    const [githubData, setGithubData] = useState([]);
    const [repoData, setRepoData] = useState([]);

    useEffect(() => {

        axios.get(`https://api.github.com/users/DustinThewind505`)
            .then(response => {
                console.log("Oi Oi Oi");
                setGithubData(response.data)
            })
            .catch(error => console.error("axios error"))


    }, [])

    useEffect(() => {

        fetch("https://api.github.com/users/DustinThewind505/followers")
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setRepoData(response)
            })


    }, [])

    return (
        <Fragment>
            <section key={githubData.id} className="github-section">
                <div>
                    <img src="https://dustinthewind505.github.io/images/github.png" alt="Github logo" />
                </div>
                <div>
                    <h3>{githubData.name}</h3>
                    <img src={githubData.avatar_url} alt="github profile" />
                    <p>Portfolio: <a href={githubData.blog} target="_blank" rel="noopener noreferrer">{githubData.blog}</a></p>
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
            <section>
                <div>
                    {repoData.map(element => (
                        <p>{element.login}</p>
                    ))}
                </div>
    </section>
        </Fragment>
    )
}

export default Card;
// https://api.github.com/users/DustinThewind505
// https://api.github.com/users/DustinThewind505/followers