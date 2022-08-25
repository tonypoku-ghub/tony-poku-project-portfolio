import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    display: flex;
    // justify-content: space-between;
    width: 50vw;
    // border: 1pt red solid;
    min-height: 80vh;
    max-height: 100vh;
    margin: 2rem auto;
  }

  header {
    margin: 1rem -3rem;
  }

  .form-group {
    padding: 0.5rem 0;
  }

  .btn .btn-primary {
    // background-color: red !important;
  }
`;

function Contact(_props) {
  const [formValues, setFormValues] = useState({
    name: "-",
    email: "-",
    message: "-",
  });

  const [formErrors, setFormErrors] = useState({});

  const handleBlurEvent = (e) => {
    const { name, value } = e.target;
    console.log("{ name, value } ", { name, value });

    setFormValues({ ...formValues, [name]: value });
    console.log("formValues: ", formValues);

    const val = validate([name], value);

    console.log("Errors", val);

    setFormErrors(val);
  };

  const validate = (name, value) => {
    let error;

    console.log("name", name);
    console.log("[name]", [name]);
    console.log("value", value);

    if (!value) {
      error = `${name} is required`;
    }

    console.log("error", error);

    return { ...formErrors, [name]: error };
  };

  return (
    <Styles>
      <Container className='shadow-lg'>
        <section className='col-md-10 mx-auto'>
          <header>
            <h3>Contact</h3>
          </header>
          <Form>
            <div className='form-group'>
              <Form.Label htmlFor='name'>Name</Form.Label>
              <Form.Control
                type='text'
                name='name'
                className='form-control'
                id='name'
                placeholder='Name'
                onBlur={handleBlurEvent}
              />
            </div>
            <div className='form-group'>
              <Form.Label htmlFor='email'>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                className='form-control'
                id='email'
                aria-describedby='emailHelp'
                placeholder='Enter email'
                onBlur={handleBlurEvent}
              />
            </div>
            <div className='form-group'>
              <Form.Label htmlFor='message'>Message</Form.Label>
              <Form.Control
                as='textarea'
                rows={6}
                name='message'
                className='form-control'
                id='message'
                placeholder='Message'
                onBlur={handleBlurEvent}
              />
              <small id='messageHelp' className='form-text text-muted'>
                Message is required.
              </small>
            </div>
            <button type='submit' className='btn btn-primary float-right'>
              Submit
            </button>
          </Form>
        </section>
      </Container>
    </Styles>
  );
}

export default Contact;
