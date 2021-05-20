import React from 'react';
import coffeepic from '../../pics/coffee.jpg';
import Button from '../main/Button';

class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            source: coffeepic
        }
        this.onClick = this.onClick.bind(this);
    }

    componentDidMount() {
       
        let url = 'https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.item.input + '.png'

        if (this.props.item.input === 'coffee' || this.props.item.input === 'cake' || this.props.item.input === 'cookie' || this.props.item.input === 'croissant'){  
            var request = {method: 'GET'}         
            fetch(url, request)
                .then(res => res.json())
                .then(json => {
                    console.log('json', json);

                this.setState({ source: json.source });
            });
        }
    
        else {
        }
    }

    onClick() {
        this.props.onClickProduct(this.props.item.input, this.props.item.price);
    }

    render(){
       
        return(
            <>
                <Button 
                    className="btn_picture"
                    onClick={this.onClick}>
                    <img  src={this.state.source} alt="product"/>
                   
                </Button>
            </>
        );
    }
}

export default Card;