import React from 'react';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';


const Main = (props) => {

    
    const add_count = useSelector((state) => state.main.list);
    console.log(add_count)
    
    
    return (

        <div style={{
            backgroundColor:"#87CEFA", 
            width:"500px", 
            height:"850px",
            alignItems:"center",
            justifyItems:"center",
            margin:"40px auto",
            padding:"16px",
            
            }}>
            {/* 단어 헤더 */}
            <h1 style={{
                fontSize:"45px",
                textAlign:"center", 
                // backgroundColor:"#38ef7d",
                // display:"flex",  
                margin:"auto",
                padding:"16px",
                alignItems:"center",
                justifyItems:"center",
                

            }}>단어장</h1>
            <div style={{
                padding:"20px",
                width:"250px",
                height:"300px",
                margin:"auto",
            }}>
            <div>
                {add_count.map((list, index) => {
                return (
                    <div key={index} style={{
                        width:"300px",
                        height:"150px",
                        backgroundColor:"#E0FFFF",
                        margin:"20px -30px",
                        alignItems:"center",
                        justifyItems:"center",
                        padding:"10px",     
                    }}>
                        <p>단어 : {list.text}</p>
                        <p>설명 : {list.exp}</p>
                        <p style={{color:"blue"}}>예시 : {list.eam}</p>
                        </div>
                    );
                })}
            </div>
                
            {/* 단어 추가하기 */}
            <Button 
            style={{
                margin:"20px", 
                display:"flex",
                width:"200px",
                height:"50px",
                alignItems:"center",
                justifyItems:"center",
                textAlign:"center",
                padding:"0 50px",
                variant:"contained",
                backgroundColor:"#E0FFFF",
                color:"black"
            }}
            onClick={() => {
                props.history.push("/Add")
            }}> 단어 추가하기
            </Button>
                
            </div>
            

            
            
        </div>
    )
};

export default Main;


{/* <button style={{
                margin:"20px", 
                display:"flex",
                width:"200px",
                height:"50px",
                alignItems:"center",
                justifyItems:"center",
                textAlign:"center",
                padding:"0 50px"
                
                
            }}
            onClick={() => {
                props.history.push("/Add")
            }}>
                단어 추가하기</button> */}