import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState(0);
  const [running,setRunning] = useState(false);

  useEffect(()=>{
    let interval;
    if (running){
      interval = setInterval(()=>{
        setTime(time=>time+10)
      },10);
    }
    else if (!running){
      clearInterval(interval);
    }
    return() => clearInterval(interval);

  },[running]);


  return (
			<>
				<div className="container">
					<h2>STOPWATCH</h2>
					<div className="numbers">
						<span>{`0${+Math.floor((time / 60000) % 60)}`.slice(-2)}: </span>
						<span>{`0${+Math.floor((time / 1000) % 60)}`.slice(-2)}: </span>
						<span>{`0${+((time / 10) % 100)}`.slice(-2)} </span>
					</div>
					<div>
						{running ? (
							<button
								type="button"
								className="stop"
								onClick={() => {
									setRunning(false);
								}}
							>
								Stop
							</button>
						) : (
							<button
								type="button"
								className="start"
								onClick={() => {
									setRunning(true);
								}}
							>
								Start
							</button>
						)}

						<button
							type="button"
							className="reset"
							onClick={() => {
								setTime(0);
							}}
						>
							Reset
						</button>
					</div>
				</div>
			</>
		);
}

export default App
