import { useEffect } from 'react'

import './skills.css'

const Skills = () => {
    const skillsByClass = document.getElementsByClassName('skill')
    let prevBrightness = -1

    useEffect( () => {
        const interval = setInterval(() => {
            const random = Math.random() * ( skillsByClass.length - 1) + 0; // Math.random() * (max - min) + min;
            let randomFix = random.toFixed()
            while( randomFix === prevBrightness ){
                const random = Math.random() * ( skillsByClass.length - 1) + 0; // Math.random() * (max - min) + min;
                randomFix = random.toFixed()
            }
            prevBrightness = randomFix

            skillsByClass[ randomFix ].style.opacity = '100%'
            setTimeout( () => {
                skillsByClass[ randomFix ].style.opacity = ''
            }, 500)
        },1500)
        return () => clearInterval( interval )
    }, [])


    return(
        <div className='wrap-skills' >
            <div className="skill html fa-brands fa-html5"></div>
            <div className="skill css fa-brands fa-css3-alt"></div>
            <div className="skill js fa-brands fa-js-square"></div>
            <div className="skill react fa-brands fa-react"></div>
        </div>
    )
}
export default Skills