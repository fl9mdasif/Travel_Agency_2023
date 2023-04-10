import React from 'react';
import './BusinessSummery.styles.css'
import CountUp from 'react-countup';

const BusinessSummery = () => {
    return (
        <div className="BusinessSummery relative ">
            <div className="flex flex-wrap  justify-around">

                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='gift'></box-icon></div>
                    <div>
                        <h1 className='bs-h1 text-center  block'>
                            <CountUp start={0} end={25} delay={1}></CountUp><span className='text-base1'>+</span>
                        </h1>
                    </div>
                    <div><p className="bs-p text-center uppercase">Cities around world</p></div>
                </div>

                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='user'></box-icon></div>
                    <div>
                        <h1 className='bs-h1 text-center block'>
                            <CountUp start={0} end={50} delay={1}></CountUp><span className='text-base1'>+</span>
                        </h1>
                    </div>
                    <div><p className="bs-p text-center uppercase">Package Option</p></div>
                </div>

                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='truck'></box-icon></div>
                    <div>
                        <h1 className='bs-h1 text-center block'>
                            <CountUp start={0} end={200} delay={1}></CountUp><span className='text-base1'>+</span>
                        </h1>
                    </div>
                    <div><p className="bs-p text-center uppercase">Professional Staffs and Guide</p></div>
                </div>

                <div className="summery-container flex flex-col justify-center ">
                    <div className="flex justify-center"><box-icon type='solid' color='#912059' size='' name='star'></box-icon></div>
                    <div>
                        <h1 className='bs-h1 text-center block'>
                            <CountUp start={0} end={100} delay={1}></CountUp><span className='text-base1'>+</span>
                        </h1>
                    </div>
                    <div><p className="bs-p text-center uppercase">Resorts and Hotels</p></div>
                </div>

            </div>

        </div>
    );
};

export default BusinessSummery;