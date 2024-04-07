export default function ({ pageTitle, currentActive }: { pageTitle: string, currentActive: string }) {
    return <div>
        <div className="flex w-[75vw] justify-between items-center">
            <h1 className="p-4 mt-6 mb-16 text-3xl text-center">
                {pageTitle}
            </h1>
            <div className="w-[200px] navbar flex justify-between">
                <div>
                    <a href="/" className={`${currentActive === "home" ? "underline " : ""}`}>Home</a>
                </div>
                <div>
                    <a href="/about" className={`${currentActive === "about" ? "underline " : ""}`}>About</a>
                </div>
                <div>
                    <a href="/contact-us" className={`${currentActive === "contact" ? "underline " : ""}`}>Contact</a>
                </div>
            </div>
        </div>
    </div>
}