import React from 'react';
import App from "@/Layouts/App";
import {Head} from '@inertiajs/inertia-react';
import Container from "@/Layouts/Container";
import {floor} from "lodash/math";

export default function Dashboard({router,rsc,interfaces,logs,totalLogs,traffic}) {

    function formatBytes(bytes,decimals) {
        if(bytes == 0) return '0 Bytes';
        var k = 1024,
            dm = decimals || 2,
            sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
            i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
    }

    const memoryUsage = rsc[0].totalMemory - rsc[0].freeMemory ;
    const memoryMbUsage = formatBytes(memoryUsage);
    const memoryPercentUsage = memoryUsage / rsc[0].totalMemory * 100;
    const hddUsage = rsc[0].totalHdd - rsc[0].freeHdd ;
    const hddMbUsage = formatBytes(hddUsage);
    const hddPercentUsage =  hddUsage / rsc[0].totalHdd * 100;

    return (
        <>
            <Head title={router.name} />
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    <div className='w-full grid grid-cols-1 gap-2'>
                        <div>
                            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                                <div className='rounded-xl bg-blue-300/50'>
                                    <div className='flex p-4'>
                                        <span className='px-3 py-2.5 shadow rounded-lg bg-blue-400/50 text-blue-700 font-medium'>Rp</span>
                                        <div className='ml-2 text-blue-700'>
                                            <div className='text-xs'>Pemasukan Harian</div>
                                            <div className='font-medium text-lg'>500.000</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='rounded-xl bg-green-100'>
                                    <div className='flex p-4'>
                                    <span className='px-2.5 py-2.5 shadow rounded-lg bg-green-400/50 text-white font-medium'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-green-700">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
                                        </svg>
                                    </span>
                                        <div className='ml-2 text-green-700'>
                                            <div className='text-xs'>Menunggu Pembayaran</div>
                                            <div className='font-medium text-lg'>Rp. 1.680.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="shadow-lg rounded-lg overflow-hidden">
                            <div className="py-3 px-5 bg-amber-100 text-amber-700">Info Server</div>
                            <div className={'px-5 my-2'}>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium font-size-10 text-blue-700">CPU</span>
                                    <span className="text-sm font-medium text-blue-700">{rsc[0].cpuLoad}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-blue-600 h-1.5 rounded-full mb-2" style={{width: `${rsc[0].cpuLoad}%`}}></div>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium font-size-10 text-red-700">RAM Usage: {memoryMbUsage} </span>
                                    <span className="text-sm font-medium text-red-700">{floor(memoryPercentUsage)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-red-600 h-1.5 rounded-full mb-2" style={{width: `${floor(memoryPercentUsage)}%`}}></div>
                                </div>
                                <div className="flex justify-between mb-1">
                                    <span className="text-base font-medium font-size-10 text-green-700">HDD Usage: {hddMbUsage}</span>
                                    <span className="text-sm font-medium text-green-700">{floor(hddPercentUsage)}%</span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-1.5">
                                    <div className="bg-green-600 h-1.5 rounded-full mb-2" style={{width: `${floor(hddPercentUsage)}%`}}></div>
                                </div>
                            </div>
                            <div className={'py-4 px-5'}>
                               <h4 className={'font-semibold'}>Traffic Monitoring Interface</h4>
                                <hr/>
                               {/*<TrafficChart/>*/}
                            </div>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-lg p-4'>
                        <div className="text-center">
                            <p className='text-sm font-light text-gray-800/80'>Total Pemasukan</p>
                            <p className='text-3xl font-extrabold text-gray-600'>Rp. 2.600.700</p>
                            <p className='text-md font-extralight text-gray-300'>20 Jan, 2021 - 31 Feb, 2022</p>
                        </div>
                        <div className='flex items-center justify-center mt-4 mb-4'>
                        <span className='bg-blue-100/50 px-1 py-1 rounded-lg group hover:bg-blue-500 transition duration-200 ease-in-out'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-500/70 hover:text-white transition duration-200 ease-in-out" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                            </svg>
                        </span>
                        </div>
                        <div className='border-t'></div>
                    </div>
                </div>
            </Container>
        </>
    );
}
Dashboard.layout = page => <App children={page}/>
