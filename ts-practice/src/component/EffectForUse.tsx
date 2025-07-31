import { use } from "react"; 

async function fetchData() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    return res.json()
}

function EffectForUse() {
  const data = use(fetchData());
  return (
    <div>
        {JSON.stringify(data)}
    </div>
  )
}

export default EffectForUse