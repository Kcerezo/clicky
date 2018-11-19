import React, { Component } from 'react';
import Score from './score';
// import Score from './scored';

const shuffleArray = arr => (
    arr
      .map(a => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map(a => a[1]) 
);

const initialPups = [
    {
        name: 'one',
        img: '/images/one.jpeg',
        clicked: false
    },
    {
        name: 'lab',
        img: '/images/two.jpeg',
        clicked: false
    },
    {
        name: 'three',
        img: '/images/three.jpg',
        clicked: false
    },
    {
        name: 'four',
        img: '/images/four.jpeg',
        clicked: false
    },
    {
        name: 'five',
        img: '/images/five.jpg',
        clicked: false
    },
    {
        name: 'six',
        img: '/images/six.jpg',
        clicked: false
    },
    {
        name: 'seven',
        img: '/images/seven.jpeg',
        clicked: false
    },
    {
        name: 'eight',
        img: '/images/eight.jpg',
        clicked: false
    },
    {
        name: 'nine',
        img: '/images/nine.jpg',
        clicked: false
    },
    {
        name: 'ten',
        img: '/images/ten.jpg',
        clicked: false
    },
    {
        name: 'eleven',
        img: '/images/eleven.jpg',
        clicked: false
    },
    {
        name: 'twelve',
        img: '/images/twelve.jpg',
        clicked: false
    },
    
]

export default class Board extends Component {

    constructor(props){
        super(props);

        this.state = {
            user: {
                score: 0 
            },
            puppies: shuffleArray( initialPups )
        };
    }

    onPupsClick = ( index ) =>{
        if( !this.state.puppies[index].clicked ){
            this.setState({
                puppies: shuffleArray( this.state.puppies.map( (puppies, current) =>  {
                    return ( current === index ) ? { ...puppies, clicked:true } : puppies
                })),
                user: {
                    ...this.state.user,
                    score: this.state.user.score + 1
                }
            });
           
        } else {
            this.setState({
                puppies: shuffleArray(this.state.puppies.map( puppies => { return { ...puppies, clicked : false } })),
                user: {
                    ...this.state.user,
                    score: 0
                }
            });
        
        }
        
    }

    render(){
        return (
            <div>
                <Score score={this.state.user.score}/>
            <div className='pup-container'>
            {
                this.state.puppies.map((pup,i)=>{
                    return(
                        <div className='pup' 
                        style={ { backgroundImage: `url(${pup.img})` } }
                        onClick= {()=>{this.onPupsClick(i)}}>
                        </div>
                    )
                    
                })
            }
            </div>
            </div>
        )
    }

}