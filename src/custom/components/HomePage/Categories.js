import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { styles } from "./styles";
import { Swiper, Slide } from "react-dynamic-swiper";

@withStyles(styles, { name: "SkOffer" })
class Offers extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <div className="categories">
        <div className="top-bar">
          <h1>Categories</h1>

          <div className="tabs-btns" id="categories-tabs">
            <button className="category-tab active" type="button">
              Womens
            </button>
            <button className="category-tab" type="button">
              Mens
            </button>
          </div>
        </div>

        <div className="scroll-container">
          <Swiper
            swiperOptions={{
              slidesPerView: "auto",
              scrollbar: {
                el: '.swiper-scrollbar',
                draggable: true,
                dragSize: "120px",
                hide: false, 
                snapOnRelease: true,
                lockClass: 'swiper-scrollbar-lock',
                dragClass: 'swiper-scrollbar-drag',
              }
            }}
            scrollBar={true}
            navigation={false}
            wrapperClassName= 'swiper-wrapper'
            pagination={false}
          >
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Makeup.png" alt="" className="brand-preview" />
              <a href="#">Makeup</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Lipsticks.png" alt="" className="brand-preview" />
              <a href="#">Lipsticks</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Hair.png" alt="" className="brand-preview" />
              <a href="#">Hair</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Face.png" alt="" className="brand-preview" />
              <a href="#">Face</a>
            </Slide>
            <Slide>
              <img src="/static/images/categories/Fragrance.png" alt="" className="brand-preview" />
              <a href="#">Fragrance</a>
            </Slide>
          </Swiper>
        </div>
      </div>
    );
  }
}

export default Offers;
