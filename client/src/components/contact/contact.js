import React from "react";
import "./contact.styles.scss";
import FormInput from "../../components/form-input/form-input";
import TextAreaInput from "../../components/textArea-input/textArea-input";
import CustomButton from "../../components/custom-button/custom-button";

const Contact = ({name, email,handleChange})=>{
    
    return(
        <div className="contactForm">
        <h2>CONTACT ME</h2>
        <span>Please leave your message below</span>
  
        <form>
          <FormInput
            handleChange={handleChange}
            name="name"
            type="text"
            value={name}
            label="name"
            required
          />
          <FormInput
            handleChange={handleChange}
            name="email"
            type="email"
            value={email}
            label="email"
            required
          />
          <TextAreaInput />
          <div className="buttons">
            <CustomButton type="submit"> Send </CustomButton>
          </div>
        </form>
      </div>
    );
}

export default Contact;