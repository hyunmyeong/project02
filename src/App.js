import React from 'react';
import {Route} from "react-router-dom";
import Main from './Main';
import Add from './Add';
import {db} from "./firebase";
import {useDispatch} from "react-redux"
import {createMain, loadMainFB} from "./redux/modules/main";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";

function App() {
  const [list] = React.useState(["챔필 가기", "야구 보기"]);
  const text = React.useRef(null);

  const dispatch = useDispatch();
  React.useEffect(() => {

    dispatch(loadMainFB());
    // console.log(db);
    
    // const docRef = doc(db, "word", "Mbcfxuexu9KmDkvbSS2x");
    // await deleteDoc(docRef)
    
  },[]);
  
  return (
    <div className="App">
      <Route path="/" exact component={Main}>
        {/* <Main/> */}
      </Route>
      <Route path="/Add" >
        <Add/>
      </Route>
    </div>
  );
}

export default App;
