import { useState } from 'react'

export default function App() {
  const [result, setResult] = useState(0)
  const [valueOne, setValueOne] = useState('')
  const [valueTwo, setValueTwo] = useState('')

  function operationResult(operation: string){
    console.log(operation)
  if(operation === 'Somar'){
      const resultOperation = Number(valueOne)+Number(valueTwo)
      setResult(resultOperation)
    }
  else if(operation === 'Dividir'){
      const resultOperation = Number(valueOne)/Number(valueTwo)
      setResult(resultOperation)
    }
    else if(operation === 'Multiplicar'){
      const resultOperation = Number(valueOne)*Number(valueTwo)
      setResult(resultOperation)
    }  
    else if(operation === 'Subtrair'){
      const resultOperation = Number(valueOne)-Number(valueTwo)
      setResult(resultOperation)
    }
  }
  return (
      <div style={{display: 'flex', flexDirection: 'column', gap: 12, justifyContent: 'center', alignItems: 'center'}}>
        <h1 style={{fontFamily: 'Arial'}}>{`Resultado: ${result}`}</h1>
        <input type="number" onChange={(e) =>{
          setValueOne(e.target.value)
        }}/>
        <input type="number" onChange={(e) =>{
          setValueTwo(e.target.value)
        }}/>
        <button style={{backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', borderRadius: 5, padding: 5}} onClick={() => operationResult('Somar')}>Somar</button>
        <button style={{backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', borderRadius: 5, padding: 5}} onClick={() => operationResult('Subtrair')}>Subtrair</button>
        <button style={{backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', borderRadius: 5, padding: 5}} onClick={() => operationResult('Multiplicar')}>Multiplicar</button>
        <button style={{backgroundColor: 'rgba(0,0,0,0.1)', color: 'black', borderRadius: 5, padding: 5}} onClick={() => operationResult('Dividir')}>Dividir</button>
      </div>
  )
}
