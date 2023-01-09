import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import './ReviewPage.scss'

const ReviewPage2=()=>{

const reviewOptions=useSelector(state=>state.reviewReducer.reviewForm)
    const bodyType=reviewOptions.bodyType;
const exerciseType=reviewOptions.exerciseType;
const gearFit=reviewOptions.gearFit;

//userInput
    const [bodyTypeInfo,setBodyTypeInfo]=useState('')
    const[exerciseTypeInfo,setExerciseTypeInfo]=useState('')
    const[gearInfo,setGearInfo]=useState('')

//select display
    const [bodyTypeNum,setBodyTypeNum]=useState(1)
    const [exerciseTypeNum,setExerciseTypeNum]=useState(1)
    const [gearNum,setGearNum]=useState(1)

    const bodyTypeChangeHandler=(e)=>{
       console.log(e.target.value)
        setBodyTypeInfo(e.target.value)
        setBodyTypeNum(1)
    }
    const exerciseTypeChangeHandler=(e)=>{
        console.log(e.target.value)
        setExerciseTypeInfo(e.target.value)
        setExerciseTypeNum(1)
    }
    const gearChangeHandler=(e)=>{
        console.log(e.target.value)
        setGearInfo(e.target.value)
        setGearNum(1)
    }


    const saveBodyType=()=>{
        localStorage.setItem('bodyType',bodyTypeInfo)
        setBodyTypeNum(1)
    }
    const saveExerciseType=()=>{
        localStorage.setItem('exerciseType',exerciseTypeInfo)
        setExerciseTypeNum(1)
    }
    const saveGear=()=>{
        localStorage.setItem('gearType',gearInfo)
        setGearNum(1)
    }
    // const bodyTypeOnBlur = ()=>{
    //     setBodyTypeNum()
    // }


    useEffect(()=> {
        const localBodyType = localStorage.getItem('bodyType')&&'';
        const localExerciseType = localStorage.getItem('exerciseType')&&'';
        const localGear = localStorage.getItem('gearType')&&'';
        if(localBodyType){setBodyTypeInfo(localBodyType)};
        if(localExerciseType){setExerciseTypeInfo(localExerciseType)};
        if(localGear){setGearInfo(localGear)}
    },[])
    return<div>
        <div className={'reviewSelectBlock'}>
            <div className={'reviewQuestionTitle'}>What's your body type?</div>
        <select defaultValue={localStorage.getItem('bodyType')} onChange={bodyTypeChangeHandler} className={'reviewSelect'} name="bodyType" id="bodyType"  size={bodyTypeNum} onFocus={()=>setBodyTypeNum(3)} onBlur={saveBodyType}>
            <option value="Select" >Select...</option>
            {bodyType.map((item,index)=><option key={index} value={item}>{item}</option>)}
        </select>
        </div>

        <div className={'reviewSelectBlock'}>
            <div className={'reviewQuestionTitle'}>I mainly wear my Lululemon gear to...</div>
            <select  defaultValue={localStorage.getItem('exerciseType')} onChange={exerciseTypeChangeHandler} className={'reviewSelect'} name="exerciseType" id="exerciseType"  size={exerciseTypeNum} onFocus={()=>setExerciseTypeNum(3)} onBlur={saveExerciseType}>
                <option value="Select">Select...</option>
                {exerciseType.map((item,index)=><option key={index} value={item}>{item}</option>)}
            </select>
        </div>




        <div className={'reviewSelectBlock'}>
            <div className={'reviewQuestionTitle'}>How did your gear fit?</div>
            <select defaultValue={localStorage.getItem('gearType')} onChange={gearChangeHandler}  className={'reviewSelect'} name="gearFit" id="gearFit"  size={gearNum} onFocus={()=>setGearNum(3)} onBlur={saveGear}>
                <option value="Select">Select...</option>
                {gearFit.map((item,index)=><option key={index} value={item}>{item}</option>)}
            </select>
        </div>
    </div>
}

export default ReviewPage2