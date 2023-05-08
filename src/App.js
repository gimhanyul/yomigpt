import {useState, useEffect} from "react";

const App =() => {
    const [message, setMessage] =useState(null)

    const getMessage = async ()=>{
        const options={
            method:"POST",
            body:JSON.stringify({
                message: "Hello how ary you?"
            }),
            headers:{
                "Content-Type":"application/json"
            }
        }
        try{
            const response =await fetch('http://localhost:8000/completions',options)
            const data = await response.json()
            setMessage(data.choices[0].message)
        }catch (error){
            console.log(error)
        }
    }



  return (
    <div className="app">
      <section className="side-bar">
        <button> + New chat</button>
        <ul className="history"></ul>
          <li>buge</li>
        <nav>
          <p> Made by Hanyul</p>
        </nav>
      </section>
      <section className="main">
          <h1>쿼카GPT</h1>
          <ul className="feed">
          </ul>
          <div className="bottom-section">
              <div className="input-container">
                  <input/>
                  <div id="submit" onClick={getMessage}>⩥</div>
              </div>
              <p className="info">
                  어쩌구저쩌구 고지서
              </p>
          </div>
      </section>
    </div>
  )
}

export default App;
