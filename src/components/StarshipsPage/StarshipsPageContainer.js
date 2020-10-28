import React, { Component } from 'react'
import '../СommonСontainer/PageContainer/PageContainer.css'

import Spiner from '../spiner/spiner'


class StarshipsPageContainer extends Component {

    componentDidMount() {
        this.onUpdatePerson()
    }
    componentDidUpdate(prevProps) {
       
        if (this.props.idItemStarships !== prevProps.idItemStarships) {
             this.onUpdatePerson() 
        }
    }
    
    onUpdatePerson = () => {
        const {  setStartId, getUrlimageStarships, requestStarshipsInfo, idItemStarships} = this.props
        if (!idItemStarships) {
            return <Spiner />
        }
        
        setStartId(idItemStarships)
        getUrlimageStarships(idItemStarships)
        requestStarshipsInfo(idItemStarships)
    }

   
    render() {
        
        return (
            <div className='blockPage'>
              { this.props.children}
               
            </div>


        )
    }
}    


export default StarshipsPageContainer 
