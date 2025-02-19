function Card() {
    return ( 
        <div>
            <div className="group 
          overflow-hidden
           relative shadow-lg max-w-xs">
                <a href="#" className="absolute z-10 top-0 bottom-0 left-0 right-0"></a>
                    <img
            className="block group-hover:opacity-40 transition-opacity duration-700"
            src="https://cdn.cloudflare.steamstatic.com/steam/apps/230410/hero_capsule.jpg?t=1637183731"
            />
                    <div
                        className="absolute bg-black flex items-center group-hover:-top-0 group-hover:opacity-100 duration-700 top-full right-0 w-full opacity-0 h-1/2 transition-all">
                        <div className=""
                            style={{
                                backgroundImage:
                                    "url('https://cdn.cloudflare.steamstatic.com/steam/apps/230410/ss_2d79448091149a8cc790b62e7422615a011d015a.600x338.jpg?t=1637183731')",
                            }}>
                            <video className="w-full" autoPlay loop="" preload="none" muted="muted">
                                <source
                                    src="https://cdn.cloudflare.steamstatic.com/steam/apps/256860783/microtrailer.webm?t=1637095595?v=3"
                                    type="video/webm" />
                            </video>
                        </div>
                    </div>
                    <div className="absolute  bg-gradient-to-br duration-700 from-green-800 to-blue-800 text-white block left-0 right-0 top-full text-base h-1/2 w-full opacity-50 
            transition-all group-hover:top-1/2 group-hover:opacity-100">
                        <div className="py-4 text-xs px-7">
                            <div className="text-xl font-bold">Warframe</div>
                            <div className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                                <span className="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">Developer:</span>
                                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                                                            <a href="https://store.steampowered.com/developer/DigitalExtremes?snr=1_4_600__629">Digital Extremes</a>												</span>
                            </div>
                            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                                <span className="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">Publisher:</span>
                                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                                                                <a href="https://store.steampowered.com/publisher/DigitalExtremes?snr=1_4_600__629">Digital Extremes</a>												</span>
                            </div>
                            <div className="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                                <span className="uppercase text-gray-400 whitespace-nowrap text-xs md:text-sm">All Reviews:</span>
                                <span className="whitespace-nowrap overflow-hidden overflow-ellipsis relative z-20">
                                                            <span className="text-positive">
                                                                Very Positive													</span>
                                <span className="text-gray-300">(2,912)</span>
                                </span>
                            </div>
                        </div>
                        <div className="absolute left-0  pl-7 pt-1">
                            <button href="https://store.steampowered.com/app/230410/Warframe/" className="px-4 text-base block text-green-300 rounded-sm border-2 border-opacity-20 bg-gradient-to-b duration-700 from-green-400 to-green-800">
                                Install now
                            </button>
                        </div>
                    </div>
            </div>
        </div> );
}

export default Card;