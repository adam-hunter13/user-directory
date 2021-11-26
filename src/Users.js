import React, { Component } from 'react'
import data from './Data';


class Users extends Component {
    constructor() {
        super();

        this.state = {
             data : data

        };
    }

    render() {
        return (
            <>
                <div className="container">
                    <h1>Home</h1>
                </div>
                <div className="box">
                    <div className="user-card">
                        <div className='id-count'>
                            <h1 className="id">1/25</h1>
                        </div >
                    <div className="text-box">
                        <h1 className="name">Adam Hunter</h1>
                        <h2 className="city-country">From: Utah, USA</h2>
                        <h2 className="title">Job Title: None</h2>
                        <h2 className="employer">Employer: None</h2>
                        <h2 className="favoriteMovies">Favorite Movies:
                            <ol>
                                <li>Movie 1</li>
                                <li>Movie 2</li>
                                <li>Movie 3</li>
                            </ol>
                        </h2>
                        </div>
                    <div className='btn-container'> 
                        <div className="previous-next">
                            <button className="nav-button">&#x276E; Previous</button>
                            <div className="edit">
                                <button className="edit-button">Edit</button>
                                <button className="edit-button">Delete</button>
                                <button className="edit-button">New</button>
                            </div>
                            <button className="nav-button">Next &#x276F;</button>
                        </div>
                </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Users;