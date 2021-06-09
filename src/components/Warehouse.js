import React from 'react'
import classNames from "classnames";
export default function Warehouse({price,id,warehouse,imageUrl,name,setId,types,sizes,items}) {
    const [selectType,setSelectType] = React.useState(types[0])
    const [selectSize,setSelectSize] = React.useState(sizes[0])
    const fSelectionType = index => setSelectType(index)
    const fSelectionSize = index => setSelectSize(index)
    const availableTypes = ["тонке","стандартне"]
    const availableSizes = [26,30,40]
    return (
        <>
            <div className="data-wrapper">
               <div className={"data-wrapper-body"}>
                   <div className={"data-pizzaImage"}>
                       <img src={imageUrl} alt=""/>
                   </div>
                   <div className={"data-warehouse"}>
                       <div className="nameAndCloseBtn">
                           <div className={"data-pizzaName"}>
                               {name}
                           </div>
                           <button onClick={()=>setId(undefined)}>×</button>
                       </div>
                       <div className={"data-pizzaWarehouse"}>
                           <span>Склад:</span>
                           {warehouse.map(obj=><li key={`${obj}${id}`}>🞄{obj}</li>)}
                       </div>
                       <div className="pizza-settings">
                           <div className="pizza-padding">
                               <div className="dough">
                                   {availableTypes.map((elem,index) => <li key={elem} onClick={()=>fSelectionType(index)} className={classNames({active_size:selectType===index , disabled:!types.includes(index)})} >{elem}</li>)}
                               </div>
                               <div className="size">
                                   {availableSizes.map((elem,index) => <li key={elem} onClick={()=>fSelectionSize(index)} className={classNames({active_size:selectSize===index , disabled:!sizes.includes(elem) })} >{elem} см.</li>)}
                               </div>
                           </div>
                       </div>
                       <div className="price data-price">
                           <p><span onClick={()=> {
                               items(name, selectType, selectSize, price, imageUrl, id)
                               setId(undefined)
                           }} >+ Додати</span></p>
                       </div>
                   </div>
               </div>
            </div>
            <div id="overlay"></div>
        </>
    )
}