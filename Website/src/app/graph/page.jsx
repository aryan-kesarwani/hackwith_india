"use client"
import React, { use } from 'react'
// import axios from 'axios'
import BarChart from "./BarChart"
import {UserData} from "./Data"
function page() {
// Your component
const [userData, setUserData] = React.useState({
  labels: Object.keys(UserData[0].ESP_RECIVER).map((key) => UserData[0].ESP_RECIVER[key].timestamp),
  datasets: [
    {
      label: 'Light_intensity[',
      data: Object.keys(UserData[0].ESP_RECIVER).map((key) => UserData[0].ESP_RECIVER[key].light_intensity),
    },
  ],
});

  console.log(userData);

  return (
    <div className=''>
      <BarChart charData={userData} />
    </div>
  )
}

export default page



// const [userData,setuserData] = React.useState([]);
// React.useEffect(()=>{
//     ;(async  () => {
//             try {
              
//               const response =   await axios.get("https://pokeapi.co/api/v2/pokemon/1")
//               console.log(response.data);
//               setuserData(response.data.name)
//             } catch (error) {
                
//             }
//          }
//     )()
// },[])
