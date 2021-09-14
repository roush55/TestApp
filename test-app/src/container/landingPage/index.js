import React from 'react'
import style from './style.module.scss';
import ListView from '../../components/ListView';
import data from './data';


const  LandingPage=()=> {

const cardList=data




    return (
        <div className={style.mainConatiner}>
            <div className={style.logo}> 
            </div>

                <div className={style.titleContainer}>
                    <p className={style.title}>التوثيق الموحد</p>
                     <p className={style.subTitle}>لمشاريع إدارة التطوير والبرمجيات</p> 
                    </div>
                
    
                    <ListView items={cardList} className={style.wraper} />
                  
                 
            
        </div>
    )
}

export default LandingPage
