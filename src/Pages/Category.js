import React from 'react'
import Layout from '../Components/Layout'
import { useParams } from 'react-router'
import { useQuery, gql } from '@apollo/client'
import { Link } from 'react-router-dom'
import './Playground.css'

const CATEGORY = gql`
    query GetCategory($id: ID!) {
        category(id: $id) {
            data {
                id
                attributes {
                    name
                  	reviews {
                    	data {
                            id
                            attributes {
                                title
                                rating
                                body
                                categories {
                                    data {
                                        id
                                        attributes {
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }`


function Category() {
    const {id} = useParams()
    
    const { loading, error, data } = useQuery(CATEGORY, {
        variables: {id: id}
    })


    if (loading) return <Layout><p>Loading...</p></Layout>
    if (error) return <Layout><p>Error: {error}</p></Layout>

    const {reviews} = data.category.data.attributes
    const {category} = data

    console.log(category, reviews)

    return (
        <Layout>
            <div className="playground_wrap">
                {/* <div className="review-cat">
                    <span>Filter reviews by Category: </span>
                    {dataCat.categories.data.map((category, index) => (
                        <Link key={category.id} to={`/playground/category/${category.id}`}>
                            {category.attributes.name}
                        </Link>
                    ))}
                </div> */}
                <h2 className="cat-playground_header">{category.data.attributes.name}</h2>
                {reviews.data.map((review, index) => (
                    <div key={review.id} className="review-card">

                        <h2>{review.attributes.title}</h2>

                        <div className="rating">
                            {index+1}.
                        </div>
                        {review.attributes.categories.data.map(c => (
                             <small>{c.attributes.name}</small>

                        ))}

                        <p>{review.attributes.body.substring(0, 200)}...</p>
                        <Link to={`/playground/details/${review.id}`}>Read more</Link>
                    </div>
                ))}
            </div>
        </Layout>
    )
}

export default Category
