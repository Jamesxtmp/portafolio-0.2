import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'


import { moveToOpenSkill } from './hooks/useMoveToOpenSkill'
import { setIntelvalBrightness } from './hooks/useSetIntelvalBrightness'

import './skills.css'

const Skills = () => {
    let interval = null

    useEffect( () => {
        interval = setIntelvalBrightness( interval )
        return () => clearInterval( interval )
    }, [])

    return(
        <>
        <div className='wrap-skills' >
            <div onClick={ () => moveToOpenSkill('html' , { interval }) } className="skill html fa-brands fa-html5"></div>
            <div onClick={ () => moveToOpenSkill('css' , { interval }) } className="skill css fa-brands fa-css3-alt"></div>
            <div onClick={ () => moveToOpenSkill('js' , { interval }) } className="skill js fa-brands fa-js-square"></div>
            <div onClick={ () => moveToOpenSkill('react' , { interval }) } className="skill react fa-brands fa-react"></div>
            <div className='circle' ></div>
        </div>
        <div className='coverage'>
            <Outlet />
        </div>
        </>  
    )
}
export default Skills