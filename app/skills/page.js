import Navbar from "./components/navbar";
export default function Skills() {
    return (
        <div>
            <Navbar/>
            <div className="flex items-center flex-col h-full justify-center w-full pt-44 px-20 py-11 bg-white">
                <h1 className="text-7xl text-orange-500 font-extrabold">SKILLS</h1>

                {/* First row of skills */}
                <div className="w-full h-full flex items-center px-16 py-16 gap-8 text-center">
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-gray-700">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-500">
                            <img src="/html.png" alt="HTML" className="object-contain w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-slate-200">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-200">
                            <img src="/css-3.png" alt="CSS 3" className="object-contain w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-yellow-200">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-slate-100">
                            <img src="/js.png" alt="JavaScript" className="object-contain w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Second row of skills */}
                <div className="w-full flex items-center px-16 py-16 gap-8 text-center mt-24">
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-blue-400">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-blue-400">
                            <img src="/typescript.png" alt="TypeScript" className="object-contain w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center rounded-md bg-slate-100">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-white">
                            <img src="/tail.png" alt="Tailwind CSS" className="object-contain w-full h-full" />
                        </div>
                    </div>
                    <div className="w-1/3 flex items-center justify-center rounded-md">
                        <div className="w-5/6 h-5/6 hover:w-11/12 hover:h-11/12 cursor-pointer bg-white">
                            <img src="/nextjs-13.png" alt="Next.js" className="object-contain w-full h-full" />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}