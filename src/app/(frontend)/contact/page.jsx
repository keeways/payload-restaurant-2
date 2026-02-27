import React from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import ContactAddress from "@/components/contact/ContactAddress";
import ContactForm from "@/components/contact/ContactForm";
import ContactMap from "@/components/contact/ContactMap";
function ContactPage() {
  return (
    <>
<Breadcrumb pageName="Contact Us" pageTitle="Contact Us" />
      <ContactAddress />
      <ContactForm />
      <ContactMap />
</>
  );
}

export default ContactPage;
