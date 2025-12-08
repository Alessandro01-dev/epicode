import { useEffect, useState } from "react"

export const useWindowSize = () => {

  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {

    let interval

    const handleWidthChange = () => {

      clearInterval(interval)

      interval = setInterval(() => {
        setSize(window.innerWidth)
      }, 200)

    }

    window.addEventListener('resize', handleWidthChange)


      return () => {

        clearInterval(interval)

        window.removeEventListener("resize", handleWidthChange)

      }

    }, [])

    return size

  }