import React,{useState} from 'react'

function One() {
    const [ data , setData] = useState([])
    // const [ dt , setDt] = useState([])
    const arr = ['one','two','three','four','five','six','seven']
    const handleEvent=(e)=>{
        const ser = e.target.value;
        const res = arr.filter((item)=>{
            return item.toLowerCase().includes(ser.length !==0 && ser.toLowerCase())
        })
        console.log('.....>',res)
        // setData([...res])
        res.length > 0 ? setData([...res]) : document.head().innerHTML = `<h1>element is not found </h1>`
    }
    return (
        <div>
            <h1>One Compo {data[0]}</h1>
            <input type='text' onChange={handleEvent} />
            {/* {data.length>0 && data.map((item)=><li style={{listStyle:'none',border:'1px solid black',width:'100px',position:'absolute'}}>{item}</li>)} */}
            
        </div>
    )
}

export default One
