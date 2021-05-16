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
        // console.log('Card#componentDidMount this.props.item', this.props.item);
       
        let url = 'https://raw.githubusercontent.com/konexio/digitous-assest/main/bakery/' + this.props.item.input + '.png'
        // console.log("url",url);

        
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
            // this.setState({ source: specimen })
        }
        console.log('Card#componentDidMount source', this.state.source)
    }

    onClick() {
        this.props.onClickProduct(this.props.item.input, this.props.item.price);
    }

    render(){
        const { item } = this.props;
        const { source } = this.state;

        // console.log('Card#render item', item)
      
        return(
            <>
            
                <Button 
                    className="btn_picture"
                    onClick={this.onClick}>
                    <img  src={this.state.source} alt="picture"/>
                   
                </Button>
            </>
        );
    }
}

export default Card;