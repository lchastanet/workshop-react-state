import Header from "./components/Header"
import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import { useState } from "react"

const defaultImg =
  "https://gravatar.com/avatar/a8972cd4b8a5c54ad979335906e931b7?s=400&d=robohash&r=x"
function App() {
  const [userInfo, setUserInfo] = useState({
    name: "Toto",
    picture: defaultImg,
  })

  return (
    <>
      <Header userInfo={userInfo} />
      <MainContent setUserInfo={setUserInfo} />
      <Footer name={userInfo.name} />
    </>
  )
}

export default App
