import TopBar from "../Components/TopBar"
import Dashboard from "../Components/Dashboard"

export default function Home() {
    return (
        <>
            <TopBar pageTitle="Maggi Agro" currentActive="home" />
            <div className='flex p-4'>
                <Dashboard />
            </div>
        </>
    )
}