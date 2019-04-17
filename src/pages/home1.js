import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import Helmet from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import withCart from "containers/cart/withCart";
import HomePage from 'custom/components/HomePage'


const styles = (theme) => ({

  root: {}
});

@withCart
@withStyles(styles, { withTheme: true })
export default class Home extends Component {
  static propTypes = {

    classes: PropTypes.object,
    theme: PropTypes.object.isRequired
  };

  state = {};



  render() {
    const { classes, shop } = this.props;
    return (
      <Fragment>
        <Helmet>
          <title>{`Home | ${shop && shop.name}`}</title>
          <meta name="description" content={shop && shop.description} />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.5.0/css/swiper.min.css"/>

        </Helmet>


        <div className={classes.root}>
          <HomePage/>
        </div>
      </Fragment>
    );
  }
}
