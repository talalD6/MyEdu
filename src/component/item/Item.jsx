import React from 'react'
import './item.css'

import star from './../../assets/icons/star.svg'
import halfstar from './../../assets/icons/halfStar.svg'
import blankstar from './../../assets/icons/blankStar.svg'
import { Link } from 'react-router-dom'

const Item = (props) => {
    return (
        <Link to={'/course/' + props.item.id}>
            <div className='item' onClick={() => window.scrollTo(0, 0)}>
                <div className="top">
                    <img className='item-image' src={props.item.image} />
                </div>
                <div className="down">
                    <h3 className='item-title'>{props.item.title}</h3>
                    <p className='item-description'>{props.item.littleDescription}</p>
                    <h4 className='item-creator'>{props.item.creator}</h4>
                    <div className="line" />
                    <div className="info">
                        <div className="price">
                            <p className="new-price">{props.item.new_props} Da</p>
                            <p className="old-price">{props.item.old_props} Da</p>
                        </div>
                        <div className="rating">
                            <div className="stars">
                                {
                                    props.item.rating === 1 ? <><img src={star} /> <img src={blankstar} /> <img src={blankstar} /> <img src={blankstar} /> <img src={blankstar} /></> :
                                        props.item.rating === 1.5 ? <><img src={star} /> <img src={halfstar} /> <img src={blankstar} /> <img src={blankstar} /> <img src={blankstar} /></> :
                                            props.item.rating === 2 ? <><img src={star} /> <img src={star} /> <img src={blankstar} /> <img src={blankstar} /> <img src={blankstar} /></> :
                                                props.item.rating === 2.5 ? <><img src={star} /> <img src={star} /> <img src={halfstar} /> <img src={blankstar} /> <img src={blankstar} /></> :
                                                    props.item.rating === 3 ? <><img src={star} /> <img src={star} /> <img src={star} /> <img src={blankstar} /> <img src={blankstar} /></> :
                                                        props.item.rating === 3.5 ? <><img src={star} /> <img src={star} /> <img src={star} /> <img src={halfstar} /> <img src={blankstar} /></> :
                                                            props.item.rating === 4 ? <><img src={star} /> <img src={star} /> <img src={star} /> <img src={star} /> <img src={blankstar} /></> :
                                                                props.item.rating === 4.5 ? <><img src={star} /> <img src={star} /> <img src={star} /> <img src={star} /> <img src={halfstar} /></> :
                                                                    <><img src={star} /> <img src={star} /> <img src={star} /> <img src={star} /> <img src={star} /></>

                                }
                            </div>
                            <p>{props.item.rating}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Item