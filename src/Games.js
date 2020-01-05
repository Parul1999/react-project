import React from 'react';
import './style2.css'

class Games extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            items: [],
            isLoaded: false
        }

    }

   
    componentDidMount() {

        fetch('https://www.balldontlie.io/api/v1/games')
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
                     <li id="first">
                    
{ 
   Array[0] = "Sun",
   Array[1] = "Mon",
  Array[2] = "Tues",
  Array[3] = "Wed",
  Array[4] = "Thur",
  Array[5] = "Fri",
  Array[6] = "Sat",               
  Array[new Date(item.date).getDay()]
}
                    {","}
                    {new Date(item.date).getDate()}
{
 Array[0] = "January",
Array[1] = "February",
Array[2] = "March",
Array[3] = "April",
Array[4] = "May",
Array[5] = "June",    
Array[6] = "July",
Array[7] = "August",
Array[8] = "September",
Array[9] = "October",
Array[10] = "November",
Array[11] = "December",               
Array[new Date(item.date).getMonth()]
}                    
                   {""}{""}
                   {new Date(item.date).getFullYear()}
                   </li>
                  
                   <br/> <li id="second">
                   {new Date(item.date).getHours()}
                   {":"}
                   {new Date(item.date).getMinutes()}
                   {" pm ET"}
                    
                    </li>
                     </ul>
                    ))}
                
            </div>
        );

    }

}

export default Games;