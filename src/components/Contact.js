import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import styled from "styled-components";

const Styles = styled.div`
  .container {
    display: flex;
    max-width: 80vw;
    width: 50vw;
    // border: 1pt red solid;
    min-height: 50vh !important;
    max-height: 70vh;
    margin: 2rem auto;
  }

  section {
    padding: 3rem;
    margin: 1rem;
  }

  header {
    margin: 1rem -3rem;
  }

  .form-group {
    padding: 0.5rem 0;
  }
`;

function Contact(_props) {
  const [formValues, setFormValues] = useState({
    username: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});

  const [buttonDisabled, setButtonDisabled] = useState(true);

  const handleBlurEvent = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    console.log("e.target ", e.target);
    console.log("{ name, value } ", { name, value });

    setFormValues({ ...formValues, [name]: value });
    console.log("formValues: ", formValues);

    if (isValidForm(name, value)) {
    }
  };

  const isValidForm = (name, value) => {
    let error;

    console.log("name", name);
    console.log("value", value);
    console.log("missingData? ", !value);

    if (!value) {
      error = `${name} is required`;
      console.log("error - ", error);
      setFormErrors({ ...formErrors, [name]: error });
    } else {
      delete formErrors[name];
    }

    console.log(
      "isEmail = " +
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value)
    );

    if (
      name === "email" &&
      !formErrors?.email &&
      !/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(value)
    ) {
      error = `Invalid ${name} format`;
      console.log("error - ", error);
      setFormErrors({ ...formErrors, [name]: error });
    } else {
      delete formErrors[name];
    }

    console.log("formErrors", formErrors);

    return Object.keys(formErrors).length === 0;
  };

  useEffect(() => {
    console.log("useEffect called");
    if (
      Object.keys(formErrors).length === 0 &&
      !Object.values(formValues).some((item) => !item)
    ) {
      setButtonDisabled(false);
      console.log(
        "form button enabled",
        " formErrors.length === " + Object.keys(formErrors).length,
        " Object.values(formValues) === " + Object.values(formValues)
      );
    } else {
      setButtonDisabled(true);
      console.log(
        "form button disabled",
        " formErrors.length === " + Object.keys(formErrors).length,
        " Object.values(formValues) === " + Object.values(formValues)
      );
    }
  }, [formErrors, formValues]);

  return (
    <Styles name='Contact' id='Contact'>
      <Container className='shadow-lg'>
        <section>
          <header>
            <h3>Contact</h3>
          </header>
          <Form>
            <div className='form-group'>
              <Form.Label htmlFor='username'>Name</Form.Label>
              <Form.Control
                type='text'
                name='username'
                className='form-control'
                id='username'
                placeholder='name'
                onBlur={handleBlurEvent}
              />
              <small id='messageHelp' className='form-text text-muted'>
                {formErrors.username}
              </small>
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
              <small id='messageHelp' className='form-text text-muted'>
                {formErrors.email}
              </small>
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
                {formErrors.message}
              </small>
            </div>
            <Button
              variant='dark'
              href='#'
              id='formButton'
              type='submit'
              disabled={buttonDisabled}
            >
              Submit
            </Button>
          </Form>
        </section>
      </Container>
    </Styles>
  );
}

export default Contact;
