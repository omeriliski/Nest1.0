import {useContext} from "react";
import { houseContext } from "../../../Context/HouseContext.jsx";
import { Offcanvas } from "react-bootstrap" 
// import {HouseCarousel } from "../";
import {BsArrowRightCircle, BsArrowLeftCircle} from "react-icons/bs"
import "./Slider.scss";
import env from "@beam-australia/react-env";


export const Slider = ()=>{
    
    const {show, setShow, handleClose, house ,counter, setCounter} = useContext(houseContext);
    

    return(
        <div className="slider-container">
            <Offcanvas id="slider" show={show} onHide={handleClose} placement="bottom">
              <Offcanvas.Header id="header">
                {/* <Offcanvas.Title></Offcanvas.Title> */}
                <div>
                  <span onClick={()=>setShow(false)}>X  Close</span>
                </div>
                <div className="img-number">{counter} / {house?.images?.length}</div>
                <div></div>
              </Offcanvas.Header>
              <Offcanvas.Body id="body">
                  <div>
                    {counter > 1 ? <BsArrowLeftCircle className="icon" id="icon" onClick={()=> setCounter(counter-1)}/>:null}
                  </div>
                  <div>
                    <img src={`${env.REACT_APP_URL}/api/house/getImage/${house._id}/${[counter-1]}`} alt="house-img"/>
                  </div>
                  <div>
                    {counter < house?.images?.length ? <BsArrowRightCircle className="icon" onClick={()=>setCounter(counter+1)}/> : null}
                  </div>
              </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}