import { createSelector } from 'solid-js';
import { Contacts, Home, Logo, Navbar, Photos, Project, Projects } from '../components';
import { selectedModule, navBarOpen, project } from '../store/store';
import { ifTrue } from '../tools';
import './App.css';

export function App() {
  function renderNavbar() {
    return <Navbar />;
  }

  const openModal = createSelector(project, (a, b) => !!b);

  return (
    <div class='app_container' id='app__wrapper'>
      <Logo />
      {ifTrue(navBarOpen(), renderNavbar)}
      <main>
        {ifTrue(selectedModule() === 'HOME', () => (
          <Home />
        ))}
        {ifTrue(selectedModule() === 'PROJECTS', () => (
          <Projects />
        ))}
        {ifTrue(selectedModule() === 'CONTACT', <Contacts />)}
        {ifTrue(selectedModule() === 'PHOTOS', <Photos />)}
      </main>
      {ifTrue(openModal('p'), <Project />)}
    </div>
  );
}
