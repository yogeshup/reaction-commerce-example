import React,  { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SharedPropTypes from "lib/utils/SharedPropTypes";
import withCatalogItems from "containers/catalog/withCatalogItems";
import { observer, inject } from "mobx-react";
import trackProductListViewed from "lib/tracking/trackProductListViewed";
import Banner from './Banner';
import Cliniquebanner from './Cliniquebanner';
import Blog from 'custom/components/Blog';
import FeaturedProducts from 'custom/components/FeaturedProducts';
import NewArrival from './NewArrival';
import Brands from './Brands';
import Offers from './Offers';
import Categories from './Categories';

const styles = (theme) => ({
  homepage: {
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing.unit * 2
  }
});


@withStyles(styles, { name: "SkHome" })


@inject("routingStore", "uiStore")
@observer
class HomePage extends Component {
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

  static defaultProps = {
    classes: {}
  };


  render() {
    const { catalogItems, currencyCode, initialSize, isLoadingCatalogItems, pageInfo, pageSize,setPageSize, setSortBy, sortBy } = this.props;

    return (
      <div>
        <Banner/>
        <FeaturedProducts
         catalogItems={catalogItems}
         currencyCode={currencyCode}
         initialSize={initialSize}
         isLoadingCatalogItems={isLoadingCatalogItems}
         pageInfo={pageInfo}
         pageSize={pageSize}
         setPageSize={setPageSize}
         setSortBy={setSortBy}
         sortBy={sortBy}
        />
        <Brands/>
        <Cliniquebanner/>
        <Categories/>
        <Offers/>
        <NewArrival
          catalogItems={catalogItems}
          currencyCode={currencyCode}
          initialSize={initialSize}
          isLoadingCatalogItems={isLoadingCatalogItems}
          pageInfo={pageInfo}
          pageSize={pageSize}
          setPageSize={setPageSize}
          setSortBy={setSortBy}
          sortBy={sortBy}
        />
        <Blog/>

      </div>
    );
  }
}

export default HomePage;
