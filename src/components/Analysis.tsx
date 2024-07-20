import React from 'react'
import SyllabusAnalysis from './SyllabusAnalysis'
import QuestionAnalysis from './QuestionAnalysis'

const Analysis = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div>
                <SyllabusAnalysis />
            </div>
            <div>
                <QuestionAnalysis />
            </div>
        </div>
    )
}

export default Analysis
