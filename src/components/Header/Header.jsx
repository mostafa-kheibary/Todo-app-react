import './Header.css';
const Header = () => {
  return (
    <header className='header'>
      <img className='header__icon' src='./svg/main.svg' alt='' />
      <h1 className='header__title'>Todo App</h1>
    </header>
  );
};
export default Header;
