import React, { Component } from 'react'
import './errorIndicator.css'
import Icon from './icon-deathStar.ico'

export default class ErrorIndicator extends Component {

    
       
    state = { hasError: false, errorInfo: null, error: null}

    static getDerivedStateFromError(error){
       
          return { hasError: true} 
        
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            errorInfo,
            error
        })
    }

    render() {
       
        if (this.state.hasError) {
            console.log(this.state.hasError);
            return (
                <div className='error'>
                    <img src={Icon} alt='' width='100px' />
                    <span>FUCK</span>
                    {/* <span>{this.state.error}</span> */}
                    <span>Something is broken, we will repair</span>
                </div>
            )
        }
            return (this.props.children)
        

    }
}


