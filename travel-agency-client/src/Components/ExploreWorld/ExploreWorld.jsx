import React from 'react';
import { BsHandThumbsUpFill } from 'react-icons/bs';
import { AiTwotoneFlag } from 'react-icons/ai';
import { FaMapMarkedAlt } from 'react-icons/fa';
import { GiGreatPyramid, GiDeer, GiBinoculars, GiCampfire, GiCampingTent, GiSchoolBag } from 'react-icons/gi';

import './ExploreWorld.styles.css'
const ExploreWorld = () => {
    return (
        <div >
            <div className='flex flex-col items-center justify-center'>
                <div>
                    <h1 className='expoH1'> Explore World</h1>
                </div>
                <div>
                    <p className='expoP'>
                        Etiam ultricies nisi vel augue curabitur ullamcorper ultricies nisi.
                    </p>
                </div>
            </div>

            {/* cards */}
            <div className='ex-cont '>

                <div className=" explore-content flex items-start bg-white rounded-lg  p-6">
                    <div className="bg-base p-4 rounded mr-6"><BsHandThumbsUpFill size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Plan Adventure Guaranteed</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><AiTwotoneFlag size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Take Rare Path</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><FaMapMarkedAlt size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Organize with professional</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">

                    <div className="bg-base p-4 rounded mr-6"><GiGreatPyramid size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Near to nature</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><GiDeer size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Closer to wildlife</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><GiBinoculars size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Behold awesome scenary</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><GiCampfire size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Behold awesome scenary</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg p-6">
                    <div className="bg-base p-4 rounded mr-6"><GiSchoolBag size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-bold mb-2">Awesome adventure</h1>
                        <p className=" text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>

                <div className=" explore-content flex items-start bg-white rounded-lg   p-6">
                    <div className="bg-base p-4 rounded mr-6"><GiCampingTent size='1.5rem' color='white' /></div>
                    <div>
                        <h1 className="text-xl font-semibold mb-2">Nightout and camping</h1>
                        <p className="text-paraG">Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.</p>
                    </div>
                </div>





            </div>
        </div>
    );
};

export default ExploreWorld;