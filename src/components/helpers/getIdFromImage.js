

export const extractId=(item)=>{
    const idRegExp = /\/([0-9]*)\/$/;  // id
    return item.match(idRegExp)[1]
     
  }
