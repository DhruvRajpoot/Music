import React from 'react'
import { BackHomeBtn, Heading, PageNotFoundContainer, SubHeading } from './PageNotFound.style'

const PageNotFound = () => {
  return (
    <PageNotFoundContainer>
      <Heading>404</Heading>
      <SubHeading>Sorry, Page not found</SubHeading>
      <BackHomeBtn onClick={()=>{window.location.href='/'}}>Back to Home</BackHomeBtn>
    </PageNotFoundContainer>
  )
}

export default PageNotFound
