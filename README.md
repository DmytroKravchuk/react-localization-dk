Version of React should be >= 16.8.0 (support hooks)

How to use:

1) Import provider

`import { LocalizationProvider } from LocalizationProvider`

2. Wrap your main component and provide props

Example:

 Just for example (better to put localization in JSON)

```
const localization = {
    en: {
        'title': 'Example title'
    },
    ua: {
        'title': 'Заголовок для тесту'
    }
}
```

```
<LocalizationProvider 
    defaultValue='en'
    abbreviations=['en', 'ua']
    localization={localization}
    >
    <App />
</LocalizationProvider>
```

3. Then you can use useLocalization inside child component

Example:

`import { useLocalization } from from 'LocalizationProvider'`

```
const { 
    locale,
    setCurrentAbbreviation,
    currentAbbreviation,
    abbreviations
     } = useLocalization();
```
`then you can use it like this:`

`<h2>{ locale.title }</h2>`

4. That's all you have full access to all localizations, where:
```
    locale - current localization object { propName: text, propName2: text, ... }
    setCurrentAbbreviation - function to change localization object, 
    Example: setCurrentAbbreviation('ua')
    currentAbbreviation - current abbrreviation, Example: 'en',
    abbreviations - array of your abbrivations, Example: ['en', 'ua', 'pl']
```
