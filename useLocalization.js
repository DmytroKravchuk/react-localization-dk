import React, { useMemo, useState, useContext } from 'react';

const LocalizationContext = React.createContext({
    currentLocalization: null,
    setCurrentAbbreviation: () => {},
    currentAbbreviation: null,
});

export const LocalizationProvider = ({
    localization,
    children,
    defaultValue,
}) => {
    const [currentAbbreviation, setCurrentAbbreviation] = useState(defaultValue);

    const valueObj = useMemo(
        () => ({
            currentLocalization: localization[currentAbbreviation],
            setCurrentAbbreviation,
            currentAbbreviation,
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
