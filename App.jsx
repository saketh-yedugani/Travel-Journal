import Header from "./src/components/Header"
import Entry from "./src/components/Entry"
import data from "./data"

export default function App(){
    
    const entryElements = data.map( (entry) => {
    return (

        <Entry id={Entry.id}
        entry={entry} />

    )

})
    return (
        <>
        <Header />
        <main className = "container">
            {entryElements}
        </main>
        </>
    ) }