import React from 'react';
import './style.css'
import {Container,Row,Col} from 'react-bootstrap';
class Teams extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

   
    componentDidMount() {

        fetch('https://www.balldontlie.io/api/v1/teams')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    items: json.data,
                    isLoaded: true, 
                })
            }).catch((err) => {
                console.log(err);
            });

    }

    render() {

        const { isLoaded, items } = this.state;

        if (!isLoaded)
            return <div>Loading...</div>;
        return (
            <div className="Team">
              
                    {items.map(item => ( 
                    <ul id="item">
                     <li id="first"><b>{item.name}</b><br/></li>
                     <li> {item.city} </li>
                     </ul>
                    ))}
                
            </div>
        );

    }

}

export default Teams;