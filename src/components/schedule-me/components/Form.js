import React from 'react';
import '../Form.css'
import { Formik, Form, Field } from 'formik';
import background from '../formbackground.svg'

const input1 = ({ field, form }) => { return (
  <div className="inputs">
    <label htmlFor={form.name}></label>
    <input type="text" {...field} placeholder="First Name"/>
  </div>
)}
const input2 = ({ field, form }) => { return (
  <div className="inputs">
    <label htmlFor={field.name}></label>
    <input type="text" {...field} placeholder="Last Name"/>
  </div>
)}
const input3 = ({ field, form }) => { return (
  <div className="inputs">
    <label htmlFor={field.name}></label>
    <input type="number" {...field} placeholder="Phone"/>
  </div>
)}

const getSuffix = date => {
  if (date >= 10 && date < 21) return "th"
  const string = date.toString().split('').pop()
  switch (string) {
    case "1":
      return "st"
    case "2":
      return "nd"
    case "3":
      return "rd"
    default:
      return "th"
  }
}

const MyForm = ({weekDay,year,month,date,handleClick}) => {
  const dateSuffix = getSuffix(date)
  return (
  <div id="sch-form" className="form-container" style={{backgroundImage: `url(${background})`}} onClick={event => { event.stopPropagation() }}>
    <h2 className="form-header">Scheduling on</h2>
    <h2 className="form-header">{`${weekDay}, ${month} ${date}${dateSuffix}`}</h2>
    <span className="form-prompt">Provide us with your contact info <br/> to get in touch:</span>
    <Formik
      initialValues={{ firstName: '', lastName: '', number: '', day: weekDay, month, date, year }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          handleClick()
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="firstName">
            {input1}
          </Field>
          <Field name="lastName" >
            {input2}
          </Field>
          <Field name="number" >
            {input3}
          </Field>
          <div className="button-container">
            <button type="submit" className="form-submit-btn">
              <div className="shine"></div>
              <span>Book!</span>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  </div>
)};

export default MyForm;