import { useEffect, useState } from "react"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Main from "./components/main/Main"
import Navbar from "./components/navbar/Navbar"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [points,setPoints] = useState(0)
  const [clickCount,setClickCount] = useState(0)
  const [isActive,setIsActive] = useState('Available')
  const[data,setData] = useState([])
  const [players,setPlayers] = useState(0)
  const [selectedId,setSelectedId] = useState([])
  const [selectedElement,setSelectedElement] =useState([])
  const [email,setEmail]=useState('')
  // eslint-disable-next-line no-unused-vars
  const [subscribe,setSubscribe] =useState(false)

  // data-fetching
  useEffect(()=>{
    const fetchData =async ()=>{
      const res = await fetch('data.json')
      const data = await res.json()
      setData(data)
    }
    fetchData()
  },[])


  // claim-button-click-handler
  function claimClickHandler (){
    if(clickCount >= 3){
      return toast('You Already Claimed For Today')
    }else{
      setClickCount(clickCount + 1)
      setPoints(points + 60000000)
      return toast('You Successfully Claimed Coins')
    }
  }

    // active-button-click-handler
    function activeBtnClickHandler (buttonName){
            setIsActive(buttonName)
    }
    // chose-player-click-handler
    function chosenClickHandler (element,price){
      // points-validation
      if(points > price){
        // players-length-validation
        if(players >= 6){
          return toast("You Have Selected 6 Players")
        }else{
          // duplication-validation
          const isExist = selectedId.find(existId=> existId === element.id)
          if(isExist){
            return toast("Player Already Selected")
          }else{
            setSelectedId([...selectedId, element.id])
            setSelectedElement([...selectedElement,element])
            setPlayers(players + 1)
            setPoints(points - price)
          }
        }
      }else{
        return toast("You Don't Have Enough Points")
      }
    }
    // delete-click-handler
    function deleteClickHandler (id){
      const updatedElement = selectedElement.filter(element=> element.id !== id)
      setSelectedElement(updatedElement)
      const updatedSelectedId = selectedId.filter(existId=> existId !== id)
      setPlayers(players-1)
      toast("Player Remove")
      setSelectedId(updatedSelectedId)
    }

    // fetchEmail-from-Ls
  useEffect(()=>{
    const storedEmail = localStorage.getItem('subscribeEmail')
    if(storedEmail){
      setEmail(storedEmail)
      setSubscribe (true)
    }
  },[])

  // newsletterInput-function
  function subscribeInput(e){
    const userEmail = e.target.value 
    setEmail(userEmail)
  }
  // newsletter-subscribe-button-function
  function subscribeClickHandler (e){
    e.preventDefault()
    if(email){
      localStorage.setItem('subscribeEmail',email)
      toast(`${email.split('@')[0]} ! Thanks For Subscribing`)
    }
    
  }

  return (
   <div>
    {/* Navbar */}
    <Navbar points ={points}/>
    <ToastContainer position="top-center"
                    autoClose={1000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="dark"
transition: Bounce/>
    {/* Hero-section */}
    <Hero claimClickHandler ={claimClickHandler}/>
    {/* main-section */}
    <Main activeBtnClickHandler ={activeBtnClickHandler}
          isActive ={isActive}
          data ={data}
          players={players}
          chosenClickHandler ={chosenClickHandler}
          selectedId ={selectedId}
          selectedElement={selectedElement}
          deleteClickHandler ={deleteClickHandler}
          subscribeClickHandler={subscribeClickHandler}
          subscribeInput ={subscribeInput}
          email ={email}
          />
    {/* Footer */}
    <Footer/>
   </div>
  )
}

export default App
