import { useEffect } from 'react'

export default function MainCustomHook(count) {
    useEffect(() => {
        document.title = count;
    }, [count])
}
