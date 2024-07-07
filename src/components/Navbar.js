import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const Navbar = ()=>{

    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid">
            <a className="navbar-brand text-white" href="/"><strong> News Market</strong></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/">About</Link>
                </li>
                <li className="nav-item" text-white>
                  <Link className="nav-link text-white" to="/entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/business">business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/general">general</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/health">health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/science">science</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/sports">sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-white" to="/technology">tech</Link>
                </li>

              </ul>
              <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search Topic" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
      </div>
    )
  }


export default Navbar
