import React, { Component } from 'react'
import NavBar from './NavBar'
import ImageSlider from './ImageSlider'

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <ImageSlider/>
               <a href="/AdminDashboard">Admin Dashboard</a> 
            </div>
        )
    }
}
