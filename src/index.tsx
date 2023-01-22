import React, { useMemo, useState, useContext } from 'react'

type Props = {
  localization: any
  children: any
  defaultValue: string
  abbreviations?: Array<string>
}

const LocalizationContext = React.createContext({
  currentLocalization: null,
  locale: null,
  setCurrentAbbreviation: () => {},
  currentAbbreviation: null,
  abbreviations: [],
})

export const LocalizationProvider = ({ localization, children, defaultValue, abbreviations }: Props) => {
  const [currentAbbreviation, setCurrentAbbreviation] = useState(defaultValue)

  const valueObj = useMemo(
    () => ({
      currentLocalization: localization[currentAbbreviation],
      locale: localization[currentAbbreviation],
      setCurrentAbbreviation,
      currentAbbreviation,
      abbreviations,
    }),
    [currentAbbreviation, abbreviations, localization],
  )

  return (
    // @ts-ignore
    <LocalizationContext.Provider value={valueObj}>{children}</LocalizationContext.Provider>
  )
}

export const useLocalization = useContext(LocalizationContext)
