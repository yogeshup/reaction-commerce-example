import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";

import { withStyles } from "@material-ui/core/styles";
import AccountDropdown from "custom/components/AccountDropdown";
import { NavigationDesktop } from "custom/components/NavigationDesktop";
import Link from "components/Link";
import MiniCart from "custom/components/MiniCart";
import {styles} from 'custom/components/Header/styles'


@withStyles(styles, { name: "SkHeader" })
@inject("uiStore")
class Header extends Component {
  static propTypes = {
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    uiStore: PropTypes.shape({
      toggleMenuDrawerOpen: PropTypes.func.isRequired
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  handleNavigationToggleClick = () => {
    this.props.uiStore.toggleMenuDrawerOpen();
  };

  render() {
    const { classes, shop } = this.props;

    return (
      <div className="header">
        <div className="top-header">
          <button className="countries-navigation">
              <img className="left-arrow" src="/static/images/arrow-left.png" alt=""/>
          </button>
          <p className="top-text">
              Free UK shipping on all orders
          </p>
          <button className="countries-navigation">
              <img className="right-arrow" src="/static/images/arrow-right.png" alt=""/>
          </button>
        </div>
        <div className="middle-header">
         <NavigationDesktop />

          <Link route="/" className={classes.logoLink}>
              <img className={classes.logoImg} src="/static/images/logo.png" alt=""/>
          </Link>
          <ul className={classes.utils}>
            <AccountDropdown />

              <li className={classes.utilsItem}><a className={classes.utilsLink} href="#">
                  <img className={classes.utilsIcon} src="/static/images/info.png" alt=""/>
                  Help
              </a></li>
              <li className={classes.utilsItem}><a className={classes.utilsLink} href="#">
                  <img className={classes.utilsIcon} src="/static/images/lang-icon.png" alt=""/>
                  &pound;GBP
              </a></li>
              <MiniCart />
          </ul>
        </div>
        <div className="bottom-header">
        <ul className="submenu">
            <li><a href="#">New In</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">#LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Hair</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Makeup</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">#LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Face</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div></li>
            <li><a href="#">Body</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">#LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Fragrance</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div>
            </li>
            <li><a href="#">Dermalogica</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
              </div></li>
            <li><a href="#">Offers</a>
              <div className="dropdown-menu">
                <ul>
                  <li><a className="submenu-title" href="#">View All</a></li>
                  <li><a className="submenu-title" href="#">New In</a></li>
                  <li><a href="#">Makeup</a></li>
                  <li><a href="#">Skincare</a></li>
                  <li><a href="#">Haircare</a></li>
                  <li><a href="#">Bodycare</a></li>
                  <li><a href="#">Electricals</a></li>
                  <li><a href="#">Fragrance</a></li>
                  <li><a className="submenu-title" href="#">Vegan</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Trending Now</a></li>
                  <li><a href="#">Beauty Studio</a></li>
                  <li><a href="#">Clean Beauty</a></li>
                  <li><a href="#">Korean Beauty</a></li>
                  <li><a href="#">Cruelty Free Beauty</a></li>
                  <li><a href="#">Organic & Natural</a></li>
                  <li><a href="#">Premium Beauty</a></li>
                  <li><a className="submenu-title" href="#">Beauty Box</a></li>
                  <li><a href="#">#LFBEAUTYBOX</a></li>
                  <li><a href="#">Limited editions</a></li>
                  <li><a href="#">Advent Calendar</a></li>
                </ul>
                <ul>
                  <li><a className="submenu-title" href="#">Top Brands</a></li>
                  <li><a href="#">Burberry</a></li>
                  <li><a href="#">Hugo Boss</a></li>
                  <li><a href="#">Morphe</a></li>
                  <li><a href="#">Cover FX</a></li>
                  <li><a href="#">Lime Crime</a></li>
                </ul>
              </div>
            </li>
        </ul>
        <ul className="submenu">
            <li><a href="#">New In</a></li>
            <li><a href="#">Hair</a></li>
            <li><a href="#">Face</a></li>
            <li><a href="#">Body</a></li>
            <li><a href="#">Fragrance</a></li>
            <li><a href="#">Dermalogica</a></li>
            <li><a href="#">Offers</a></li>
        </ul>
        <ul className="submenu">
            <li><a href="#">Hair</a></li>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Face</a></li>
            <li><a href="#">Body</a></li>
            <li><a href="#">Fragrance</a></li>
            <li><a href="#">Dermalogica</a></li>
        </ul>
        <ul className="submenu">
            <li><a href="#">Hair</a></li>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Face</a></li>
            <li><a href="#">Fragrance</a></li>
        </ul>
        <ul className="submenu">
            <li><a href="#">Hair</a></li>
            <li><a href="#">Makeup</a></li>
            <li><a href="#">Body</a></li>
            <li><a href="#">Fragrance</a></li>
        </ul>
          <div className="header-search">
            <input type="search" placeholder="Search brands, items and inspiration"/>
            <button type="submit" className="search-btn">
                <img src="/static/images/search-icon.png" alt=""/>
            </button>
          </div>
          </div>
      </div>
    );
  }
}

export default Header;
