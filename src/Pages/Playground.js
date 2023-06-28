import React, {useState, useEffect} from 'react'
import './Playground.css'
import Layout from '../Components/Layout'
import HeaderHero from '../Components/HeaderHero'
// import useFetch from '../Hooks/useFetch'
import { Link } from 'react-router-dom'
import { useQuery, gql } from '@apollo/client'


const REVIEWS = gql`
    query GetReviews {
        reviews {
            data {
                id
                attributes {
                    title,
                    body,
                    rating
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
`

const CATEGORIES = gql`
    query GetCategories {
        categories {
            data {
                id,
                attributes {
                    name
                }
            }
        }
    }
`

export default function Playground() {
    // const { loading, error, data } = useFetch('http://localhost:1337/api/reviews')
    // const [data, setData] = useState(raw)
    const QueryMultiple = () => {
        const res1 = useQuery(REVIEWS)
        const res2 = useQuery(CATEGORIES) 

        return [res1, res2];
    }

    const [
        { loading: loadingRev, error: errorRev, data: dataRev },
        { loading: loadingCat, error: errorCat, data: dataCat }
    ] = QueryMultiple()
    
    // const { loading, error, data } = useQuery(REVIEWS)
    // const { loadingCat, errorCat, dataCat } = useQuery(CATEGORIES)

    
    if (loadingRev || loadingCat) return <Layout><p>Loading...</p></Layout>
    if (errorRev || errorCat) return <Layout><p>Error: {errorRev || errorCat}</p></Layout>
    console.log(dataRev)

    return (
        <Layout>
            <HeaderHero
                source = "/assets/bb1.jpg"
                alt = "Header image"
                headerText = "Coach J's Tips"
                subtext = "SOME MY THOUGHTS AND TIPS"
                position = "50% 30%"
            />
            <div className="playground_wrap">
                <div className="review-cat">
                    <span>Filter reviews by Category: </span>
                    {dataCat.categories.data.map((category, index) => (
                        <Link key={category.id} to={`/playground/category/${category.id}`}>
                            {category.attributes.name}
                        </Link>
                    ))}
                </div>
                {dataRev.reviews.data.map((review, index) => (
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
