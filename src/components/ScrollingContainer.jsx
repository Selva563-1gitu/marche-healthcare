import React, { useEffect, useState } from "react";
import "./css/scrollingcontainer.css";
function ScrollingContainer({heading,bgimg,subHeading}) {
  const [width, setWidth] = useState(300);
  const [opacity, setOpacity] = useState(0);
  const [zoomHeight, setZoomHeight] = useState(0);
  const [zoomWidth, setZoomWidth] = useState(0);
  useEffect(() => {
    setZoomWidth(window.innerWidth * 0.67);
    setZoomHeight(window.innerHeight * 0.67);
  }, []);
  
  return (
    <div>
      
      <div style={{ position: "relative",marginBottom:"100px"}}>
        <div className="scrollcontainer">
          <div className="stickydiv">
            <div
              className="zoomoutdiv"
              style={{ height: zoomHeight, width: zoomWidth }}
            >
              <div className="bgimagediv" style={{backgroundImage:`url(${bgimg})`}}>
                <span style={{ display: "none" }}>something</span>
              </div>
            </div>
          </div>
        </div>
        <div className="texthoverdiv">
          <div className="textdiv">
            <div className="texthovered">
              <h3>{heading}</h3>
              <h4>{subHeading}</h4></div>
            {/* <h4 className="texthovered">{subHeading}</h4> */}
          </div>
        </div>
        {/* <div className="fogdiv"></div> */}
      </div>
      
    </div>
  );
}

export default ScrollingContainer;
