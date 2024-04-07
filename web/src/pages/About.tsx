
import TopBar from "../Components/TopBar"
import ESP from "./assests/esp.png"
import LORA from "./assests/lora.png"
import GY30 from "./assests/gy30.webp"
import model from "./assests/model.jpg"
import stats from "./assests/stats.jpg"

export default function About() {
    return (
        <>
            <TopBar pageTitle="About" currentActive="about" />
            <div className="flex">
                <div className="">
                    <div
                        className="m-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={ESP}
                            alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                ESP-32
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                ESP32 is a series of low-cost, low-power system on a chip microcontrollers with integrated Wi-Fi and dual-mode Bluetooth.
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>
                    </div>
                    <div
                        className="m-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={LORA}
                            alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                LoRa
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                It adopts advanced LoRa spread spectrum technology, with a communication distance of 10,000 meters. It has a strong ability of anti-jamming and has the function of air wake-up Consumption. The SX1278 RF module is mainly used for long-range spread spectrum communication, and it can resist Minimizing current consumption
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>
                    </div>

                    <div
                        className="m-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={GY30}
                            alt="GY30" />
                        <div className="flex flex-col justify-start p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                GY30
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                BH1750 module is a digital ambient light sensor, IIC I2C communication. Good for Arduino light detection.
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>
                    </div>
                    <div
                        className="m-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={model}
                            alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                Working Model
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                This is our final working model after assesmbling all the parts, now the device is ready to be planted in a farm and it will start collecting and sending data to the cloud for future processing.
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>
                    </div>
                    <div
                        className="m-2 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row ">
                        <img
                            className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                            src={stats}
                            alt="" />
                        <div className="flex flex-col justify-start p-6">
                            <h5
                                className="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                                Device collecting data realtime
                            </h5>
                            <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                                This is our final product connecting data live and plotting it on google maps while we were testing it.
                            </p>
                            <p className="text-xs text-neutral-500 dark:text-neutral-300">
                                Last updated 3 mins ago
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-[750px]">
                    <p className="text-2xl m-4 mb-2 font-semibold">About Our Product:</p>

                    <p className="m-4">Welcome to the future of farming with our innovative
                        IoT-based farming equipment! At our hackathon project,
                        we're excited to introduce a cutting-edge solution designed
                        to revolutionize agriculture by leveraging advanced technologies.</p>

                    <p className="m-4"> <p className="text-xl mb-2 font-bold">Key Features:</p>
                        <p>
                            <p className="font-semibold">IoT-based Farming Equipment:</p> We utilize state-of-the-art sensors, including ESP32, LORA, and GY30, to gather comprehensive data directly from the field.
                            <p className="mt-2 font-semibold">Real-time Data Collection:</p> Our equipment collects a wide range of data points, such as soil moisture levels, temperature, humidity, and more, in real-time.
                            <p className="mt-2 font-semibold">Cloud Integration:</p> Data collected by the sensors is seamlessly transmitted to a cloud-based Firebase storage system, ensuring secure and reliable storage.
                            <p className="mt-2 font-semibold">Dashboard Website:</p> Our intuitive dashboard website provides farmers with easy access to visualize and analyze the collected data, enabling informed decision-making.
                            <p className="mt-2 font-semibold">AI Predictive Modeling:</p> Leveraging AI models, our system analyzes historical data patterns to predict future farming actions. These predictions help farmers optimize their strategies for increased productivity and efficiency.

                        </p>
                    </p>
                    <p className="m-4"> <p className="text-xl mb-2">How It Works:</p>
                        <p>Data Collection:</p> Our IoT devices are deployed across the farm, collecting vital data from various sensors installed in the field.
                        <p>Data Transmission:</p> Collected data is transmitted wirelessly to the Firebase cloud storage, where it is securely stored and organized.
                        <p>Dashboard Visualization:</p> Farmers can access the data through our user-friendly dashboard website, offering insightful visualizations and analytics.
                        <p>AI Prediction:</p> By feeding the collected data into our AI model, the system generates predictive insights and recommendations tailored to each farmer's specific needs and conditions.
                    </p>
                </div>
            </div >
        </>
    )
}