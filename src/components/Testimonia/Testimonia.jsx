import React, {useState} from 'react'
import './Testimonia.css'
import { testimonialsData } from '../../data/testimonialsData'
import leftArrow from '../../assets/leftArrow.png'
import rightArrow from '../../assets/rightArrow.png'
import {motion} from 'framer-motion'
const Testimonia = () => {
const transition = {type: 'spring',duration: 3}
  const [selected, setselected] = useState(0);
  const tlenth = testimonialsData.length;
  return (
   <div className="Testimonia" id='testimonials'>
    <div className="left-t">
        <span>Testimonia </span>
        <span className='stroke-text'>what they </span>
        <span>say about us</span>
        <motion.span
         key={selected}
         initial={{ opacity: 0, x: -100}}
         animate={{opacity: 1, x: 0}}
         exit={{opacity: 0, x: 100}}
         transition={transition}
        >
          { testimonialsData[selected].review }
        </motion.span>
        <span>
          <span style={ {color : 'var(--orange)'}}>
            {testimonialsData[selected].name}
          </span> {''}
          - {testimonialsData[selected].status}
        </span>
    </div>
    <div className="right-t">
      <motion.div
      initial={{opacity: 0,x: -100}}
      transition={{ ...transition, duration: 2}}
      whileInView={{opacity: 1, x: 0}}
      ></motion.div>
      <motion.div
       initial={{opacity: 0,x: 100}}
       transition={{ ...transition, duration: 2}}
       whileInView={{opacity: 1, x: 0}}
      ></motion.div>
    <motion.img
    key={selected}
  initial={{ opacity: 0, x: 100}}
  animate={{opacity: 1, x: 0}}
  exit={{opacity: 0, x: -100}}
  transition={transition}
    src={testimonialsData[selected].image} alt="" />
     <div className="arrows">
      <img
      onClick={()=> {
        selected===0
        ? setselected(tlenth - 1)
        : setselected((prev) => prev - 1);
      }}
      src={leftArrow} alt="" />
      <img 
      onClick={() => {
        selected ===tlenth - 1
        ? setselected(0)
        : setselected((prev => prev + 1))
        
      }}
      src={rightArrow} alt="" />
     </div>
    </div>
   </div>
  )
}

export default Testimonia