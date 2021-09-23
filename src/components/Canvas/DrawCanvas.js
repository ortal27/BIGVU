import React, { useEffect } from 'react';
import './DrawCanvas.css';

function DrawCanvas(props) {
    const canvasRef = React.useRef();

    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext("2d");
        const img = new Image();
        img.src = props.image;
        
        img.onload = () => {
            context.drawImage(img, 10, 10);
            context.font = "50px courier";
            context.fillStyle = "white";
            context.textAlign = "center";
            
            context.fillText(props.text, 320, 180);
        }
    },[props.text, props.image ,canvasRef]);

    return(
        <div className={"Canvas"}>
            <canvas ref={canvasRef} width="640px" height="360px" style={{background :props.background}}/>
        </div>
    );
}

export default DrawCanvas ;