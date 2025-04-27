import React from 'react'

const Cards = () => {
    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <div className='flex mt-14 gap-5 border border-gray-500 rounded-md shadow-md h-[300px] w-[500px]'>
                <img className='w-[200px] clip-path-trapezoid' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7K80SuPp6E0dfR6MJtPUdDax6B5afgiRqA&s' />

                <div className='w-[150px] flex flex-col'>
                    <div className='flex  gap-14 space-y-3'>
                        <label className='mt-4 uppercase'>
                            Input
                        </label>
                        <input type='date' className="border p-2 rounded-md border-gray-400" />
                    </div>
                    <div className='flex gap-5 py-5'>
                        <spna className="border bg-blue-800 shadow-md text-white rounded-3xl px-2 text-nowrap">Chip 1</spna>
                        <spna className="border bg-blue-800 shadow-md text-white  rounded-3xl px-2 text-nowrap">Chip 2</spna>
                        <spna className="border bg-blue-800 shadow-md text-white  rounded-3xl px-2 text-nowrap">Chip 3</spna>

                    </div>
                    <div className='space-y-2'>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 1'/>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 2'/>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 3'/>
                    </div>
                    <div className='flex justify-end ml-[250px] mt-5'>
                        <button className='bg-green-700  text-white px-2 py-1 justify-end  rounded-md'>Submit</button>
                    </div>
                </div>
            </div>


            <div className='flex mt-14 gap-5 border border-gray-500 rounded-md shadow-md h-[300px] w-[500px]'>
            <div className='w-[150px] flex flex-col'>
                    <div className='flex  gap-14 space-y-3'>
                        <label className='mt-4 uppercase'>
                            Input
                        </label>
                        <input type='date' className="border p-2 rounded-md border-gray-400" />
                    </div>
                    <div className='flex gap-5 py-5'>
                        <spna className="border bg-blue-800 shadow-md text-white rounded-3xl px-2 text-nowrap">Chip 1</spna>
                        <spna className="border bg-blue-800 shadow-md text-white  rounded-3xl px-2 text-nowrap">Chip 2</spna>
                        <spna className="border bg-blue-800 shadow-md text-white  rounded-3xl px-2 text-nowrap">Chip 3</spna>

                    </div>
                    <div className='space-y-2'>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 1'/>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 2'/>
                        <input type='text' className=" border p-1 border-gray-500 rounded-md"  placeholder='Enter name 3'/>
                    </div>
                    <div className='flex justify-end ml-[250px] mt-5'>
                        <button className='bg-green-700  text-white px-2 py-1 justify-end  rounded-md'>Submit</button>
                    </div>
                </div>
                <img className='w-[200px] clip-path-trapezoid2' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe7K80SuPp6E0dfR6MJtPUdDax6B5afgiRqA&s' />

           
            </div>
        </div>
    )
}

export default Cards
