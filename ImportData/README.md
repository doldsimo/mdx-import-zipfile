# Komponenten welche in einer Lerneinheit genutzt werden können

>Grundsätzlich kann die gesammte Syntax von reinem Markdown und reinem JSX verwendet werden.
>Werden besondere E-Learning Komponeten gebraucht müssen sich diese direkt in der React App befinden, oder im  [Komponeten Store](https://github.com/doldsimo/react-remote-learning-components) hinterlegt sein.

## Text

Überschrift 1:

`<h1>Überschrift</h1>`

`# Überschrift`

Überschrift 2:

`<h2>Überschrift</h2>`

`## Überschrift`

Überschrift 3:

`<h3>Überschrift</h3>`

`### Überschrift`

Überschrift 4:

`<h4>Überschrift</h4>`

`#### Überschrift`

Überschrift 5:

`<h5>Überschrift</h5>`

`##### Überschrift`

Überschrift 6:

`<h6>Überschrift</h6>`

`###### Überschrift`

## Bild

`<Image data="exampleURL"/>`

`<Image data="Base64DataString"/>`

## Youtube Video

`<YoutubeVideo url="exampleURL" />`

## Quiz

`Quiz quiz={quizDataObjekt}/>`

>*Quiz baut auf [react-quiz-component](https://github.com/wingkwong/react-quiz-component) auf. Um ein quizDataObjekt Objekt zu erstellen nutze: [Quiz Editor](https://wingkwong.github.io/react-quiz-form/). Hier zum [Editor Code](https://wingkwong.github.io/react-quiz-form/).*

## Benutzerdefinierte Komponenten

`<CustomComponent url="storeURLvonKomponente" type="cssKlassenname"/>`
>Hier kann die Store URL direkt mirgegeben werden. Der type wird als CSS Klassenname gesetzt.
