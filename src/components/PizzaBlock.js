import React,{useState} from 'react'
import classNames from 'classnames'
export default function Pizzas({name,imageUrl,price , types ,sizes }) {
    const [selectType,setSelectType] = useState(types[0])
    const [selectSize,setSelectSize] = useState(sizes[0])
    const fSelectionType = index => setSelectType(index)
    const fSelectionSize = index => setSelectSize(index)
    const availableTypes = ["тонкое","стандартное"]
    const availableSizes = [26,30,40]

    return (
        <div className="pizza">
            <img src={imageUrl} alt="" />
            <h2>{name}</h2>
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
            <div className="price">
                <p>Від {price}₴</p>
                <p><span>+ Добавить</span></p>
            </div>
        </div>
    )
}