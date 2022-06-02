import React from 'react';
import { useHistory,} from "react-router-dom";
import {useDispatch} from "react-redux";
import {createMain, addWordFB} from "./redux/modules/main";
import Button from '@mui/material/Button';



    const Add =(props) => {

       
        //useRef로 html의 DOM 태그에 직접 접근 
        const text = React.useRef(null);
        const exp = React.useRef(null);
        const eam = React.useRef(null);
        

        const dispatch = useDispatch();
        const history = useHistory();


        const add_nemo = () => {
            // setCount([...count, text.current.value]);
            // dispatch(createMain(text.current.value, exp.current.value, eam.current.value));
            dispatch(addWordFB(text.current.value, exp.current.value, eam.current.value));
            history.goBack()
            // console.log(text.current.value)
            
        }

        return(
            <div style={{
                backgroundColor:"#87CEFA", 
                width:"500px", 
                height:"850px",
                alignItems:"center",
                justifyItems:"center",
                margin:"40px auto",
                padding:"16px",
                
                }}>
                <h2 style={{
                    fontSize:"45px",
                    textAlign:"center", 
                    alignItems:"center",
                    justifyItems:"center",
                    margin:"auto",
                    
                }}>단어 추가하기</h2>
                <div style={{
                    padding:"20px",
                    width:"400px",
                    height:"500px",
                    margin:"auto",
                    alignItems:"center",
                    justifyItems:"center",
                    

                }}>
                <div>
                    <div style={{
                    margin:"auto",
                    alignItems:"center",
                    justifyItems:"center",
                    padding:"auto",
                    width:"400px"
                }}>
                    <div style={{
                        backgroundColor:"#E0FFFF",
                        width:"auto",
                        height:"100px",
                        }}>
                        <p style={{
                            alignItems:"center",
                            justifyItems:"center",
                            
                        }}>단어</p>
                        <input 
                        type="text"
                        ref={text}
                        style={{
                            width:"350px",
                            height:"30px",
                            margin:"10px",
                            alignItems:"center",
                            justifyItems:"center",

 
                        }}
                        ></input>
                    </div>
                    
                </div>
                <div style={{
                    margin:"auto",
                    alignItems:"center",
                    justifyItems:"center",
                    padding:"auto",
                    width:"400px"
                }}>
                    <div style={{
                        backgroundColor:"#E0FFFF",
                        width:"auto",
                        height:"100px",
                        }}>
                        <p style={{
                            alignItems:"center",
                            justifyItems:"center",
                            
                        }}>설명</p>
                        <input 
                        type="text"
                        ref={exp}
                        style={{
                            width:"350px",
                            height:"30px",
                            margin:"10px",
                            alignItems:"center",
                            justifyItems:"center",
 
                        }}
                        ></input>
                    </div>
                    
                </div>
                <div style={{
                    margin:"auto",
                    alignItems:"center",
                    justifyItems:"center",
                    padding:"auto",
                    width:"400px"
                }}>
                    <div style={{
                        backgroundColor:"#E0FFFF",
                        width:"auto",
                        height:"100px",
                        }}>
                        <p style={{
                            alignItems:"center",
                            justifyItems:"center",
                            
                            
                        }}>예시</p>
                        <input 
                        type="text"
                        ref={eam}
                        style={{
                           width:"350px",
                           height:"30px",
                           margin:"10px",
                           alignItems:"center",
                           justifyItems:"center",

                        }}
                        ></input>
                    </div>
                    
                </div>
                    
                    <Button 
                    onClick={add_nemo}
                    style={{
                        margin:"20px", 
                        display:"flex",
                        width:"200px",
                        height:"50px",
                        alignItems:"center",
                        justifyItems:"center",
                        textAlign:"center",
                        padding:"20px",
                        variant:"contained",
                        backgroundColor:"#E0FFFF",
                        color:"black"

                        

                    }}>추가하기</Button>
                    
                </div>   
                
                </div>

                
            </div>
    );
    };
    

export default Add;
