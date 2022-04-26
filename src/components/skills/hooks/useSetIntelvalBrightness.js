export const setIntelvalBrightness = ( interval ) => {
    const skillsByClass = document.getElementsByClassName('skill')
    let prevBrightness = -1

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
    return interval
}