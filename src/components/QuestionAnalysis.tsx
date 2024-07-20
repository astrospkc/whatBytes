"use client"
import React from 'react'
import { PieChart } from './PieChart'

const QuestionAnalysis = ({ score }) => {

    if (score == undefined) {

        score = 12
    }

    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>QuestionAnalysis</h1>
            <div>
                <p>
                    <span className='font-semibold'>You scores {score} question correct out of 15.</span> However it will needs some improvements
                </p>
                <PieChart score={score} />
            </div>

        </div>
    )
}

export default QuestionAnalysis
