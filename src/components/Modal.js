import React from 'react';
import styled from 'styled-components';


const OverLay = styled.div`
    min-height: 100vh;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2));
    display: flex;
    align-items: center;
    justify-content: center;
`;
const OverLayInner = styled.div`
    background: white;
    width: 700px;
    height: 550px;
    padding: 1.5rem;
    position: relative;
    box-sizing: border-box;
    overflow: hidden;
    font-size: 1.3rem;
`;
const MdlButton = styled.button`
    position: absolute;

    top: 2rem;
    right: 2rem;
    outline: none;
    border: none;
    font-size: 17px;
    background-color: transparent;
`;
const InnerBox = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;
const InnerImg = styled.img`
    margin-right: 20px;
    width: 150px;
    height: 200px;

`;
const InnerInfo = styled.div`

`;
const InfoHeader = styled.h1`

`;
const InfoHeader3 = styled.h3`
    margin-top: 10px;
    color: green;
`;
const InfoHeader4 = styled.h4`
    color: blue;
`;
const DateSpan = styled.span`

`;
const MoreTag = styled.a`
    
`;
const MoreTagButton = styled.button`
    outline: none;
    border: none;
    width: 100px;
    border-radius: 5px;
    background-color: #24a0ed;
    color: white;
    font-weight: bold;
    padding: 0.3rem 0.5rem;
`;
const InnerDescription = styled.h4`
    margin-top: 2rem;
    text-align: justify;
    font-size: 13px;

`;



const Modal = ( { show, book, onClose } ) => {

    if ( !show ) return null;
    let thumbNail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

    return (
        <>
            <OverLay>
                <OverLayInner>
                    <MdlButton onClick={ onClose }><i class="fa-regular fa-circle-xmark"></i></MdlButton>
                    <InnerBox>
                        <InnerImg src={ thumbNail } alt='' />
                        <InnerInfo>
                            <InfoHeader>{ book.volumeInfo.title }</InfoHeader>
                            <InfoHeader3>{ book.volumeInfo.authors }</InfoHeader3><br />
                            <InfoHeader4>{ book.volumeInfo.publisher }<DateSpan>{ book.volumeInfo.publishedDate }</DateSpan></InfoHeader4>
                            <MoreTag href={ book.volumeInfo.previewLink }><MoreTagButton>More</MoreTagButton></MoreTag>
                        </InnerInfo>
                    </InnerBox>
                    <InnerDescription>"You will rarely succeed more than your level of personal development, because success is something you attract by the person you become."</InnerDescription>
                </OverLayInner>
            </OverLay>
        </>
    )
}

export default Modal