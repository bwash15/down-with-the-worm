
const FetchData = async ( URL ) => {
    const response = await fetch( URL );
    return response.json();
}

export default FetchData