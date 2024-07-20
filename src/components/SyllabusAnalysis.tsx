"use client"
import React from 'react'
import { Progress } from "@/components/ui/progress"

const SyllabusAnalysis = () => {
    return (
        <div className='flex flex-col gap-9 p-5 border-2 border-gray-200 rounded-xl'>
            <h1 className='text-xl font-bold'>Syllabus Wise Analysis</h1>
            <div>
                <h1 className='my-3'>HTML Tools, Forms, History</h1>
                <div className='flex flex-row'>
                    <Progress value={80} />
                    <span className='text-blue-500 font-extrabold'>80%</span>


                </div>

            </div>
            <div>
                <h1 className='my-2'>Tags & Reference in HTML</h1>
                <div className='flex flex-row'>
                    <Progress value={60} />
                    <span className='text-orange-500 font-extrabold'>60%</span>

                </div>


            </div>
            <div>
                <h1 className='my-2'>Tables & References in HTML</h1>
                <div className='flex flex-row'>
                    <Progress value={24} />
                    <span className='text-red-500 font-extrabold'>24%</span>

                </div>


            </div>
            <div>
                <h1 className='my-2'>Tables & CSS Basics</h1>
                <div className='flex flex-row'>
                    <Progress value={96} />
                    <span className='text-green-500 font-extrabold'>96%</span>

                </div>


            </div>

        </div>
    )
}

export default SyllabusAnalysis
