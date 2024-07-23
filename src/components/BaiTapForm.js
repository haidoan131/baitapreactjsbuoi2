import React ,{useState}from 'react'

export default function BaiTap() {

    const[result,setResult]=useState(0)
    const[a,setA]=useState(0)
    const[b,setB]=useState(0)
  return (
    <div>
        <h1>tesstttttttttttttttt</h1>
        <h1>kết quả:{result}</h1>
        <input type="text" onChange={(e)=>setA(e.target.value*1)}/><br/>
        <input type="text"  onChange={(e)=>setB(e.target.value*1)}/><br/>
        <button onClick={()=>setResult(a+b)}>+</button>
        <button onClick={()=>setResult(a-b)}>  -</button>
        <button onClick={()=>setResult(a*b)}>*</button>
        <button onClick={()=>setResult((a/b).toFixed(2))}>/</button>
    </div>
  )
}
