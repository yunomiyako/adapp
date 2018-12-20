import React, {Component} from 'react';
import {CardElement, injectStripe , CardNumberElement} from 'react-stripe-elements';
import StripeCheckout from 'react-stripe-checkout';
import { Button   } from "semantic-ui-react"

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.onToken = this.onToken.bind(this);
  }

  onToken = (token) => {
        this.props.onToken(token)
    }

  render() {
    const description = this.props.description || "賞品代金と手数料になります"
    const amount = this.props.amount
    const panelLabel = this.props.panelLabel || "開催費"
    const name = this.props.name || "キャンペーンを開く"

    return (
      <div className="checkout">
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_cHW97XSUptbJyk9N6vB1ds6p"
          image="https://stripe.com/img/documentation/checkout/marketplace.png"
          name={name}
          panelLabel={panelLabel}
          amount={amount}
          currency="JPY"
          locale="ja"
          allowRememberMe={false}
          description = {description}
        >
        <Button
        size = "big"
        color = {this.props.color}>これにする</Button>
        </StripeCheckout>
      </div>
    );
  }
}

export default CheckoutForm
