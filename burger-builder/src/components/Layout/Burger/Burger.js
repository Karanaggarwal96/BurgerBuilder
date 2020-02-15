import React from 'react'
import  './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const Burger=(props)=>{
    //let transformedIngriedent=Object.keys(props.ingredients).map(igKey=>{
        return [...Array(props.ingredients[igKey])].map((_,i)=>{

            return <BurgerIngredient key={igKey +i } type={igKey}/>
        })
    }).reduce((arr,el)=>{
        return arr.concat(el);
    },[])
    if(transformedIngriedent.length===0)
    {
        transformedIngriedent=<p>Please Start Adding Some Ingredients</p>
    }
    return(
        <div className='Burger'>
        <BurgerIngredient type='bread-top'/>
         {transformedIngriedent}
         <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}


export default Burger;