import React from 'react';
import style from './style.module.scss';


 

const  ListView=(props)=>{
    return (
        
        <>
           
                {props.items.map((item,index)=>{
                    const headers=item[0].groupTitle
                    const data =item.slice(1)
                    const details =data.map(x=>x)
                    
                    return(
                        <>
                        <div className={style.container} key={index}>
                        <div className={style.overlay} >
           
                            </div>


                  <div className={style.containtContainer}>
                  <p className={style.groupTitle}>{headers}</p>
                  <div className={style.cardContainer}>
                 
                        {details.map((x,index) => {
                            
                       return(
                    <>
                           
                    <div className={style.card} key={index}>
                    {x.isBlur  === true?(
                        <div className={style.cover}><h6 className={style.coverTitle}>قريبا</h6></div>):null}
                <img src={x.src} className={style.cardTop} style={x.isBlur === true? {opacity: .32}:{}} alt=''/>
                <h6 className={style.cardTitle} style={x.isBlur === true? {opacity: .5}:{}}>{x.cardTitle}</h6>
                </div>

                
                 </>
                 
                 )})}
                 
                 </div>
                </div>
               
                </div>
                </>
                
                )
                })}
              
                
       </>
    )
}


export default ListView
