import TopBar from "../Components/TopBar";
import working from "./assests/working.jpg"

export default function ContactUs() {
    return (
        <>
            <TopBar pageTitle="Contact Us" currentActive="contact" />
            <div className="flex justify-between">
                <div >
                    <img
                        src={working}
                        alt="working_model"
                        width={500}
                        className="rounded-md" />
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}