import React, { Component } from 'react';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null
    };
    this.getProductOne = this.getProductOne.bind(this);
    this.backTo = this.backTo.bind(this);
  }

  getProductOne() {
    const { params } = this.props;
    fetch(`api/products/${params.productId}`)
      .then(res => res.json())
      .then(product => {
        this.setState({ product });
      });
  }

  componentDidMount() {
    this.getProductOne();
  }

  backTo() {
    const { setView } = this.props;
    setView('catalog', {});
  }

  render() {
    const { product } = this.state;
    if (product !== null) {
      return (
        <div className="container card-deck d-flex flex-column">
          <div className="row  w-100 d-flex flex-row" id={product.productId}>
            <div className="col-4 w-100 ">
              <p className="text-muted pointer" onClick={() => {
                this.backTo();
              }}> <i className="fas fa-angle-left "></i> Back to catalog </p>
              <img src={product.image} className="detail-img" alt="..." />
            </div>
            <div className="col-7 w-100 card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text text-muted">{`$${(product.price / 100).toFixed(2)}`}</p>
              <p className="card-text">{product.shortDescription}</p>
              <p className="card-text" onClick={() => {
                this.props.addToCard(product);
              }} ><button type="button" className="btn btn-primary">Add to Cart</button></p>

            </div>
          </div>
          <div className="row  w-100">
            <p className="p-5 my-4">{product.longDescription}</p>
          </div>
        </div>
      );

    } else {
      return (
        <div>watsup</div>
      );
    }
  }
}

export default ProductDetails;
