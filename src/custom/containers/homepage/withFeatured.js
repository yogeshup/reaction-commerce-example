import React from "react";
import PropTypes from "prop-types";
import { Query } from "react-apollo";
import featuredQuery from "./featured.gql";


export default (Component) => (
  class WithFeatured extends React.Component {
    static propTypes = {
      shopId: PropTypes.string
    }

    render() {
      const { shop: { _id: shopId } } = this.props; // Or primaryShopId

      if (!shopId) {
        return <Component {...this.props} shouldSkipGraphQL />
      }

      return (
        <Query query={featuredQuery} variables={{ shopId }}>
          {({ error, data, loading }) => {
            if (error) {
              console.log(error)
            }
            if (!loading && data) {
              const { featuredProductsByShop } = data;

              return (
                <Component
                  {...this.props}
                  featuredProducts={featuredProductsByShop.nodes}
                />
              );
            }
            return <Component {...this.props} isLoadingFeatured/>
          }}
        </Query>
      );
    }
  }
);

