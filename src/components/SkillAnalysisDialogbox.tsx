import React, { useContext } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";

import { SiHtml5 } from "react-icons/si";
import { Button } from './ui/button';

import { SkillContext } from '@/context/SkillSummaryProvider';

const SkillAnalysisDialogbox = () => {
    const { rank, changeRank, percentile, changePercentile, score, changeScore } = useContext(SkillContext)



    const handleRankChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeRank(event.target.value);
    };
    const handlePercentileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changePercentile(event.target.value);
    };
    const handleScoreChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        changeScore(event.target.value);
    };
    // Function to handle form submission
    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Perform your update logic here
        console.log("Rank:", rank);
        console.log("Percentile:", percentile);
        console.log("Score:", score);
    };

    return (
        <div>
            <Dialog>
                <DialogTrigger>
                    <Button className='bg-blue-900 text-white'>Update</Button>
                </DialogTrigger>
                <DialogContent>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <div className='flex flex-row justify-between my-3'>
                                <h1 className='text-xl font-bold'>Update scores</h1>
                                <SiHtml5 className='text-2xl text-orange-500' />
                            </div>
                            <form onSubmit={handleSubmit} className="my-4">
                                <div className='flex flex-row justify-between  items-center'>
                                    <div className="flex flex-row gap-2 items-center my-3 ">
                                        <span className='rounded-full p-2 bg-gray-200  w-10 h-10 justify-center items-center'>1</span>
                                        <h1>Update your <span className="font-semibold">Rank</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2 p-2"
                                        value={rank}
                                        onChange={handleRankChange}
                                    />
                                </div>
                                <div className='flex flex-row justify-between my-3'>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <span className='rounded-full p-2 bg-gray-200  w-10 h-10 justify-center items-center'>2</span>

                                        <h1 className='w-fit'>Update your <span className='font-semibold'>Percentile</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2 p-2"
                                        value={percentile}
                                        onChange={handlePercentileChange}
                                    />
                                </div>
                                <div className='flex flex-row justify-between my-3'>
                                    <div className="flex flex-row gap-2 items-center ">
                                        <span className='rounded-full p-2 bg-gray-200  w-10 h-10 justify-center items-center'>3</span>

                                        <h1>Update your <span className="font-semibold">Current Score (out of 15)</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2 p-2"
                                        value={score}
                                        onChange={handleScoreChange}
                                    />
                                </div>
                                <DialogFooter className="sm:justify-start flex flex-row-reverse gap-2  mt-3">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button type="submit" className='bg-blue-900 text-white'>
                                            Save
                                        </Button>
                                    </DialogClose>

                                </DialogFooter>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            {/* {
                rank && percentile && score &&
                <SkillTestMainContent rank={rank} percentile={percentile} score={score} />

            }
            [
            rank && percentile && score && <Dashboard rank={rank} percentile={percentile} score={score} />
            ] */}
            {/* <QuestionAnalysis score={score} /> */}
        </div>
    );
};

export default SkillAnalysisDialogbox;
