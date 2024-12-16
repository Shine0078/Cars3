import Image from "next/image";

export default function Project() {
    return (
        <div>
            <div className="w-full h-full bg-slate-950 flex pb-24 flex-col items-center justify-center">
                <div className="w-full h-full flex pt-24 pb-20 items-center text-center justify-center">
                    <h1 className="text-7xl w-full mt-32 text-slate-500 font-extrabold">
                        MY <span className="text-7xl text-orange-500 font-extrabold">CAR PROJECTS</span>
                    </h1>
                </div>
                <div className="w-full h-full gap-16 flex-col items-center flex pt-32 bg-slate-950">

                    <h2 className="text-3xl mt-20 text-orange-500 font-bold">CAR SHOWROOM WEBSITE USING HTML & CSS</h2>
                    <a href="https://github.com/Shine0078/Car-Showroom-HTML-CSS.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold hover:text-blue-500">CLICK HERE TO SEE MY PROJECT</a>
                    <div className="w-1/2 h-1/3 bg-white hover:border-2 hover:border-black cursor-pointer">
                        <a href="https://github.com/Shine0078/Car-Showroom-HTML-CSS.git" target="_blank">
                            <Image src="/car-showroom-screenshot.PNG" className="w-full h-full" alt="Car Showroom Screenshot" width={500} height={300} />
                        </a>
                    </div>

                    <h2 className="text-3xl mt-10 text-orange-500 font-bold">CAR COMPARISON TOOL USING HTML, CSS & JS</h2>
                    <a href="https://github.com/Shine0078/Car-Comparison-Tool.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold hover:text-blue-500">CLICK HERE TO SEE MY PROJECT</a>
                    <div className="w-1/2 h-1/3 bg-blue-500 hover:border-2 hover:border-black cursor-pointer">
                        <a href="https://github.com/Shine0078/Car-Comparison-Tool.git" target="_blank">
                            <Image src="/car-comparison-tool-screenshot.PNG" className="w-full h-full" alt="Car Comparison Tool Screenshot" width={500} height={300} />
                        </a>
                    </div>

                    <h2 className="text-3xl mt-5 text-orange-500 font-bold">CAR DEALERSHIP INVENTORY MANAGEMENT SYSTEM</h2>
                    <a href="https://github.com/Shine0078/Car-Inventory-Management.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold hover:text-blue-500">CLICK HERE TO SEE MY PROJECT</a>
                    <div className="w-1/2 h-1/3 bg-yellow-500 hover:border-2 hover:border-black cursor-pointer">
                        <a href="https://github.com/Shine0078/Car-Inventory-Management.git" target="_blank">
                            <Image src="/car-inventory-screenshot.PNG" className="w-full h-full" alt="Car Inventory Management Screenshot" width={500} height={300} />
                        </a>
                    </div>

                    <h2 className="text-3xl mt-10 text-orange-500 font-bold">STATIC CAR INFO PAGE USING HTML, CSS & TYPESCRIPT</h2>
                    <a href="https://github.com/Shine0078/Car-Info-Page.git" target="_blank" className="text-xl text-center w-full text-slate-500 font-bold hover:text-blue-500">CLICK HERE TO SEE MY PROJECT</a>
                    <div className="w-1/2 h-1/3 bg-purple-500 hover:border-2 hover:border-black cursor-pointer">
                        <a href="https://github.com/Shine0078/Car-Info-Page.git" target="_blank">
                            <Image src="/car-info-page-screenshot.PNG" className="w-full h-full" alt="Car Info Page Screenshot" width={500} height={300} />
                        </a>
                    </div>

                </div>
            </div>
        </div>
    );
}
