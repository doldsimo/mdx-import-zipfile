# Example learning units

Each folder represents a lesson. Since zip files have to be imported into the reading application, this zip file can be found in the respective folder.

For example try to import one of this zip learning units:

- `BlueprintLesson/BlueprintLesson.zip`
- `EnglishVocabulary/EnglishVocabulary.zip`
- `MathAdditionSubtraction/MathAdditionSubtraction.zip`

Try it out in the [reading application](https://doldsimo.github.io/mdx-import-zipfile/).


## How are learning units structured/built up?

A learning unit must be structured as follows:
```
ExampleLesson
└───pages
│   │   0_Page1.mdx
│   │   1_Page2.mdx
│   │   2_Page3.mdx
│   │   ...
│   │   n_PageN.mdx
│   
└───config.json 
```
In the MDX files, the respective page content is within the ./pages folder. The config.js is responsible for metadata about the learning unit.
If a learning unit is integrated into the reading application in this form, the reading application can display this unit correctly.

In order to create your own suitable learning unit, any example learning unit can be copied and adapted as desired.

## Components that can be used in a learning unit

>In principle, the entire syntax of pure Markdown and pure JSX can be used.

>If special e-learning components are needed, they must be located directly in the React app or stored in the [component store](https://github.com/doldsimo/react-remote-learning-components).

## Text

Heading 1:

`<h1>Heading</h1>`

`# Heading`

Heading 2:

`<h2>Heading</h2>`

`## Heading`

Heading 3:

`<h3>Heading</h3>`

`### Heading`

Heading 4:

`<h4>Heading</h4>`

`#### Heading`

Heading 5:

`<h5>Heading</h5>`

`##### Heading`

Heading 6:

`<h6>Heading</h6>`

`###### Heading`

> For more markdown informations read [this](https://www.markdownguide.org/basic-syntax/) article.

## Image

`<Image data="exampleURL"/>`

`<Image data="Base64DataString"/>`

## Youtube Video

`<YoutubeVideo url="exampleURL" />`

## Quiz

`Quiz quiz={quizDataObject}/>`

>*Quiz is build up on [react-quiz-component](https://github.com/wingkwong/react-quiz-component). To create a quizDataObject object use: [Quiz editor](https://wingkwong.github.io/react-quiz-form/).*

## Custom Components

`<CustomComponent url="storeUrlFromComponent" type="cssClassName"/>`
>The store URL can be given directly here. The type is set as a CSS class name.
