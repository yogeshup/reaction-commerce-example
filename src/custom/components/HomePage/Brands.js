import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Swiper, Slide } from "react-dynamic-swiper";

const styles = theme => ({});

@withStyles(styles, { name: "SkHome" })
class Brands extends Component {
  static propTypes = {
    classes: PropTypes.object
  };

  static defaultProps = {
    classes: {}
  };

  render() {
    const { classes } = this.props;

    return (
      <>
        <div className="brands-section">
          <div className="top-bar">
            <h1>Brands</h1>

            <select name="brands-select" id="brands-select">
              <option value="">most popular brands</option>
              <option value="">most viewed brands</option>
            </select>

            <a href="#">
              View all brands<span className="half-arrow" />
            </a>
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
                    <img src="/static/images/brands/MAC.png" alt="" className="brand-preview"/>
                   <img src="/static/images/brands/mac-cosmetics.svg" alt="" className="brand-logo"/>
               </Slide>
               <Slide>
                   <img src="/static/images/brands/ghd.png" alt="" className="brand-preview"/>
                   <img src="/static/images/brands/hm_branded_products_ghd_logo.svg" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/yves%20saint%20laurent.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/Yves_Saint_Laurent_Logo.svg" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/tom%20ford.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/Tom-Ford-logo.png" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/kerstase.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/kerastase-logo-png-3.png" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/MAC.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/mac-cosmetics.svg" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/ghd.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/hm_branded_products_ghd_logo.svg" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/yves%20saint%20laurent.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/Yves_Saint_Laurent_Logo.svg" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/tom%20ford.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/Tom-Ford-logo.png" alt="" className="brand-logo"/>
              </Slide>
              <Slide>
                  <img src="/static/images/brands/kerstase.png" alt="" className="brand-preview"/>
                  <img src="/static/images/brands/kerastase-logo-png-3.png" alt="" className="brand-logo"/>
              </Slide>
          </Swiper>
          </div>
        </div>
      </>
    );
  }
}

export default Brands;
