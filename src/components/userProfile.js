import React, { useState } from 'react';
import InfiniteScroll from "react-infinite-scroller";
import { useInfiniteQuery } from "react-query";


const initialUrl = "https://swapi.dev/api/people/";
const fetchUrl = async ( url ) => {
    const response = await fetch( url );
    return response.json();
};


const UserProfile = () => {
    const { data, error, isError, isLoading, isFetching, hasNextPage, fetchNextPage } = useInfiniteQuery(
        "usr-profile",
        ( { pageParam = initialUrl } ) => fetchUrl( pageParam ),
        {
            getNextPageParam: ( lastPage ) => lastPage.next || undefined,
        }
    );
    return (
        <div>userProfile</div>
    )
}

export default UserProfile