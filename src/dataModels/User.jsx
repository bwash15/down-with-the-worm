export function User( { fname, lname, username, email, phone, address, city, state, zipcode, DOB } ) {
    return (
        <li>
            { `Name: ${fname} ${lname}` }
            <ul>
                <li>UserName: { username }</li>
                <li>Email: { email }</li>
                <li>Contact Phone: { phone }</li>
                <li>Date Of Birth: { DOB }</li>
            </ul>
            <br />
            <ul>
                { `Street Address: ${address}` }
                <li>City: { city }</li>
                <li>State: { state }</li>
                <li>ZipCode: { zipcode }</li>
            </ul>
        </li>
    );
}
