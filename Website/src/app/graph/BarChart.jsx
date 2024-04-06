import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS} from 'chart.js/auto'
import styles from "./barchart.module.css"
function BarChart({charData}) {
  return (
    <div className={styles.container}>
      <Line data={charData} />
    </div>
  )
}

export default BarChart
