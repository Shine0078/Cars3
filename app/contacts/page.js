import Navbar from "../components/navbar";
import Image from "next/image";

export default function Contact() {
    return (
        <div>
            <Navbar />
            <div className="w-full h-full flex flex-col pb-40 items-center justify-center pt-40">
                <h1 className="text-7xl font-extrabold text-zinc-500">CONTACT <span className="text-7xl font-extrabold text-orange-500">US</span></h1>
                <p className="text-lg mt-5 text-slate-500 font-bold text-center">"I'm always open to new opportunities, collaborations, and exciting projects. Whether you have a question, a project idea, or just want to say hi, feel free to reach out!"</p>
                
                {/* Contact Details */}
                <div className="w-full flex items-center justify-center gap-10 pt-20 text-center">
                    <div className="w-20 h-20 flex items-center justify-center">
                        <Image src="/gmail.png" alt="Gmail" width={60} height={60} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-red-600">Email Address</h1>
                        <a className="text-base text-zinc-500" href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noopener noreferrer">Shine0078@gmail.com</a>
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                        <Image src="/github.png" alt="GitHub" width={60} height={60} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-black">GitHub Account</h1>
                        <a className="text-base text-zinc-500" href="https://github.com/Shine0078" target="_blank" rel="noopener noreferrer">https://github.com/Shine0078</a>
                    </div>
                </div>

                <div className="w-full flex items-center justify-center gap-10 pt-20 text-center">
                    <div className="w-20 h-20 flex items-center justify-center">
                        <Image src="/linkedin-.webp" alt="LinkedIn" width={60} height={60} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-blue-500">LinkedIn Account</h1>
                        <a className="text-base text-zinc-500" href="https://www.linkedin.com/in/Samuel Abaham-57a8a1335" target="_blank" rel="noopener noreferrer">www.linkedin.com/in/Samuel Abaham-57a8a1335</a>
                    </div>
                    <div className="w-20 h-20 flex items-center justify-center">
                        <Image src="/whatsapp.png" alt="WhatsApp" width={60} height={60} />
                    </div>
                    <div>
                        <h1 className="text-3xl font-extrabold text-green-500">WhatsApp Number</h1>
                        <a className="text-base text-zinc-500" href="tel:+923011061774">+92 301-1061774</a>
                    </div>
                </div>
            </div>
        </div>
    );
}