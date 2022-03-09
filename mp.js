marked.setOptions({
  breaks: true
})

const render = new marked.Renderer();

function App() {
  const [text, setText] = React.useState(placeholder);

  return(
    <div className="text-center p-3">
      <h1 className="p-4">Markdown Previewer</h1>
      <textarea className="textarea" onChange={(e) => setText(e.target.value)} 
      value={text} rows="12" id="editor" name="text">
        </textarea>
      <h3 className="m-3">Output</h3>
      <Preview markdown={text}/>
    </div>
  )
}

function Preview({markdown}) {
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: marked(markdown, { renderer: render }),
      }}
    id="preview"
    >      
    </div>
  )
};
const placeholder =  `# *Hello!*
## Welecome to my \`Markdown Previewer\`

\`\`\`

  Would you like to see more projects by me such as:

  \`\`\`

  - **Games**
  - **Calculator**
  - **Diffrent types of webpages**

> Go to my [codepen](https://codepen.io/messimango)!
![Happy Face](https://m.media-amazon.com/images/I/51zLZbEVSTL._AC_SL1200_.jpg)

## Hope you enjoy this Markdown previewer!
Thank you,
Umang
`;
ReactDOM.render(<App/>, document.getElementById("watermelon"));