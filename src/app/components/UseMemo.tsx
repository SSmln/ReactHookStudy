'use client'
import React ,{useState , useMemo}from 'react'


export default function UseMemo() {
    const[text,setText] = useState('')
    const[items,setItems] = useState<string[]>([])

    const onChangeInput = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setText(e.target.value)
    }
    const onClickButton =() =>{
        setItems((prevItems)=>{
            return [...prevItems,text]
        })
        setText('')
    }
    // TODO: reduce 링크 달기 
    const numberOfCharacters1 = items.reduce((sub,item)=> sub+item.length, 0)
    
    // TODo : useMemo 
    const numberOfCharacters2 = useMemo(()=>{
        return items.reduce((sub,item) => sub + item.length , 0)
    },[items])


    return (
        <div>
            <p>UseMemoSample</p>
            <div>
                <input value={text} onChange={onChangeInput} />
                <button onClick={onClickButton}>Add</button>
            </div>
            <div>
                {items.map((item,index)=>(
                    <p key={index}>{item}</p>
                ))}
            </div>
            <div>
        <p>Total Number of Characters 1: {numberOfCharacters1}</p>
        <p>Total Number of Characters 2: {numberOfCharacters2}</p>
      </div>
        </div>
  
        )
}
