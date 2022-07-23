import React from 'react';
import './PortfolioItem.css';

import { FiExternalLink } from 'react-icons/fi';
import { GoMarkGithub } from 'react-icons/go';

function PortfolioItem(props) {
    const { title, image } = props.item;
    return (
        <div className='portfolio-container'>
            <div className='portfolio-header'>
                <span>{title}</span>
                <div className='portfolio__links'>
                    <a href='http://'>
                        <GoMarkGithub size={25} />
                    </a>
                    <a href='http://'>
                        <FiExternalLink size={25} />
                    </a>
                </div>
            </div>
            <div className='portfolio__img'>
                <img src={image} alt='' />
            </div>
        </div>
    );
}

export default PortfolioItem;
