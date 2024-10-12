export default function Contact() {
    return (
        <div className="w-[90%] mx-auto max-w-6xl my-16 rounded-xl p-10 flex flex-col items-center bg-gradient-to-r from-zinc-900 to-[#0d0c0d]">
            <h1 className="text-4xl text-center font-bold mt-5">Elevate your business with us</h1>
            <div className="mt-10 max-w-[500px] text-center mx-auto">
                <p>Drop your email below to get started with your project, We will get back to you within 24 hours</p>
                <div className="flex flex-col items-center justify-center w-full mx-auto mt-10">
                <div className="relative w-full">
                    <input type="text" placeholder="Enter your email" className="w-full text-[1rem] px-10 py-5 pr-40 rounded-full bg-transparent border border-gray-300" />
                    <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#deff00] text-black font-semibold px-6 py-3 rounded-full">Get Notified</button>
                </div>
            </div>
        </div>
        </div>
    )
}       