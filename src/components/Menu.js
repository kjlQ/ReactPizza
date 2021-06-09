import React , {useState , useRef , useEffect} from "react";
import { FaArrowDown } from 'react-icons/fa';
import {Transition} from "react-transition-group";
export default function Menu({menu ,changePizzaType , click}) {
    const [active , setActive] = useState(0)
    const [gSort,setGSort] = useState()
    const [flag , setFlag] = useState(false)
    const [typeFlag,setTypeFlag] = useState(false)
    const [sortFlag , setSortFlag] = useState(false)
    const text = ["популярності","ціні ↑ ","ціні ↓"]
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
    const handleOutsideClick = e => {
        if(!e.composedPath().includes(SortRef.current)) {
            setFlag(false)
        }
    }
    useEffect(()=> {
        document.body.addEventListener('click',handleOutsideClick)
    },[])
    return (
        <>
            <div onClick={()=>setTypeFlag(!typeFlag)} className="type">
                <div><p className={typeFlag?"rotation":"unrotation"}><FaArrowDown /></p>Тип пици:<span>{menu[active]}</span></div>
            </div>
            <div className="allmenu">
                <Transition
                in={typeFlag}
                timeout={0}
                >
                    {state=><div className={typeFlag?`menu active-menu ${state}`:`menu`}>
                        <ul>
                            {menu.map((el,index)=><li onClick={()=> {
                                doActive(index)
                                changePizzaType(index)
                            }} className={active===index?"active-sort":""} key={`${el}_${index}`}><a href="#sort">{el}</a></li>)}
                        </ul>
                    </div>}
                </Transition>
                <div ref={SortRef} id="sort" className="sort-by" onClick={()=>setFlag(!flag)}>
                    <div><p className={flag?"rotation":"unrotation"}><FaArrowDown /></p>Сортувати по: <span>{sortFlag?text[gSort]:"не вибрано"}</span></div>
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
                                }} className={gSort===index?"activeGlobalSort":""} key={`${el}_${index}`}><a href="#sort">{el}</a></li>)}
                            </ul>
                        </div>}
                    </Transition>
                </div>
            </div>
        </>
    )
}