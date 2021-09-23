import React, { useState, useEffect } from "react";
import axios from 'axios';
import './ScreenDrawer.css';
import DrawCanvas  from "../Canvas/DrawCanvas";

function ScreenDrawer(props) {
    const [currState, setCurrState] = useState(props.color);
    const [isRouteChange, setIsRouteChange] = useState(false);
    const [imgList, setImgList] = useState([]);
    const [userInput, setUserInput] = useState('');
    const [currImg, setCurrImg] = useState(undefined);
    const inputRef = React.useRef();
    const selectRef = React.useRef();

    useEffect(() => {
        axios.get('http://localhost:8080/list')
        .then(res => {
            setImgList(res.data);
        })
        .catch(error => {
            console.log(error);
        });
    },[])

    useEffect(()=> {
        if(props.color !== currState){
            setCurrState(props.color);
            setUserInput('');
            setCurrImg(undefined);
            setIsRouteChange(true);
            const updateInput = inputRef.current;
            updateInput.placeholder= 'Enter input';
            updateInput.value = '';
            const updateDropDown = selectRef.current;
            updateDropDown.value = 'none';
        }
    },[currState, props.color, userInput, currImg, isRouteChange])

    const inputHandler = (event) => {
        const timeout = setTimeout(() => {
            setUserInput(event.target.value);
        }, 2000);
        return () => {
            clearTimeout(timeout);
        }
    }
    return(
        <div className={"ScreenDrawer"}>
            <select ref={selectRef} className={"DropdownList"} onChange={e => setCurrImg(e.target.value)}>
                <option value={'none'}>Select image</option>
                {imgList.map(item => (
                    <option value={item.value} key={item.name}>{item.name}</option>
                ))}
            </select>
            <input ref={inputRef} type='text' placeholder={'Enter input'} onChange={(event) => inputHandler(event)}/> 
            {currImg ? 
                <DrawCanvas image={currImg} text={userInput} background={props.color}/> 
            : null}
        </div>
    );
}


export default ScreenDrawer;