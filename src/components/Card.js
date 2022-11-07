import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';

const Container = styled.div`
    background-color: var(--secondary-color);
    border-radius: 1rem;
    padding: 0.5rem;
    margin-bottom: 10px;    
    box-shadow:0 5px 5px rgba(212,185,150,0.5);
    transition: .5s;
    text-align: center;
    position: relative;

    :hover{
        transform: scale(0.9);
        background-color: rgba(255,255,255,0.8);
    }
`;

const CardImg = styled.img`
    width: 85%;
    height: 200px;
    border-radius: 1rem 1rem 0 0;
`;
const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
`;
const CardInfoHeader = styled.h2`
    font-size: 14px;
    margin-bottom: 32px;
`;
const CardInfoText = styled.p`
    position: absolute;
    bottom: 10px;
    left: 10px;
    right: 10px;
    background-color: var(--primary-color);
    color: var(--secondary-color);
    font-size: 13px;
    font-weight: bold;
    padding: 0.2rem;
`;

const Card = ( { books } ) => {
    console.log( books );
    const [show, setShow] = useState();
    const [bookItem, setItem] = useState();

    return (
        <>
            {
                books.map( ( book ) => {
                    let thumbNail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
                    let amount = book.saleInfo.listPrice && book.saleInfo.listPrice.amount;
                    console.log( thumbNail );
                    if ( thumbNail != undefined && amount != undefined ) {
                        return (
                            <>
                                <Container onClick={ () => { setShow( true ); setItem( book ) } }>
                                    <CardImg src={ thumbNail } alt="" />
                                    <CardInfo>
                                        <CardInfoHeader>{ book.volumeInfo.title }</CardInfoHeader>
                                        <CardInfoText>&#8377;{ amount }</CardInfoText>
                                    </CardInfo>
                                </Container>
                                <Modal show={ show } book={ bookItem } onClose={ () => setShow( false ) } />
                            </>
                        )
                    }
                } )
            }
        </>
    )
}

export default Card