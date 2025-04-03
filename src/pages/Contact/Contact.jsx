import Joi from "joi";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm, Controller } from "react-hook-form";
import { Form } from "react-bootstrap";
import DOMPurify from "dompurify";

const Contact = () => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required(),
    message: Joi.string().min(3).max(500).required(),
  });

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: joiResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(data) {
    // Sanitize the inputs before sending them
    const sanitizedData = {
      name: DOMPurify.sanitize(data.name),
      email: DOMPurify.sanitize(data.email),
      message: DOMPurify.sanitize(data.message),
    };

    console.log(sanitizedData);

    // Resets the form after submission
    reset();
  }

  return (
    <div className="contactForm container">
      <div className="formTitle">
        <h2>Contact Us</h2>
        <p>Feel free to contact us if you have any questions.</p>
      </div>

      <Form noValidate="noValidate" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="inputBox">
          <Form.Label htmlFor="name">Full Name</Form.Label>
          <Controller
            name="name"
            control={control}
            render={({ field }) => <Form.Control {...field} id="name" />}
          />
          {errors.name && <p className="emptyInput">{errors.name.message}</p>}
        </div>
        {/* Email */}
        <div className="inputBox">
          <Form.Label htmlFor="email">Email</Form.Label>
          <Controller
            name="email"
            control={control}
            render={({ field }) => <Form.Control {...field} id="email" />}
          />
          {errors.email && <p className="emptyInput">{errors.email.message}</p>}
        </div>

        {/* Message */}
        <div className="inputBox">
          <Form.Label htmlFor="message">Message</Form.Label>
          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <Form.Control {...field} id="message" as="textarea" />
            )}
          />
          {errors.message && (
            <p className="emptyInput">{errors.message.message}</p>
          )}
        </div>
        <button type="submit" className="submitBtn">
          Submit Message
        </button>
      </Form>
    </div>
  );
};
export default Contact;
