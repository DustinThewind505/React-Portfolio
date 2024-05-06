import React, { useState, useEffect, Fragment } from 'react';
import axios from "axios";



const Card = () => {
    const [githubData, setGithubData] = useState([]);
    const [repoData, setRepoData] = useState([]);

    const [input, setInput] = useState('DustinThewind505')

    useEffect(() => {

        axios.get(`https://api.github.com/users/${input}`)
            .then(response => {
                console.log(response);
                setGithubData(response.data)
            })
            .catch(error => console.error("axios error"))


    }, [])

    useEffect(() => {

        fetch(`https://api.github.com/users/${input}/followers`)
            .then(res => res.json())
            .then(response => {
                console.log(response);
                setRepoData(response)
            })


    }, [])

    // const onSearch = user => {
	// 	console.log("app.js onSearch:");
	// 	setState({ ...this.state, userSearch: user });
	// };

    const handleChange = event => {
        event.preventDefault();
        setInput(event.target.value)
    }

    const handleSubmit = event => {
        event.preventDefault();
    }

    console.log(input)
    return (
        <Fragment>
            <section key={githubData.id} className="github-section">
                <div className="github-section-left">
                    <img src="https://dustinthewind505.github.io/images/github.png" alt="Github logo" />
                    <form  onSubmit={handleSubmit}>
                        <label>
                            <input value={input} onChange={handleChange}/>
                        </label>
                        <button type="submit">Submit</button>
                    </form>
                </div>
                <div className="github-profile">
                    <h3>{githubData.name}</h3>
                    <img src={githubData.avatar_url} alt="github profile" />
                    <p>Portfolio: <a href={githubData.blog} target="_blank" rel="noopener noreferrer">{githubData.blog}</a></p>
                </div>
                <div className="github-info">
                    <h4>{githubData.login}</h4>
                    <h5>{githubData.bio}</h5>
                    <h6>{githubData.location}</h6>
                    <p className="github-info-p1">Followers: {githubData.followers}</p>
                    <p className="github-info-p2">Following: {githubData.following}</p>
                    <p className="github-info-p3">Repos: {githubData.public_repos}</p>
                    <p className="github-info-p4">Joined: {githubData.created_at}</p>
                    <p className="github-info-p5">Updated: {githubData.updated_at}</p>
                    <div className="followers-container" data-testid="followers">
                        {repoData.map(element => (
                            <div className="followers" key={element.id}>
                                <p>{element.login}</p>
                                <img src={element.avatar_url} alt={element.login} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Card;
// https://api.github.com/users/DustinThewind505
// https://api.github.com/users/DustinThewind505/followers