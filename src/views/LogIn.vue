<template>
  <div class="contenedor">
    <img src="@/assets/Ilustration.svg" class="ilustration" alt="ilustration">
    <div class="login">
      <img src="@/assets/logo.svg" class="logo" alt="Logo Capbook">
      <div style="height: 36px"></div>
      <h1 class="title">Bienvenido a capbook.</h1>
      <span class="no-account">
        ¿No tienes una cuenta?
        <a href="#">Regístrate</a>
      </span>
      <div style="height: 2rem"></div>
      <input type="text" class="credentials" placeholder="Correo electrónico">
      <input type="password" class="credentials password" placeholder="Contraseña">
      <button class="btn btnLogin" @click="$router.push('Home')">Inicia sesión</button>
      <p>- o -</p>
      <button class="btn btnGoogle">
        <img src="@/assets/google.svg" alt="G">
        Inicia con Google
      </button>
      <div class="terms">
        <span>Términos y condiciones</span>
        <span>Aviso de Privacidad</span>
        <span>Soporte</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  metaInfo: {
    title: "Iniciar sesión",
    titleTemplate: "%s - Capbook",
    htmlAttrs: {
      lang: "es",
      amp: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.contenedor {
  width: 100%;
  height: 100vh;
  background-color: #6A2DF2;
  box-sizing: border-box;

  @media only screen and (max-width: 920px){
    text-align: center;
    .ilustration {
      display: none;
    }
  }

  .ilustration {
    position: absolute;
    right: 120px;
    height: 100%;
  }

  .login {
    box-sizing: border-box;
    background-color: #FFF;
    padding: 72px 72px 12px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 36px;
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    width: 448px;
    height: 100vh;

    .title {
      font-size: 1.6rem;
      font-weight: 900;
    }

    .no-account {
      font-weight: 600;
      color: #646464;
      a {
        text-decoration: none;
        font-weight: 900;
        color: #006CF9;
      }
    }

    .credentials {
      box-sizing: border-box;
      padding: 16px 16px 18px;
      margin-bottom: 12px;
      background-color: #EDEDED;
      border: none;
      border-radius: 16px;
      width: 100%;
      max-width: 388px;
      &:focus {
        outline: none;
      }
    }

    .btn {
      cursor: pointer;
      box-sizing: border-box;
      padding: 16px 16px 18px;
      margin-bottom: 6px;
      transition: 0.3s;
      border: none;
      border-radius: 16px;
      width: 100%;
      max-width: 388px;
      &:focus {
        outline: none;
      }
    }

    .btnLogin {
      background-color: #6A2DF2;
      color: white;
      &:hover{
        background-color: #3a109a;
      }
    }

    .btnGoogle {
      box-shadow: 0px 8px 28px 1px rgba(0, 0, 0, 0.1);
      margin-top: 12px;
      background-color: #ffffff;
      color: #2B2B2B;
      &:hover {
        margin-top: 8px;
      }
      img {
        height: 18px;
        margin-right: 8px;
      }
    }

    .terms {
      position: absolute;
      box-sizing: border-box;
      justify-content: space-between;
      width:86%;
      left: 24px;
      bottom: 24px;
      display: flex;

      span {
        cursor: pointer;
        font-size: 0.8rem;
        font-weight: 600;
        color: #7E7E7E;
      }
    }

    .logo {
      width: 10rem;
    }

    p {
      margin: 0;
    }

    @media only screen and (max-width: 920px){
      position: inherit;
      width: 100%;
      border-radius: 0px;
    }
  }
}
</style>