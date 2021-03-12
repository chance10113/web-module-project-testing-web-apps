import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import ContactForm from "./ContactForm";

// test("renders without errors", () => {
//   render(<ContactForm />);
// });

// test("renders the contact form header", () => {
//   render(<ContactForm />);
//   const header = screen.getByText(/contact form/i);
//   expect(header).toBeInTheDocument();
//   expect(header).toBeTruthy();
//   expect(header).toHaveTextContent("Contact Form");
// });

// test("renders ONE error message if user enters less then 5 characters into firstname.", async () => {
// // render, const firstNameInput, useEvent, const firstNameError, expect <- toBeInDocument
// render(<ContactForm />);
// const firstNameInput = screen.getByLabelText(/first name*/i)
// userEvent.type(firstNameInput, "four")
// const firstNameError = screen.getByText(/error: firstName must have at least 5 characters/i)
// expect(firstNameError).toBeInTheDocument()
// });

// test("renders THREE error messages if user enters no values into any fields.", async () => {
// // render
// render(<ContactForm />);
// // submit btn & events
// const submitBtn = screen.getByRole("button")
// userEvent.click(submitBtn)
// // Errors
// const firstNameError = screen.getByText(/error: firstName must have at least 5 characters/i)
// const lastNameError = screen.getByText(/error: lastName is a required field/i)
// const emailError = screen.getByText(/error: email must be a valid email address/i)
// // Expects
// expect(firstNameError).toBeInTheDocument()
// expect(lastNameError).toBeInTheDocument()
// expect(emailError).toBeInTheDocument()
// });

// test("renders ONE error message if user enters a valid first name and last name but no email.", async () => {
// // render
// render(<ContactForm />);
// // Inputs
// const firstNameInput = screen.getByLabelText(/first name*/i)
// const lastNameInput = screen.getByLabelText(/last name*/i)
// const emailInput = screen.getByLabelText(/email*/i)
// // UserEvents
// userEvent.type(firstNameInput, "Steve")
// userEvent.type(lastNameInput, "Stevenson")
// // submit btn & events
// const submitBtn = screen.getByRole("button")
// userEvent.click(submitBtn)
// // Errors
// const firstNameError = screen.queryByText(/error: firstName must have at least 5 characters/i)
// const lastNameError = screen.queryByText(/error: lastName is a required field/i)
// const emailError = screen.queryByText(/error: email must be a valid email address/i)
// // Expects
// expect(firstNameError).not.toBeInTheDocument()
// expect(lastNameError).not.toBeInTheDocument()
// expect(emailError).toBeInTheDocument()
// });

// test('renders "email must be a valid email address" if an invalid email is entered', async () => {
//     // render, const emailInput, userEvent, const emailError, await expect(emailError)
// // render
// render(<ContactForm />)
// // Input
// const emailInput = screen.getByLabelText(/email*/i)
// // userEvent
// userEvent.type(emailInput, "This is an incorrect email")
// // Error
// const emailError =  await screen.findByText(/error: email must be a valid email address/i)
// // Expect
// expect(emailError).toBeInTheDocument()
// });

// test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {
//   // render
//   render(<ContactForm />);
//   // submit btn & events
//   const submitBtn = screen.getByRole("button");
//   userEvent.click(submitBtn);
//   // Error
//   const lastNameError = screen.getByText(
//     /error: lastName is a required field/i
//   );
//   // Expect
//   expect(lastNameError).toBeInTheDocument();
// });

// test("renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.", async () => {
//   // render, inputs , userEvent, submit, inputContent, expect inputContent, message.not.toBe
//   // Render
//   render(<ContactForm />);
//   // Inputs
//   const firstNameInput = screen.queryByLabelText(/first name*/i);
//   const lastNameInput = screen.queryByLabelText(/last name*/i);
//   const emailInput = screen.queryByLabelText(/email*/i);
//   // UserEvents
//   userEvent.type(firstNameInput, "Chezzy");
//   userEvent.type(lastNameInput, "Chaz");
//   userEvent.type(emailInput, "chaz@chez.com");
//   // submit btn & events
//   const submitBtn = screen.getByRole("button");
//   userEvent.click(submitBtn);
//   // Input content
//   const firstNameInputContent = await screen.findByText(/first name:/i);
//   const lastNameInputContent = await screen.findByText(/last name:/i);
//   const emailInputContent = await screen.findByText(/email:/i);
//   const messageInputContent =  screen.queryByText(/message:/i);
//   // Expect
//   expect(firstNameInputContent).toBeInTheDocument();
//   expect(lastNameInputContent).toBeInTheDocument();
//   expect(emailInputContent).toBeInTheDocument();
//   expect(messageInputContent).not.toBeInTheDocument();
// });

test("renders all fields text when all fields are submitted.", async () => {

});
