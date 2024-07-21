"use client"
import { createContext, useState, Dispatch, SetStateAction } from 'react'


interface SkillContextType {
    rank: string;
    setRank: (rank: string) => void;
    precentile: string;
    setPercentile: (percentile: string) => void;
    score: string;
    setScore: (score: string) => void;
}
const SkillContext = createContext<SkillContextType>();

function SkillSummaryProvider({ children }: { children: React.ReactNode }) {
    const [rank, setRank] = useState<string>('4');
    const [percentile, setPercentile] = useState<string>('90');
    const [score, setScore] = useState<string>('12');

    const changeRank = (rank: string) => {
        setRank(rank)
    }
    const changePercentile = (percentile: string) => {
        setPercentile(percentile)
    }
    const changeScore = (score: string) => {
        setScore(score)
    }

    return (
        <SkillContext.Provider value={{ rank, changeRank, percentile, changePercentile, score, changeScore }}>
            {children}
        </SkillContext.Provider>
    )
}

export { SkillContext, SkillSummaryProvider }