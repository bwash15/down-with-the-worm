import React, { useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
//import { BooksAxios } from '../hooks/axios';
import axios from 'axios';

const Container = styled.div`
    display: flex;   
    flex-direction: column;
    justify-content: space-evenly;
    
`;
const MainHeader = styled.h1`
    display: flex;    
    padding: 100px;
    width: 100%;
    height: 800px;
    color: var(--secondary-color);
    box-shadow: 0 5px 10px var(--secondary-color);
    position: relative;
    align-items: center;

    ::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)),url(../antiqueBooks.png);
        clip-path: circle(60% at left 300px);
        z-index: -1;
    }
`;
const RowOne = styled.div`
    display: flex;
    flex-direction: column;

`;
const MainH1 = styled.h1`
    font-size: 3rem;
    text-align: center;
    margin-left: 155px;    
`;
const RowTwo = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;    
    padding: 0px 350px; */

    position: absolute;
    top: 10px;
    right: 25rem;
    text-align: center;
`;
const R2H2 = styled.h2`
    font-size: 3rem;
    margin-top: 20px;
    margin-bottom: 15px;
`;
const Search = styled.div`
`;
const BookInput = styled.input`
    height: 30px;
    width: 40rem;
    font-size: 18px;
    border-radius: 10px;
    outline: 0;
    font-weight: bold;
`;
const BookInputButton = styled.button`
   height: 30px;
   width: 30px;
   margin: 10px;
   border-radius: 10px;
`;
const BookShelvesImage = styled.img`
    margin-top: 30px;
`;
const BookResultsContainer = styled.div`
    width: 65%;
    margin: 0 auto;
    margin-top: 25px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 0.5fr));
    grid-gap: 20px; 
    box-sizing: border-box; 
`;

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=`;
const API_KEY = `AIzaSyBAw-J_kfoQC5uS2dLRR-qV8W6ZYjLPfq8`;
const MAX_RESULTS = `&maxResults=40`;

const Main = () => {

    const [search, setSearch] = useState();
    const [bookData, setBookData] = useState( [] );

    const searchBook = ( evt ) => {
        if ( evt.key === "Enter" ) {
            console.log( "Enter Pressed" )
            axios
                .get( BASE_URL + search + `&key=${API_KEY} + ${MAX_RESULTS}` )
                .then( res => setBookData( res.data.items ) )
                .catch( err => console.error( err ) );
        }
    }

    return (
        <Container>
            <MainHeader>
                <RowOne>
                    <MainH1>A Room without books is like<br /> a body without a soul.</MainH1>
                </RowOne>
                <RowTwo>
                    <BookShelvesImage src='./childrensBooks.png' alt='' />
                    <R2H2>Find Your Book</R2H2>
                    <Search>
                        <BookInput type="text" placeholder="Enter your Book Name"
                            value={ search } onChange={ e => setSearch( e.target.value ) } onKeyPress={ searchBook }></BookInput>
                        <BookInputButton><i class="fa-solid fa-search"></i></BookInputButton>
                    </Search>
                </RowTwo>
            </MainHeader>
            <BookResultsContainer>
                <Card books={ bookData } />
            </BookResultsContainer>
        </Container>
    )
}

export default Main