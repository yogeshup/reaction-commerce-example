import React,  { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {styles} from './styles';


@withStyles(styles, { name: "SkOffer" })

class Offers extends Component {
  static propTypes = {
    classes: PropTypes.object,

  };

  static defaultProps = {
    classes: {}
  };


  render() {
    const { classes } = this.props;

    return (

<div className="offers-section">

<div className="column-1">
    <h1>Offers</h1>
    <div className="section-card">
        <img src="/static/images/offers/Cleansing-Treat.png" alt=""/>
        <h2>Cleansing Treat.</h2>
        <p>Receive a <span>FREE</span> bareMinerals Pure Plush Cleansing Foam when you <span>spend &pound;40.</span></p>
        <a href="#" className="white-btn">Shop now</a>
    </div>

    <a href="#" className="black-btn">Shop all Offers</a>
</div>

<div className="column-2">
    <div className="section-card">
        <img src="/static/images/offers/Agifttoyou.png" alt=""/>
        <h2>A gift to you! <img src="/static/images/smile-icon.png" alt=""/></h2>
        <p>Enjoy your <span>FREE</span> Travel Size Avant Skincare Deluxe Hyaluronic Acid Cream when you <span>spend &pound;55</span> on your order.</p>
        <a href="#" className="white-btn">Shop now</a>
    </div>
    <div className="discount-card">
        <div className="overlay-text">
            <img src="/static/images/offers/pink-nail-polish.jpg" alt=""/>
            <p>up to</p>
            <h3>15%</h3>
            <p>Student Discount</p>
            <a href="#" className="white-btn">Shop now</a>
        </div>
    </div>
</div>

<div className="column-3">
    <div className="bg2">
        <img src="/static/images/offers/kerestase.png" alt=""/>
        <div className="bonus-product">
            <div className="overlay-bonus">
                <div className="free">FREE</div>
                <img src="/static/images/offers/AuraBotanica.png" alt=""/>
                <div className="rating">
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                    <i className="zmdi zmdi-star"></i>
                </div>
                <div className="tag">Save up to 30%</div>
            </div>

        </div>
        <h3>Save up to 30% on Kerastase</h3>
        <p>and receive a FREE Full Size Kerastase Aura Botanica Baume Miracle 50ml when you spend &pound;40.</p>

        <a href="#" className="black-btn">Shop Kerastase</a>
    </div>
</div>

</div>
    );
  }
}

export default Offers;
