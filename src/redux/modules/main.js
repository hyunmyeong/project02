// main.js
import {db} from "../../firebase";
import { collection, doc, getDoc, getDocs, addDoc, updateDoc, deleteDoc } from "firebase/firestore";



// Actions
const LOAD = 'main/LOAD';
const CREATE = 'main/CREATE';

const initialState = {
    list: [{text: "hello", exp:"안녕; 인사; 여보세요", eam: "Hello, how are you?"}]
}
// Action Creators
export function loadMain(word_list) {
    return {type: LOAD. word_list};
}

export const addWordFB = (word) => {
    return async function (dispatch) {
        const docRef = await addDoc(collection(db, "word"), word);
        const _main = await getDoc(docRef);
        const main_data = {id: _main.id, ...word.data()};
        
        console.log(main_data);

        dispatch((createMain(main_data)));
    };
};

export function createMain(text,exp, eam){
    console.log("액션 생성")
    return {type: CREATE, text,exp, eam}
}

//middlewares
export const loadMainFB = () => {
    return async function (dispatch) {
        const word_data = await getDocs(collection(db, "word"));
        console.log(word_data);

        let word_list = [];

        word_data.forEach((doc) => {
            console.log(doc.data());
            word_list.push({id:doc.id, ...doc.data()});
            
        });
        console.log(word_list)

        dispatch(loadMain(word_list));
    }
}


// Reducer
export default function reducer(state = initialState, action = {}) {  // state = {} : 파라미터에 기본값을 줌
switch (action.type) {
    case "main/LOAD": {
        return {list: action.word_list};
    }
    case "main/CREATE":{
        console.log(action.main, action.main2, action.main3)
        console.log("값 바꿀거야")
        const new_add = [...state.list, {text: action.text, exp: action.exp, eam: action.eam}];
        return {list : new_add};
    }
    // do reducer stuff
    default: return state;
}
}


