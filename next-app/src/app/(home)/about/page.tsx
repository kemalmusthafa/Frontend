import { Metadata } from "next"

export const metadata: Metadata = {
    title : 'About',
    description : 'About Page'
}

export default function AboutPage () {
    return (
        <div className="bg-black text-center text-white">
            About Page
        </div>
    )
}