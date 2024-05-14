import React from 'react';

import {Container,Row} from "reactstrap";
import Helmet from "../Components/Helmet";
import CommonSection from "../Components/UI/CommonSection";
import BlogList from "../Components/UI/BlogList";

const Blog = () => {
  return (
    <Helmet title ="Blogs">
      <CommonSection title="Blogs"/>
      <section>
        <Container>
          <Row> 
            <BlogList />
            <BlogList />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};


