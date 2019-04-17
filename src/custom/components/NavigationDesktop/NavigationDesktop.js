import React, { Component } from "react";
import PropTypes from "prop-types";
import { inject } from "mobx-react";
import { withStyles } from "@material-ui/core/styles";

import { NavigationItemDesktop } from "custom/components/NavigationDesktop";

const styles = (theme) => ({

});

@inject("navItems")
@withStyles(styles, { name: "SkNavigation" })
export class NavigationDesktop extends Component {
  static propTypes = {
    classes: PropTypes.object,
    navItems: PropTypes.object
  };

  static defaultProps = {
    classes: {},
    navItems: {}
  };

  renderNavItem(navItem, index) {
    return <NavigationItemDesktop key={index} navItem={navItem} />;
  }

  render() {
    const { navItems, classes } = this.props;

    // if (navItems && navItems.items) {
    //   return  <ul className="menu">{navItems.items.map(this.renderNavItem)}</ul>;
    // }
   return <><ul className="menu">
        <li className="active"><a href="">Women</a></li>
        <li><a href="#">Men</a></li>
        <li><a href="#">Brands</a></li>
        <li><a href="#">Beauty Box</a></li>
        <li><a href="#">Blog</a></li>
    </ul>


</>
    {/* // If navItems.items aren't available, skip rendering of navigation
    // return null; */}
  }
}

export default NavigationDesktop;
