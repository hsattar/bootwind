import { componentCards } from "../data/componentCards"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className="container mx-auto text-center capitalize">
            <h1 className="mt-4 mb-3 text-5xl">BOOTWIND</h1>
            <h2 className="text-2xl uppercase">Creating Bootstrap Components Using Tailwind CSS</h2>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-6">
            {
                componentCards.map(component => (
                    <Link to={component.name} key={component.name}>
                        <div className="border p-3 rounded-md shadow-md hover:bg-gray-900 hover:text-gray-100 cursor-pointer h-24 sm:h-32 md:h-36 mx-3">
                            <p className="font-bold text-xl mb-2">{component.name}</p>
                            <p>{component.description}</p>
                        </div>
                    </Link>
                ))
            }
            </div>
        </div>           
    )
}