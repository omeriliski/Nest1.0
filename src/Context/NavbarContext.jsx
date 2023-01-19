import { useState, createContext, useRef } from 'react'
export const navbarContext = createContext()

export default function NavbarContextProvider(props){
    const [filteredCities, setFilteredCities] = useState([]);

    const [showOffCanvas, setShowOffCanvas] = useState(false);
    const [showModal, setShowModal] = useState(false);
    
    //active Menu where,when,who
    const [active, setActive] = useState(null);
    const [rightMenu, setRightMenu] = useState(false);

    const where = useRef();
    const bigNavRef = useRef();
  
    const handleShowOffCanvas = () => setShowOffCanvas(true);
    const handleCloseOffCanvas = () => setShowOffCanvas(false);

    const handleShowModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false);

    const handleCloseAll=()=>{
        handleCloseOffCanvas();
        handleCloseModal();
    }
    
    const anyClick=(menu)=>{
      handleShowOffCanvas(); 
      handleShowModal(); 
      setActive(menu)
        //  where?.current?.focus()
    }

    const navbarVariable={showOffCanvas, anyClick, rightMenu,setActive,handleShowModal,handleCloseAll,
        showModal, handleCloseModal, active, bigNavRef,where, setShowModal,setRightMenu,filteredCities, setFilteredCities}

    return(
        <navbarContext.Provider value={navbarVariable}>
            {props.children}
        </navbarContext.Provider>
    )
}
