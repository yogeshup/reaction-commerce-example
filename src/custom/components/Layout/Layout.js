import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Header from "custom/components/Header";
import Footer from "custom/components/Footer";

const styles = (theme) => ({
  root: {
    minHeight: "100vh"
  },
  main: {
    flex: "1 1 auto",
    maxWidth: theme.layout.mainContentMaxWidth,
    marginLeft: "auto",
    marginRight: "auto",
    width: "85.66vw"
  },
  article: {

  }
});

@withStyles(styles, { name: "SkLayout" })
class Layout extends Component {
  static propTypes = {
    children: PropTypes.node,
    classes: PropTypes.object,
    shop: PropTypes.shape({
      name: PropTypes.string
    }).isRequired,
    viewer: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes, children, shop, viewer } = this.props;

    return (
      <React.Fragment>


          <Header shop={shop} viewer={viewer} />
           {children}

          <Footer />

      </React.Fragment>
    );
  }
}

export default Layout;
