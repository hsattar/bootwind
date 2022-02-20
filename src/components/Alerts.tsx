import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function Alerts() {

    const [colors, setColors] = useState(['green', 'blue', 'indigo', 'purple', 'red', 'pink', 'yellow', 'gray'])

    const handleDelete = (deletedColor: string) => {
        setColors(colors => colors.filter(color => color !== deletedColor))
    }

    return (
        <>
        <h1 className="mt-4 mb-3 text-4xl text-center"><Link to="/">BOOTWIND</Link> - ALERTS</h1>
        {
            colors.map(color => (
                <div className={`bg-${color}-200 p-3 rounded-md my-3 flex justify-between`}>
                    <p className={`text-${color}-700`}>An alert message to indicate to the user</p>
                    <button onClick={() => handleDelete(color)} className={`text-${color}-700`}>✖</button>
                </div>
            ))
        }
        <pre className="code-editor">
        <code>
            {`
            const [colors, setColors] = useState(['green', 'blue', 'indigo', 'purple', 'red', 'pink', 'yellow', 'gray'])

            const handleDelete = (deletedColor: string) => {
                setColors(colors => colors.filter(color => color !== deletedColor))
            }`
            }
            {
            <div dangerouslySetInnerHTML={{ __html: `
            colors.map(color => (
                &#60;div className="bg-&#36;{color}-200 p-3 rounded-md my-3 flex justify-between"&#62;
                    &#60;p className="text-&#36;{color}-700"&#62;An alert message to indicate to the user&#60;/p&#62;
                    &#60;button onClick={() => handleDelete(color)} className="text-&#36;{color}-700"&#62;&#10006&#60;/button&#62;
                &#60;/div&#62;
            ))` 
            }}></div>
            }
        </code>
        </pre>
        </>
    )
}