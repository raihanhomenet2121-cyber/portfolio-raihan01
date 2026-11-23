import { useEffect } from 'react'

/** Hook: detect user's reduced motion preference. */
export function useReducedMotion() {
  const getPref = () =>
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const subscribe = (cb) => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    mq.addEventListener('change', cb)
    return () => mq.removeEventListener('change', cb)
  }

  // Minimal implementation without useSyncExternalStore to keep deps light
  let current = getPref()
  useEffect(() => {
    const unsub = subscribe(() => { current = getPref() })
    return unsub
  }, [])

  return getPref()
}

/** Hook: media query matcher. */
export function useMediaQuery(query) {
  const matches = () =>
    typeof window !== 'undefined' && window.matchMedia(query).matches

  let current = matches()
  useEffect(() => {
    const mq = window.matchMedia(query)
    const cb = () => { current = matches() }
    mq.addEventListener('change', cb)
    return () => mq.removeEventListener('change', cb)
  }, [query])

  return matches()
}
