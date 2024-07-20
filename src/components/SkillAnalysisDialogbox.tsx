import React, { useState } from 'react';
import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { SiHtml5 } from "react-icons/si";
import { Button } from './ui/button';
import SkillTestMainContent from './SkillTestMainContent';
import QuestionAnalysis from './QuestionAnalysis';

const SkillAnalysisDialogbox = () => {
    const [rank, setRank] = useState('');
    const [percentile, setPercentile] = useState('');
    const [score, setScore] = useState('');

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
                            <div className='flex flex-row justify-around'>
                                <h1>Update scores</h1>
                                <SiHtml5 className='text-2xl text-orange-500' />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='flex flex-row justify-around'>
                                    <div className="flex flex-row">
                                        <span className='rounded-full p-2 bg-gray-200 '>1</span>
                                        <h1>Update your <span className="font-semibold">Rank</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2"
                                        value={rank}
                                        onChange={(e) => setRank(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-row justify-around'>
                                    <div className="flex flex-row">
                                        <span className='rounded-full p-2 bg-gray-200 '>2</span>
                                        <h1 className='w-fit'>Update your <span className='font-semibold'>Percentile</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2"
                                        value={percentile}
                                        onChange={(e) => setPercentile(e.target.value)}
                                    />
                                </div>
                                <div className='flex flex-row justify-around'>
                                    <div className="flex flex-row">
                                        <span className='rounded-full p-2 bg-gray-200 '>3</span>
                                        <h1>Update your <span className="font-semibold">Current Score (out of 15)</span></h1>
                                    </div>
                                    <input
                                        type="text"
                                        className="rounded-2xl border-gray-300 border-2"
                                        value={score}
                                        onChange={(e) => setScore(e.target.value)}
                                    />
                                </div>
                                <DialogFooter className="sm:justify-start flex flex-row gap-2">
                                    <DialogClose asChild>
                                        <Button type="button" variant="secondary">
                                            Close
                                        </Button>
                                    </DialogClose>
                                    <DialogClose asChild>
                                        <Button type="submit" variant="secondary">
                                            Save
                                        </Button>
                                    </DialogClose>

                                </DialogFooter>
                            </form>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <SkillTestMainContent rank={rank} percentile={percentile} score={score} />
            <QuestionAnalysis score={score} />
        </div>
    );
};

export default SkillAnalysisDialogbox;
