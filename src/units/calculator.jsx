import { useState } from "react"
import axios from 'axios';

function Calculator() {
    let [num1, setNum1] = useState(0);
    let [num2, setNum2] = useState(0);
    let [opporator, setOpporator] = useState('');
    let [result, setResult] = useState(0);

    
    function calculate(input) {
        if(num1 == 0) {
            setNum1(input);
        } else {
            setNum2(input);
        }
    }

    

    function clear() {
        setResult(0)
        setOpporator('')
        setNum1(0)
        setNum1(0)
    }

    

    function ChooseOpperator(operend) {
        setOpporator(operend);
    }
    

    
    async function handleResult()  {
        const response = await axios.post('http://localhost:3000/calculate', {num1,num2, opporator});
        setResult(response.data)

    return(
        <div style={{padding:'0',margin:'0',backgroundColor:'#ecfof3',boxSizing:'border-box',outline:'none'}}> 
            <div style={{height:'100vh',display:'flex',justifyContent:'center',allignItems:'center',backgroundImage:'https://wallpapers.com/images/hd/sunset-reflections-on-water-67chk9m20bq6r4u2.jpg)'}}> 
                <div style={{display:'grid',backgroundColor:'#ecfof3',borderRadius:'20px',padding:'25px',boxShadow:'0 4px 16px rgba(0,0,0,0.5)',borderShadow:'5px 5px 12px #ffffff, 5px 5px 5px 12px rgba(0,0,0,0,.16)',gridTemplateColumns:'repeat(4,68)',marginTop:'20px',marginBottom:'20px'}}>
    <h1 style={{display:'flex',justifyContent:'center',fontFamily:'cursive'}}>
        Calculator
    </h1>
    <input type="text" placeholder="0" style={{backgroundColor:'#ecfof3',height:'70px',width:'260px',borderRadius:'50px',backgroundColor:'#ecf0f3',boxShadow:'0 4px 12px rgba(0,0,0.5)',width:'257px',fontSize:'45px',border:'none'}}></input>

    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '10px'}}>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px', color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'40px',border:'none',fontPalette:'black',}} onClick={() => calculate(7)}>7</button>
        <button style={{padding:'10px', background: '#ecfof3',  borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'40px',border:'none',fontPalette:'black'}} onClick={() => calculate(8)}>8</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'40px',border:'none',fontPalette:'black'}} onClick={() => calculate(9)}>9</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'40px',border:'none',fontPalette:'black' }} onClick={() => setOpporator('+')}>+</button>
       
        </div>
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '10px'}}>
        <button style={{ padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(4)}>4</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(5)}>5</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(6)}>6</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => setOpporator('-')}>-</button>


    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '10px'}}>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(1)}>9</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(2)}>2</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(3)}>3</button>
        <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => ChooseOpperator('x')}>x</button>


    </div>
    <div style={{display:'flex', justifyContent:'center', alignItems: 'center', gap: '10px'}}>

    <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={clear}>C</button>
    <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={() => calculate(0)}>0</button>
    <button style={{padding:'10px', background: '#ecfof3', borderRadius: '10px',  color:'black', fontWeight:'bolder',boxShadow:'0 4px 16px rgba(0,0,0,0.5',height:'48px',width:'48px',margin:'8px',marginTop:'20px',border:'none',fontPalette:'black'}} onClick={handleResult}>=</button>
    {handleResult}
</div>
</div>
</div>
</div>


    )
}

export default Calculator