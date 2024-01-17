// import { useEffect } from "react"
import { ListWatches } from "./components/listWatches"

const App = () => {
  // const userEmail = "zizou10@gmail.com"
  // const getUser = async () => {
  //   try {
  //     const response = await fetch(`http://localhost:8000/user/${userEmail}`)
  //     const json = await response.json()
  //     console.log(json)
  //   } catch (error) {
  //     console.error(error)
  //   }
  // }

  // useEffect(() => {
  //   getUser()
  // }, [])

  return (
    <div>
      <ListWatches />
    </div>
  )
}

export default App
