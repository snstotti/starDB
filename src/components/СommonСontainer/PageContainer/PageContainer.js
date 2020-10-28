import React, { useEffect } from 'react'
import './PageContainer.css'
import Spiner from '../../spiner/spiner'

const PageContainer =({setStartId, getUrlimage, requestInfo,idItem,children})=>{

    useEffect(()=>{
        setStartId(idItem)
        getUrlimage(idItem)
        requestInfo(idItem)
        console.log('click');
    },[idItem,setStartId,getUrlimage,requestInfo])
    
    if (!idItem) {
        return <Spiner />
    }
        return (
            <div className='blockPage'>
              {children}
            </div>
        )
}    

export default PageContainer 