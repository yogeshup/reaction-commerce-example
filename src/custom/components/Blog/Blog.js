import React,  { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";





class Blog extends Component {
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

     <div className="blog">
    <div className="blog-title">
        <h1>Blog</h1>
        <a href="#">View the Blog <span className="half-arrow"></span></a>
    </div>
    <div className="blog-container">
        <div className="blog-content-item">
            <img src="/static/images/blog/Virtual%20Make%20Over.png" alt=""/>
            <div className="blog-description">
                <h5>LookFantastic Virtual Make Over</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula ligula id erat dapibus.</p>
                <div className="brand-new text-popup">Brand New</div>
                <a href="#" className="white-btn">Read more</a>

            </div>
        </div>
        <div className="blog-content-item">
            <img src="/static/images/blog/Best%20of%20Bobbi%20Brown.png" alt=""/>
            <div className="blog-description">
                <h5>Best of Bobby Brown</h5>
                <p>Discover 10 of the best Bobbi Brown makeup products, as selected by lookfantastic. T</p>
                <a href="#" className="white-btn">Read more</a>

            </div>
        </div>
        <div className="blog-content-item">
            <img src="/static/images/blog/The%205%20minute%20makeup%20look.png" alt=""/>
            <div className="blog-description">
                <h5>The 5 Minute Makeup Look</h5>
                <p>Estee Lauder once famously said "3 minutes is all beauty should ever take."</p>
                <div className="tutorial text-popup">Tutorial</div>
                <a href="#" className="white-btn">Read more</a>

            </div>
        </div>
    </div>
</div>
    </>
    );
  }
}

export default Blog;
