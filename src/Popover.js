import React from 'react';
import './popstyle.css'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

class Popover extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false,
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

                    <div key={item.id} id="pop">
                    
                     <b>{item.full_name}</b><br/>
                     {"City:"} {item.city}<br/>
                     {"Conference"} {item.conference}<br/>
                     {"Division"} {item.division}<br/>
                    </div>
                  ))}
                
            </div>
        );

    }

}

export default Popover;