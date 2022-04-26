export const moveToOpenSkill = ( className , extraDate ) => {
    
    const { interval } = extraDate
    const element = document.getElementsByClassName( className )[0]
    const coverage = document.getElementsByClassName('coverage')[0]
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