import React from 'react'
import Layout from '../Components/Layout'
import { useParams } from 'react-router'
// import useFetch from '../Hooks/useFetch'
import './ReviewDetails.css'
import { useQuery, gql } from '@apollo/client'


const REVIEW = gql`
    query GetReview($id: ID!) {
        review(id: $id) {
            data {
                id
                attributes {
                    title,
                    body,
                    rating
                }
            }
        }
    }
`



function ReviewDetails() {
    const {id} = useParams()
    // const { loading, error, data } = useFetch(`http://localhost:1337/api/reviews/${id}`)
    const { loading, error, data } = useQuery(REVIEW, {
        variables: {id: id}
    })

    if (loading) return <Layout><p>Loading...</p></Layout>
    if (error) return <Layout><p>Error: {error}</p></Layout>
    console.log(data.review.data.attributes)

    return (
        <Layout>
            <div className="detail-wrap">
                <div key={data.review.data.id} className="detail-review-card">

                    <h2>{data.review.data.attributes.title}</h2>

                    <div className="detail-rating">
                        <h5>Rating: </h5>
                        <p>{data.review.data.attributes.rating}/10</p>
                    </div>

                    <small>console list</small>

                    <p>{data.review.data.attributes.body}</p>
                </div>
            </div>
        </Layout>
    )
}

export default ReviewDetails
