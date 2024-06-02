import { useState, useEffect } from "react";
import cardsData from "../assets/sampleData/data.js"; // Import card data
import imageData from "../assets/images/564931.jpg"; // Import image data
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faMapMarkerAlt, faCalendar } from "@fortawesome/free-solid-svg-icons";

const SampleCard1 = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state (3 seconds)
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        // Display loading animation
        return (
            <div className="flex justify-center gap-5">
                {[...Array(20)].map((_, index) => (
                    <div
                        key={index}
                        className="bg-white w-[300px] shadow-md hover:shadow-xl h-[400px] overflow-hidden p-4 transition duration-300 transform hover:scale-105"
                    >
                        <div className="animate-pulse bg-gradient-to-r from-gray-300 to-gray-400 h-full w-full rounded-md" />
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="flex justify-center gap-5">
            {cardsData.map((card, index) => (
                <div
                    key={index}
                    className="bg-white shadow-md p-4 m-2 w-[300px] h-[400px] hover:shadow-xl transition duration-300 transform hover:scale-105"
                >
                    <div className="w-full h-full relative">
                        {/* Card image */}
                        <img src={imageData} className="w-full h-full absolute rounded-md" alt="Card" />

                        {/* Overlay with gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-md">
                            <div className="absolute inset-0 flex flex-col items-center text-white text-xs top-8 gap-3">
                                {/* Card title */}
                                <div className="w-full pl-3 font-bold">
                                    {card.title}: {card.description}
                                </div>

                                {/* Additional information */}
                                <div className="w-full pl-3 flex-1 font-semibold">
                                    <div className="flex justify-between h-1/2">
                                        <div>
                                            <FontAwesomeIcon icon={faClock} className="text-[#74C0FC] mr-2" />
                                            2N/30
                                        </div>
                                        <div className="pr-3">
                                            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-[#74C0FC] mr-2" />
                                            Delhi
                                        </div>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon icon={faCalendar} className="text-[#74C0FC] mr-2" />
                                        30 May
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Price tag */}
                        <div className="absolute text-xs bg-yellow-400 rounded-md px-1 top-2 right-2">
                            <span className="font-bold">${card.price}</span>/- Onwards
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default SampleCard1;
