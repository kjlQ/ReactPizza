import React , {useState , useRef , useEffect} from "react";
import { FaArrowDown } from 'react-icons/fa';
import {Transition} from "react-transition-group";
export default function Menu({menu ,changePizzaType , click}) {
    const [active , setActive] = useState(0)
    const [gSort,setGSort] = useState()
    const [text , setText] = useState(["популярности","цене ↑ ","цене ↓"])
    const [flag , setFlag] = useState(false)
    const [typeFlag,setTypeFlag] = useState(false)
    const [sortFlag , setSortFlag] = useState(false)
    const SortRef = useRef(null)
    const doActive = (index) => {
        setActive(index)
    }
    const doGlobalSort = (index) => {
        setGSort(index)
    }
    useEffect(()=> {
        setGSort(null)
        setSortFlag(false)
    },[active])
    const changeFlag = () => {
        setTimeout(()=> {
            setFlag(!flag)
            },500
        )
    }
    const handleOutsideClick = e => {
        if(!e.path.includes(SortRef.current)) {
            setFlag(false)
        }
    }
    useEffect(()=> {
        document.body.addEventListener('click',handleOutsideClick)
    },[])
    return (
        <>
            <div onClick={()=>setTypeFlag(!typeFlag)} className="type">
                <div><p className={typeFlag?"rotation":"unrotation"}><FaArrowDown /></p>Тип пиццы:<span>{menu[active]}</span></div>
            </div>
            <div className="allmenu">
                <Transition
                in={typeFlag}
                timeout={0}
                >
                    {state=><div className={typeFlag?`menu active-menu ${state}`:`menu`}>
                        <ul>
                            {menu.map((el,index)=><li onClick={word=> {
                                doActive(index)
                                changePizzaType(index)
                            }} className={active===index?"active-sort":""} key={`${el}_${index}`}>{el}</li>)}
                        </ul>
                    </div>}
                </Transition>
                <div ref={SortRef} className="sort-by" onClick={()=>setFlag(!flag)}>
                    <div><p className={flag?"rotation":"unrotation"}><FaArrowDown /></p>Сортировать по: <span>{sortFlag?text[gSort]:"не выбрано"}</span></div>
                    <Transition
                    in={flag}
                    timeout={0}
                    >
                        {state => <div className={`sort ${state}`}>
                            <ul>
                                {text.map((el,index)=><li onClick={()=> {
                                    doGlobalSort(index)
                                    setSortFlag(true)
                                    click(index)
                                }} className={gSort===index?"activeGlobalSort":""} key={`${el}_${index}`}>{el}</li>)}
                            </ul>
                        </div>}
                    </Transition>
                </div>
            </div>
        </>
    )
}