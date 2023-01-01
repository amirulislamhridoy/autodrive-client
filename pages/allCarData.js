import React from 'react';
import { useQuery } from 'react-query';
import Head from "next/head";
import Navbar from "../components/Navbar";
import CarShortData from '../components/CarShortData';
import Link from 'next/link';

const AllCarData = () => {
    const { isLoading, error, data: cars } = useQuery('repoData', () =>
        // if I want to use dependence this time will be (useQuery(['repoData', dependence items],.....))
        fetch('http://localhost:3000/api/carData').then(res =>
            res.json()
        )
    )
    return (
        <main>
            <Head>
                <title>All Car Data</title>
            </Head>
            <Navbar>All Car Data</Navbar>
            <section className='bg-[#f4f6fa]'>
                <div className='max-w-7xl mx-auto pt-20 pb-16'>
                    <h1 className='text-5xl text-center font-bold'>WE OFFER BEST CAR</h1>
                    <p className='text-center mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                    <div className='grid grid-cols-2 gap-4 mt-8'>
                        {cars?.map((car, i) => <CarShortData key={i} car={car}></CarShortData>)}
                    </div>
                    <div className='mt-5 text-center'><Link className='text-2xl border-b-2 border-[#ffc947] text-[#474FA0] hover:border-[#474FA0] pb-2' href='http://localhost:3000/' as=''>Back to home page &gt;</Link></div>
                </div>
            </section>
        </main>
    );
};

export default AllCarData;
