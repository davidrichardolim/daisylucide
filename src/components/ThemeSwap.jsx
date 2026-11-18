import { Moon, Sun } from 'lucide-react'
import React, { useEffect, useState } from 'react'

const ThemeSwap = () => {
    const [isDark, setIsDark] = useState(false)

    const handleThemeSwap = () => {
        setIsDark(!isDark)
    }

    useEffect(() => {
        document.documentElement.dataset.theme = isDark ? 'dark' : 'nord'
    }, [isDark])

    if(isDark) {
        return <button className="btn btn-square" onClick={handleThemeSwap}>
        <Sun/>
    </button>
    }

    return <button className="btn btn-square" onClick={handleThemeSwap}>
        <Moon/>
    </button>
}


export default ThemeSwap