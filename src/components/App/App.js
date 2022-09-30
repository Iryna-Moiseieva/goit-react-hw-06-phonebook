import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';
import Section from 'components/Section';
import { TitleProject } from './App.styles';

export default function App() {
  return (
    <div>
      <TitleProject>Phonebook</TitleProject>
      <Section>
        <ContactForm />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
      />
    </div>
  );
}
