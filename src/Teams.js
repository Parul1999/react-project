import React from 'react';
import './style.css'
import {
    Card, CardText, CardBody,
    CardTitle
  } from 'reactstrap';

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
  
                    <Card key={item.id} data-toggle="popover" title= {item.full_name} data-content="{item.city}{item.destination}">
                    <CardBody>
                      <CardTitle id="first" >{item.name}</CardTitle>
                      <CardText id="second">{item.city}</CardText>
                    </CardBody> 
                  </Card>
                  
                  ))}
                
            </div>
        );

    }

}
// https://coreui.io/docs/components/popovers/

export default Teams;