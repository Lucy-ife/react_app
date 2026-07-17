import {useState} from 'react'

function MyForm(){
    const [name, setName] = useState('');

    function handleChange(e){
        setName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }
  return (
    <div>
    <form onSubmit={handleSubmit}>
       <label>Enter your name:
       <input type="text" value={name} onChange={handleChange} />
         </label>  
        <input type="submit"/>
    </form>
    </div>
  );
}

export default MyForm;