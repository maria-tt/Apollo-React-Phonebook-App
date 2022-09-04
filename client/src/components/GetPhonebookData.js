import React, {useEffect, useState} from 'react'
import { useQuery } from '@apollo/client'
import { GET_PHONE_DATA } from '../graphql/Queries'
import PhonebookView from './PhonebookView';

// Executes the GraphQL query
export default function GetPhonebookData() {

    const {error, data, loading} = useQuery(GET_PHONE_DATA);

    const [phonebookData, setPhonebookData] = useState([]);

    useEffect( ()=> {
        if (data) {
            setPhonebookData(data.phonebookData);
        } 
    }, [data]);

    if (loading) return <div>Loading...</div>
    if (error) return <div>Error: </div>

    return <div>
        <PhonebookView data={phonebookData} />
    </div>;
}
