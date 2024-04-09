'use client'

// for the icons
import {MdLightMode , MdDarkMode } from 'react-icons/md'
// for the next-themes
import { useTheme } from 'next-themes';
function DarkMode() {
    // for fetching the system theme and setting up the theme settings
    const { theme , setTheme , systemTheme } = useTheme();
    const currentTheme = theme === 'system' ? systemTheme : theme
  return (
    <div>
        {
            currentTheme === 'dark'? <MdLightMode onClick={() => setTheme('light')} className="h-6 w-6 cursor-pointer hover:text-amber-500" /> : <MdDarkMode onClick={() => setTheme('dark')} className="h-6 w-6 cursor-pointer hover:text-amber-500" />
        }
    </div>
  )
}

export default DarkMode