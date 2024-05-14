import React, {useEffect} from "react";
import { Container, Row, Col, FormGroup, Input } from "reactstrap";

import { useParams } from "react-router-dom";
import blogData from "../Components/Helmet/Helmet";
import {Link} from "react-router-dom";

import commentImg from "../assets/all-images/ava-1.jpg";

import "../styles/blog-details.css";
import Helmet from "../Components/Helmet";

const BlogDetails = () => {
    const {slug} =useParams();
    const blog =blogData.find((blog) => blog.title === slug);

    useEffect(() => {
        window.scrollTo(0,0);
    }, [blog]);

    return(
        <Helmet title={blog.title}>
            <section>
                <Container>
                    <Row>
                        <Col lg="8" md="8">
                            <div className="blog_details">
                                <img src={blog.imgUrl} alt="" className="w-100" />
                                <h2 className="section_title mt-4">{blog.title}</h2>

                                <div className="blog_publisher d-flex align-items-center gap-4 mb-4">
                                    <span className="blog_author">
                                        <i class="ri-user-line"></i> {blog.author}
                                    </span>

                                    <span className="d-flex align-items-center gap-1 section_description">
                                        <i class="ri-time-line"></i>{blog.time}
                                    </span>
                                </div>

                                <p className="section_description">{blog.description}</p>
                                <h6 className="ps-5 fw-normal">
                                    <blockquote className="fs-4">{blog.quote}</blockquote>
                                </h6>
                                <p className="section_description">{blog.description}</p>
                            </div>

                            <div className="comment_list mt-5">
                                <h4 className="mb-5">3 Commennts</h4>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}
