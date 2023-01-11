import React, { useMemo, useState, useContext } from 'react';

const LocalizationContext = React.createContext({
    currentLocalization: null,
    setCurrentAbbreviation: () => {},
    currentAbbreviation: null,
    abbreviations: [],
});

export const LocalizationProvider = ({
    localization,
    children,
    defaultValue,
    abbreviations
}) => {
    const [currentAbbreviation, setCurrentAbbreviation] = useState(defaultValue);

    const valueObj = useMemo(
        () => ({
            currentLocalization: localization[currentAbbreviation],
            setCurrentAbbreviation,
            currentAbbreviation,
            abbreviations
        }),
        [currentAbbreviation]
    );

    return (
        <LocalizationContext.Provider value={valueObj}>
            { children }
        </LocalizationContext.Provider>
    )
}

export const useLocalization = useContext(LocalizationContext);
