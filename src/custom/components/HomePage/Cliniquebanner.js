import React,  { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({

});

@withStyles(styles, { name: "SkHome" })

class CliniqueBanner extends Component {
  static propTypes = {
    classes: PropTypes.object,

  };

  static defaultProps = {
    classes: {}
  };


  render() {
    const { classes } = this.props;

    return (
      <>

          <div className="clinique-banner">
            <div className="clinique-banner-image">
                <img src="/static/images/clinique-banner.jpg" alt=""/>
                <div className="clinique-banner-content">
                    <div className="clinique-banner-btn">New</div>
                    <div className="clinique-banner-title">Customise <br/> don't compromise</div>
                    <div className="clinique-banner-bold-text">Make your moisturiser your own with new Clinique iD</div>
                    <div className="clinique-banner-simple-text">
                        Contains active ingredients that hydrate and treat your skin specific to your concern.
                    </div>
                    <div className="clinique-banner-bold-text">Available in 15 combinations</div>
                    <div className="clinique-banner-price">£ 36</div>
                    <a href="#" className="white-btn">Shop the Clinique iD Collection</a>
                </div>
            </div>
        </div>
      </>
    );
  }
}

export default CliniqueBanner;
