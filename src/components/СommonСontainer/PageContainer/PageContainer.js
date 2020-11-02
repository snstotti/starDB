import React, { useEffect } from 'react'
import './PageContainer.css'

const PageContainer =({setStartId, getUrlimage, requestInfo,idItem,children})=>{

    useEffect(()=>{
        setStartId(idItem)
        getUrlimage(idItem)
        requestInfo(idItem)
    },[idItem,setStartId,getUrlimage,requestInfo])
    
    
        return (
            <div className='blockPage'>
              {children}
            </div>
        )
}    
 
export default PageContainer 