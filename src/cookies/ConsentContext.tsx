import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  clearFunctionalStorage,
  getConsent,
  setConsent,
  type ConsentChoice,
} from './consent'

interface ConsentContextValue {
  consent: ConsentChoice | null
  bannerVisible: boolean
  privacyOpen: boolean
  accept: () => void
  reject: () => void
  openPrivacy: () => void
  closePrivacy: () => void
}

const ConsentContext = createContext<ConsentContextValue | null>(null)

export function ConsentProvider({ children }: { children: ReactNode }) {
  const [consent, setConsentState] = useState<ConsentChoice | null>(getConsent)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const accept = useCallback(() => {
    setConsent('accepted')
    setConsentState('accepted')
  }, [])

  const reject = useCallback(() => {
    clearFunctionalStorage()
    setConsent('rejected')
    setConsentState('rejected')
  }, [])

  const value = useMemo(
    () => ({
      consent,
      bannerVisible: consent === null,
      privacyOpen,
      accept,
      reject,
      openPrivacy: () => setPrivacyOpen(true),
      closePrivacy: () => setPrivacyOpen(false),
    }),
    [accept, consent, privacyOpen, reject],
  )

  return <ConsentContext.Provider value={value}>{children}</ConsentContext.Provider>
}

export function useConsent(): ConsentContextValue {
  const ctx = useContext(ConsentContext)
  if (!ctx) throw new Error('useConsent must be used within ConsentProvider')
  return ctx
}
