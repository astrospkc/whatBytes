"use client"
import React, { useContext } from 'react'
import { PieChart } from './PieChart'
import { SkillContext } from '@/context/SkillSummaryProvider'

const QuestionAnalysis = () => {

    const { score } = useContext(SkillContext)

    return (
        <div>
            <h1 className='text-xl font-bold mb-4'>QuestionAnalysis</h1>
            <div>
                <p>
                    <span className='font-semibold'>You scores {score} question correct out of 15.</span> However it will needs some improvements
                </p>
                {/* <PieChart score={score} />
                 */}
                <PieChart />
            </div>

        </div>
    )
}

export default QuestionAnalysis
