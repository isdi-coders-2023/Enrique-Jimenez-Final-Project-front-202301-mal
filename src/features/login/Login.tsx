import { LoginStyled } from './LoginStyled';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { postNewLogin, selectLogin } from './loginSlice';
import { Link } from 'react-router-dom';

export const Login = () => {
  const dispatch = useAppDispatch();
  const selectState = useAppSelector(selectLogin);
  const showUserFeedback = () => {
    switch (selectState.status) {
      case 'failed':
        return (
          <span className="error info">
            Algo ha fallado, vuelve a intentarlo
          </span>
        );
      case 'success':
        switch (selectState.statusCode) {
          case 404:
            return (
              <span className="error info">
                Usuario o contraseña incorrecta
              </span>
            );
          case 400:
            return (
              <span className="error info">
                Por favor, introduce un email y contraseña válidos
              </span>
            );
          case 201:
            return (
              <div className="login">
                <span className="login_text">
                  Sesión iniciada correctamente
                </span>
                <Link to="/">Volver a inicio</Link>
                <Link to="/user-profile">Ver tu perfil</Link>
              </div>
            );
          default:
            return <span className="error info">Oops! Algo fue mal</span>;
        }

      case 'loading':
        return <span className="loading info"> Cargando...</span>;
      default:
        return <span className="default info"> Feedback</span>;
    }
  };

  return (
    <>
      <LoginStyled
        aria-label="form"
        className="login__form"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(postNewLogin(e.currentTarget));
        }}
      >
        <h3>Accede a tu perfil</h3>
        <input type="text" name="email" placeholder="Correo electrónico" />

        <input type="password" name="password" placeholder="Contraseña" />

        <button type="submit" value="Create" className="register__button">
          Entrar
        </button>
        {showUserFeedback()}
      </LoginStyled>
    </>
  );
};
