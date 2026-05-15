import Booking from '@/component/Booking';
import { auth } from '@/lib/auth';
import { bookingAllData } from '@/lib/data';
import { headers } from 'next/headers';
import React from 'react';

const page = async () => {

    const {token} = await auth.api.getToken({
        headers: await headers()
    })
    console.log(token)

    const data = await bookingAllData(token)

    return (
        <div>
            <div className='space-y-2 my-5'>
                <h2 className='text-2xl font-bold'>All Booking</h2>
                <h2 className='text-gray-400'>Hello All bookings Everyone</h2>
            </div>
            <div className='flex flex-col gap-5'>
                {
                    data.map(v => <Booking key={v._id} p={v}></Booking>)
                }
            </div>
        </div>
    );
};

export default page;