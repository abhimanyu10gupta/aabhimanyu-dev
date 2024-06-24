import Image from 'next/image'
import React from 'react'
import Arrow from '@/public/arrow.svg'
import LiveClock from '@/components/LiveClock';
import Link from 'next/link';

const LandingPage = () => {
    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        return `${date}/${month}/${year}`;
      }
  return (
    <div className='h-screen w-screen overflow-hidden absolute'>
        <div className='stripe animation absolute blur'>
        </div>
        <div className='flex w-screen h-screen text-white text-5xl flex-col blur-[2px] p-12 pl-12 pr-12 font-dance'>
                <div className='flex basis-1/12 justify-between '>
                    <div className='basis-1/6 '>
                        {getDate()}
                    </div>
                    <div className='hidden md:block '>
                        DAILY <br/> REMINDER
                    </div>
                    <div className=''>
                        <Link href='https://www.instagram.com/abhimanyu10gupta'>
                            @abhimanyu10gupta
                        </Link>
                    </div>
                    <div className='flex justify-end'>
                        <Link href='/'>
                            <Image 
                            src={Arrow}
                            alt=""
                            height={100}
                            width={100}
                            color='white'
                            />
                        </Link>

                    </div>
                </div>
                <div className='flex basis-5/6 justify-center flex-col m-auto font-play'>
                    <div className='text-[16rem] leading-none'>
                        DON&apos;T <span className='text-[12rem] leading-none font-dance'>stop</span>
                    </div>
                    <div className='text-[16rem] leading-none text-end'>
                        CREATING
                    </div>
                </div>
                <div className='flex basis-1/12 justify-between'>
                    <div className='hidden md:block'>
                        FULL STACK
                    </div>
                    <div className=''>
                     SOFTWARE <br /> DEVELOPER
                    </div>
                    <div className=''> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;©2024
                    </div>
                    <div className=''>
                        
                    </div>
                </div>
            </div>
    </div>
  )
}

export default LandingPage