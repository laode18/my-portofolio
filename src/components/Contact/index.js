import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { CircularProgress } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 1350px;
  padding: 0px 0px 80px 0px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled(motion.form)`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  border: 1px solid ${({ theme }) => theme.text_secondary};
  background: transparent;
  border-radius: 12px;
  padding: 12px 16px;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  &:focus {
    border-color: ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`;

const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0,0,0,0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2000;
`;

const ModalContent = styled(motion.div)`
  background: ${({ theme }) => theme.card};
  padding: 30px;
  border-radius: 16px;
  text-align: center;
  box-shadow: rgba(0,0,0,0.2) 0px 4px 24px;
  max-width: 400px;
  width: 90%;
  color: ${({ theme }) => theme.text_primary};
`;

const CloseButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  border-radius: 8px;
  background: ${({ theme }) => theme.primary};
  color: white;
  border: none;
  cursor: pointer;
  font-size: 14px;
`;

const formVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, scale: 1.05, y: -40, transition: { duration: 0.4 } }
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.3 } }
};

const Contact = () => {
  const [open, setOpen] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);
    emailjs
      .sendForm('service_3pfrpss', 'template_3807sga', form.current, 's1VJMjYLSJvkUEeK0')
      .then(() => {
        setIsSending(false);
        setOpen(true);
        form.current.reset();
      })
      .catch((error) => {
        console.error(error.text);
        setIsSending(false);
      });
  };

  return (
    <Container>
      {isSending && (
        <LoadingOverlay>
          <CircularProgress size={80} />
        </LoadingOverlay>
      )}

      <Wrapper>
        <motion.div initial={{ opacity: 0, y: -30 }} whileInView={{ opacity: 1, y: 0 }}>
          <Title>Contact</Title>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}>
          <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
        </motion.div>

        <AnimatePresence>
          <ContactForm
            ref={form}
            onSubmit={handleSubmit}
            initial="hidden"
            whileInView="visible"
            exit="exit"
            variants={formVariants}
            viewport={{ amount: 0.15, once: false }}
          >
            <ContactTitle>Email Me 🚀</ContactTitle>
            <ContactInput placeholder="Your Email" name="from_email" required />
            <ContactInput placeholder="Your Name" name="from_name" required />
            <ContactInput placeholder="Subject" name="subject" required />
            <ContactInputMessage placeholder="Message" rows="4" name="message" required />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </AnimatePresence>

        {/* Modal */}
        <AnimatePresence>
          {open && (
            <ModalOverlay
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={modalVariants}
              onClick={() => setOpen(false)}
            >
              <ModalContent
                onClick={(e) => e.stopPropagation()}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={modalVariants}
              >
                <h2>✅ Email Sent!</h2>
                <p>Your message has been sent successfully. I'll get back to you soon!</p>
                <CloseButton onClick={() => setOpen(false)}>Close</CloseButton>
              </ModalContent>
            </ModalOverlay>
          )}
        </AnimatePresence>
      </Wrapper>
    </Container>
  );
};

export default Contact;
