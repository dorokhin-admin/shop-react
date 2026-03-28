import React, {Component} from 'react';


class Product extends Component {

    render() {
        return (
            <div>
                {this.props.item.title}
            </div>
        );
    }
}

export default Product;