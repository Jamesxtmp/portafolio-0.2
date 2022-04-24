import { useEffect } from 'react'

import './skills.css'

const Skills = () => {
    const skillsByClass = document.getElementsByClassName('skill')
    let prevBrightness = -1
    let interval = null

    const moveToCorner = ( className ) => {
        const element = document.getElementsByClassName( className )[0]
        const coverage = document.getElementsByClassName('coverage')[0]
        const circle = document.getElementsByClassName('circle')[0]
        clearInterval( interval )
        
        element.style.bottom = '50%'
        element.style.left = '50%'
        element.style.fontSize = '300px'
        element.style.zIndex = `6`
        element.style.color = `var(--color-${className})`
        setTimeout(()=>{
            element.style.opacity = '.1'
            element.style.filter = `blur(2px)`
        }, 200)

        coverage.style.width = '100vh'
        coverage.style.height = '100vh'
        coverage.style.background = `linear-gradient(to top, var(--colorDark-${className}) , var(--color-${className}) 8%, var(--colorDark-${className})50%, var(--bg-secondary))`
        setTimeout(()=>{
            coverage.style.width = '100vw'
            coverage.style.borderRadius = '0'
        }, 200)
    }

    useEffect( () => {
        interval = setInterval(() => {
            const random = Math.random() * ( skillsByClass.length - 1) + 0; // Math.random() * (max - min) + min;
            let randomFix = random.toFixed()
            while( randomFix === prevBrightness ){
                const random = Math.random() * ( skillsByClass.length - 1) + 0; // Math.random() * (max - min) + min;
                randomFix = random.toFixed()
            }
            prevBrightness = randomFix

            skillsByClass[ randomFix ].style.opacity = '1'
            skillsByClass[ randomFix ].style.boxShadow = '0px 0px 100px 100px gray'
            setTimeout( () => {
                skillsByClass[ randomFix ].style.opacity = ''
                skillsByClass[ randomFix ].style.boxShadow = ''
            }, 500)
        },1500)
        return () => clearInterval( interval )
    }, [])


    return(
        <>
        <div className='wrap-skills' >
            <div onClick={ () => moveToCorner('html') } className="skill html fa-brands fa-html5"></div>
            <div onClick={ () => moveToCorner('css') } className="skill css fa-brands fa-css3-alt"></div>
            <div onClick={ () => moveToCorner('js') } className="skill js fa-brands fa-js-square"></div>
            <div onClick={ () => moveToCorner('react') } className="skill react fa-brands fa-react"></div>
            <div className='circle' ></div>
        </div>
        <div className='coverage'></div>
        </>  
    )
}
export default Skills