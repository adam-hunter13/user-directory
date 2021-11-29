import React, { Component } from 'react'
import data from './Data';


class Users extends Component {
    constructor() {
        super();

        this.state = {
             employee : 0,
        };
    }

    nextCard() {
        this.state.employee < 24 ? this.setState({employee : this.state.employee +1 }) : this.state.employee = 25

        // Other way to write the above code
        // if(this.state.employee < 24) {
        //     this.setState({
        //         employee : this.state.employee +1
        // }) 
        // } else {
        //     this.state.employee = 24
        // }
     }

    previousCard() {
        this.state.employee > 0 ? this.setState({employee : this.state.employee -1 }) : this.state.employee = 0

        // Other way to write the above code
        // if(this.state.employee > 0) {
        //     this.setState({
        //         employee : this.state.employee -1
        // }) 
        // } else {
        //     this.state.employee = 0
        // }
           
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
                            {/* <h1 className="id">{this.state.employee}/25</h1> */}
                            <h1 className="id">{data[this.state.employee].id}/25</h1>
                        </div >
                    <div className="text-box">
                        <h1 className="name">{data[this.state.employee].name.first} {data[this.state.employee].name.last}</h1>
                        <h2 className="city-country">From: {data[this.state.employee].city}, {data[this.state.employee].country}</h2>
                        <h2 className="title">Job Title: {data[this.state.employee].title}</h2>
                        <h2 className="employer">Employer: {data[this.state.employee].employer}</h2>
                        <h2 className="favoriteMovies">Favorite Movies:
                            <ol>
                                <li>{data[this.state.employee].favoriteMovies[0]}</li>
                                <li>{data[this.state.employee].favoriteMovies[1]}</li>
                                <li>{data[this.state.employee].favoriteMovies[2]}</li>
                            </ol>
                        </h2>
                        </div>
                    <div className='btn-container'> 
                        <div className="previous-next">
                            <button className="nav-button" onClick={() => this.previousCard()}>&#x276E; Previous</button>
                            <div className="edit">
                                <button className="edit-button">Edit</button>
                                <button className="edit-button">Delete</button>
                                <button className="edit-button">New</button>
                            </div>
                            <button className="nav-button" onClick={() => this.nextCard()}>Next &#x276F;</button>
                        </div>
                </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Users;