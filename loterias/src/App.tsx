import { useEffect } from "react";


export default function App() {
  function testar(){
    console.log("passou");
  }
  useEffect(testar,[]);

  return (
    <div>
      Loterias
    </div>
  );
}

