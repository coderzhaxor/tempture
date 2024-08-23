'use client'

import React, { useEffect, useState } from 'react';
import { Suspense } from 'react';
import { dataFake } from './api/data';
import dynamic from 'next/dynamic';
import Loading from '@/utils/Loading';

// Dynamic import to prevent SSR issues with ApexCharts
const ApexCharts = dynamic(() => import('react-apexcharts'), { ssr: false });

const TemperatureChart = () => {
    const [data, setData] = useState(dataFake);

    // const fetchData = async () => {
    //     try {
    //   const response = await fetch('/api/your-endpoint');
    //   const result = await response.json();

    //   setData((prevData) => [...prevData, result]);
    //         setData((prevData) => [...prevData, dataFake])

    //     } catch (error) {
    //         console.error('Error fetching data:', error);
    //     }
    // };

    // useEffect(() => {
    //     fetchData(); // Initial fetch
    //     const interval = setInterval(fetchData, 5000);

    //     return () => clearInterval(interval); // Cleanup interval on component unmount
    // }, []);

    const series = [
        {
            name: 'Temperature',
            data: data.map((d) => ({
                x: new Date(d.timestamp),
                y: d.temperature,
            })),
            color: "#EE6D7A",
        },
    ];

    const options = {
        dataLabels: {
            enabled: false
        },
        title: {
            text: 'Temperature Chart',
            align: 'center',
            margin: 10,
            offsetX: 0,
            offsetY: 0,
            floating: false,
            style: {
                fontSize: '18px',
                fontWeight: 600,
                color: '#ffffff80'
            },
        },
        chart: {
            type: 'area',
            width: '100%',
            height: 350,
            toolbar: {
                show: true,
                tools: {
                    download: true,
                    selection: false,
                    zoom: false,
                    zoomin: false,
                    zoomout: false,
                    pan: false,
                    reset: false,
                }
            }
        },
        xaxis: {
            type: 'datetime',
            labels: {
                style: {
                    fontSize: '12px',
                    colors: '#ffffff80',
                }
            }
        },
        yaxis: {
            title: {
                text: 'Temperature (°C)',
            },
        },
        stroke: {
            show: true,
            curve: 'smooth',
            width: 2,
        },
        colors: ['#E91E63'],
        tooltip: {
            x: {
                format: 'dd/MM/yy HH:mm:ss'
            },
        },

    };

    return (
        <div className='p-6 bg-base-200 text-black rounded-lg w-full min-h-[374px]'>
            <Suspense fallback={<Loading />}>
                <ApexCharts options={options} series={series} type="area" height={350} />
            </Suspense>
        </div>
    );
};

export default TemperatureChart;
