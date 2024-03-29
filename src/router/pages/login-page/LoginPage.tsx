import { Login } from '../../../features/auth/login/Login';
import { LoginPageStyled } from './LoginPageStyled';

export const LoginPage = () => {
  return (
    <LoginPageStyled>
      <img
        src="/assets/images/estora-piled.webp"
        alt="estoras apiladas"
        className="piledstora__img"
      />
      <Login />
    </LoginPageStyled>
  );
};
