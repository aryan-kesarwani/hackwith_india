import { useEffect, useMemo, useState } from "react"
import { db } from "../utils/firebase"
import { onValue, ref } from "firebase/database"
import Chart from "./Chart";


export type DataType = {
    altitude: string,
    light_intensity: string;
    pH: string;
    pressure: string;
    temperature: string;
    timestamp: string;
    water_level: string;
}

export default function () {
    const [data, setData] = useState<DataType[]>([])

    const getData = async () => {
        const query = ref(db, 'ESP_RECIVER')
        if (query) {
            onValue(query, (snapshot) => {
                const data = snapshot.val()
                const dataArray = Object.keys(data).map((key) => data[key])
                setData(dataArray)
            })
        }
    }

    useEffect(() => {
        getData()
        const inrervalId = setInterval(() => {
            getData()
        }, 10000)

        return () => clearInterval(inrervalId)
    }, [])
    return (
        <div>
            <div className="flex flex-wrap justify-center items-center">
                <Chart parameter="altitude" data={data} />
                <Chart parameter="light_intensity" data={data} />
                <Chart parameter="pH" data={data} />
                <Chart parameter="pressure" data={data} />
                <Chart parameter="temperature" data={data} />
                <Chart parameter="water_level" data={data} />
            </div>
        </div>
    )
}