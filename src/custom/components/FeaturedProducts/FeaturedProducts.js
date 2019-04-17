import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import CatalogGrid from "@reactioncommerce/components/CatalogGrid/v1";
import withCatalogItems from "containers/catalog/withCatalogItems";
import track from "lib/tracking/track";
import trackProductClicked from "lib/tracking/trackProductClicked";
import PageLoading from "components/PageLoading";
import PageStepper from "components/PageStepper";
import PageSizeSelector from "components/PageSizeSelector";
import SortBySelector from "components/SortBySelector";
import ProductGridEmptyMessage from "./ProductGridEmptyMessage";
import ProductGrid from "custom/components/ProductGrid";

const styles = (theme) => ({
  filters: {
    justifyContent: "flex-end",
    marginBottom: theme.spacing.unit * 2
  }
});

withCatalogItems
@withStyles(styles, { name: "SkProductGrid" })
@track()
 export default class FeaturedProducts extends Component {
  static propTypes = {
    catalogItems: PropTypes.array,
    catalogItemsPageInfo: PropTypes.object,
    initialGridSize: PropTypes.object,
    isLoadingCatalogItems: PropTypes.bool,
    routingStore: PropTypes.object,
    shop: PropTypes.shape({
      currency: PropTypes.shape({
        code: PropTypes.string.isRequired
      })
    }),
    tag: PropTypes.object,
    uiStore: PropTypes.shape({
      pageSize: PropTypes.number.isRequired,
      setPageSize: PropTypes.func.isRequired,
      setSortBy: PropTypes.func.isRequired,
      sortBy: PropTypes.string.isRequired
    })
  };

  renderFilters() {
    const { classes, catalogItems } = this.props;

    return (
      <Grid container spacing={8} className={classes.filters}>
        <Grid item>
          <PageSizeSelector pageSize={pageSize} onChange={setPageSize} />
        </Grid>
        <Grid item>
          <SortBySelector sortBy={sortBy} onChange={setSortBy} />
        </Grid>
      </Grid>
    );
  }

  @trackProductClicked()
  onItemClick = (event, product) => {} // eslint-disable-line no-unused-vars

  renderMainArea() {
    const { catalogItems, initialSize, isLoadingCatalogItems, pageInfo } = this.props;

    if (isLoadingCatalogItems) return <PageLoading />;

    const products = (catalogItems || []).map((item) => item.node.product);
    if (products.length === 0) return <ProductGridEmptyMessage />;

    return (
      <Fragment>
        <Grid container spacing={24}>
          <CatalogGrid
            initialSize={initialSize}
            onItemClick={this.onItemClick}
            products={products}
            placeholderImageURL="/static/images/placeholder.gif"
            {...this.props}
          />
        </Grid>
        {pageInfo && <PageStepper pageInfo={pageInfo} />}
      </Fragment>
    );
  }

  render() {
    const { catalogItems, currencyCode, initialSize, isLoadingCatalogItems, pageInfo, pageSize,setPageSize, setSortBy, sortBy } = this.props;
    return (
      <>


<div className="featured">
  <div className="featured-1">
    <h1>10 of the best dewy foundations for glowing skin</h1>
    <img
      className="border-image"
      src="/static/images/skin-tones.png"
      alt=""
    />
    <h4>
      Discover our edit of 10 of the best dewy foundations which leave
      the complexion looking naturally radiant, hydrated and healthy.
    </h4>

    <div className="featured-slick-slider">
    <ProductGrid
      catalogItems={catalogItems}
      currencyCode={currencyCode}
      initialSize={initialSize}
      isLoadingCatalogItems={isLoadingCatalogItems}
      pageInfo={pageInfo}
      pageSize={pageSize}
      setPageSize={setPageSize}
      setSortBy={setSortBy}
      sortBy={sortBy}
      slides={5}
      responsive={[
                    {
                        breakpoint: 1440,
                          settings: {
                            slidesToShow: 2
                          },
                    },{
                        breakpoint: 2309,
                          settings: {
                            slidesToShow: 4
                          }
                    },{
                        breakpoint: 1800,
                          settings: {
                            slidesToShow: 3
                          }
                    },{
                        breakpoint: 1600,
                          settings: {
                            slidesToShow: 2
                          }
                    }]
                  }
    />



    </div>
  </div>
  <div className="featured-2">
    <div className="bg1">
      <img
        className="discover-img"
        src="/static/images/best-lightweight-foundations.png"
        alt=""
      />
      <a className="video-thumbnail" href="#">
        <img src="/static/images/poza-video.png" alt="" />
        <div className="tag">Discover</div>
      </a>
      <div className="content-container">
        <h3>Which are the best lightweight coverage foundations?</h3>
        <button className="watch-btn">
          <i className="zmdi zmdi-triangle-down" /> Watch Now
        </button>
      </div>
    </div>
    <div className="buttons-container">
      <a href="" className="black-btn">
        Shop the 10 dewy foundations
      </a>
      <a href="" className="white-btn">
        Shop all foundations
      </a>
    </div>
  </div>
</div>

      </>
    );
  }
}








