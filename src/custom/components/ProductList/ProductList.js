import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";
import PageLoading from "components/PageLoading";
//import PageStepper from "components/PageStepper";
import PageSizeSelector from "components/PageSizeSelector";
import SortBySelector from "components/SortBySelector";
import Slider from "react-slick";
import Link from "components/Link";

// import ProductGridEmptyMessage from "./ProductGridEmptyMessage";

const styles = (theme) => ({
  filters: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing.unit * 2
  }
});

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button  onClick={onClick} type="button" className="slick-arrow slick-next"> <i className="zmdi zmdi-chevron-right" aria-hidden="true"></i></button>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <button  onClick={onClick} type="button" className="slick-arrow slick-prev"> <i className="zmdi zmdi-chevron-left" aria-hidden="true"></i></button>
  );
}
@withStyles(styles, { name: "SkProductGrid" })
@track()



export default class ProductList extends Component {

  render(){
      const { products, placeholderImageURL, slides, className, responsive } = this.props
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slides,
        slidesToScroll: 1,
        className: className,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: responsive
      };

      const productGrids = products.map(product => {
          let primaryImage = product.primaryImage ? product.primaryImage.URLs.large : placeholderImageURL
         // primaryImage = primaryImage.replace('http://159.65.189.17', 'http://159.65.189.17:3000')
            return <div className="featured-prod" key={product._id}>
                <img src={primaryImage} alt="" />
                <a className="fav-btn" href="#"><i className="fa fa-heart"></i></a>
                <Link className="product-name" to={`/product/${product.slug}/${product._id}`}>{product.title}</Link>

                <div className="product-footer">
                    <div className="price">
                       {product.pricing[0].displayPrice}
                    </div>
                    <div className="rating">
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                        <i className="zmdi zmdi-star"></i>
                    </div>
                </div>
            </div>
      })

      return(
            <Slider {...settings}>

                {productGrids}

            </Slider>
      )
  }
}
