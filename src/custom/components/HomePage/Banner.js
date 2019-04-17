import React,  { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import {styles} from './styles';


@withStyles(styles, { name: "SkBanner" })

class Banner extends Component {
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
      <div className="banner">
        <div className="trending">
          <img src="/static/images/banner/orig.jpg" alt="" />
          <div className="overlay">
            <div className="tag">Trending</div>
            <h2>Meet your Matte</h2>
            <p>Soft, defined or bold? Discover your perfect matte.</p>
          </div>
          <div className="circle-info img-circle">
            <img src="/static/images/banner/Mac_logo_logotype.png" alt="" />
          </div>
        </div>
        <div className="discover">
          <img
            src="/static/images/banner/le-jour-enfin-compris-que-etais-heureuse.jpg"
            alt=""
          />
          <div className="overlay">
            <div className="tag">Discover</div>
            <h2>New in: The March Beauty Edit</h2>
            <p>
              Spring has nearly sprung so we have put together our edit of the
              most exciting beauty launches this month.
            </p>
          </div>
        </div>
        <div className="exclusive">
          <img src="/static/images/banner/11926231-1384654038384540.jpg" alt="" />
          <div className="overlay">
            <div className="tag">Exclusive</div>
            <h2>March Beauty Box</h2>
            <p>
              Steal the spotlight this month with our Special Edition March
              Beauty Box!
            </p>
          </div>
          <div className="circle-info">
            From <span className="price">&pound;13</span>
          </div>
        </div>
      </div>
    </>
    );
  }
}

export default Banner;
