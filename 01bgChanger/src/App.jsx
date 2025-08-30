import { useState } from "react"

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div
      className="w-screen h-screen flex duration-200 items-center justify-center"
      style={{ backgroundColor: color }}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 px-3 py-2 rounded-2xl shadow-lg bg-white">
<button onClick={()=>setColor("red")}
className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'red'}}> Red</button>
<button onClick={()=>setColor("green")}
       className="outline-none py-1 px-4 rounded text-white shadow-sm " style={{backgroundColor:'green'}}>Green</button>
<button onClick={()=>setColor("black")}
className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'black'}}> Black</button>
<button onClick={()=>setColor("orange")}
 className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'orange'}}>Orange</button>
<button onClick={()=>setColor("cyan")}
 className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'cyan'}}> Cyan</button>
<button onClick={()=>setColor("violet")}
 className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'violet'}}>violet</button>
<button onClick={()=>setColor("blue")}
className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'blue'}}> blue</button>
<button onClick={()=>setColor("yellow")}
className="outline-none px-4 py-1 rounded text-white shadow-sm " style={{backgroundColor:'yellow'}}> Yellow</button>

       
        </div>
    </div>
    </div>
  )
}

export default App

