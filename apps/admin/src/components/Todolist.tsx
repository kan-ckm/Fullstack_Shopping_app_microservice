'use client'
import React, { useState } from 'react'
import { ScrollArea } from './ui/scroll-area'
import { Card } from './ui/card'
import { Checkbox } from './ui/checkbox'
import { Calendar } from './ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover'
import { Button } from './ui/button'
import { Calendar1Icon } from 'lucide-react'
import { format } from 'date-fns'

const Todolist = () => {
    const [date, setDate] = useState<Date | undefined>(new Date())

    const [open, setOpen] = useState(false)
    return (
        <div>
            <h1 className='text-lg font-semibold mb-6'>
                Todo List
            </h1>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button className='w-full'>
                        <Calendar1Icon className=' h-4 w-4' />
                        {date ? format(date, 'PPP') : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='p-0 w-auto' side='top'>
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={(date) => {
                            setDate(date)
                            setOpen(false)
                        }}

                    />
                </PopoverContent>
            </Popover>

            {/* list */}
            <ScrollArea className='max-h-[400px] mt-4 overflow-y-auto'>
                <div className='flex flex-col gap-2'>


                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' checked />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>

                    <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>   <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>   <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>   <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>   <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>   <Card className='p-4'>
                        <div className='flex items-center gap-4'>
                            <Checkbox id='item1' />
                            <label htmlFor='item1' className='text-sm text-muted-foreground'>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            </label>
                        </div>
                    </Card>
                </div>
            </ScrollArea>
        </div>
    )
}

export default Todolist     