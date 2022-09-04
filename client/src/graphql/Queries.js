import { gql } from '@apollo/client'

// GraphQL query to fetch the data
export const GET_PHONE_DATA = gql`
    query {
        phonebookData {
        name
        phone
        }
    }
`;
