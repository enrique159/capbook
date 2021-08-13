<template>
  <div :class="darkMode ? 'home homeDark' : 'home'">
    <div :class="minimize ? 'min-menu menu' : 'menu'">
      <div class="menu-box">
        <div class="logo">
          <img src="@/assets/icon.svg" alt="logo" @click="minimizeMenu" />
          <h4>capbook.</h4>
        </div>
        <div style="height: 1rem"></div>
        <div class="opciones">
          <a
            href="#"
            v-for="opcion in options"
            :class="opcion.isActive ? 'opcion active' : 'opcion'"
            :key="opcion.title"
            @click="selectOption(opcion)"
          >
            <img :src="opcion.img" alt="dashboard" />
            <h6>{{ opcion.title }}</h6>
          </a>
        </div>
        <div style="height: 1rem"></div>
        <div class="categorias">
          <div class="categoria">
            <div class="dot" style="background-color: #19d9b9"></div>
            <h4 class="nombre">En proceso</h4>
          </div>
          <div class="categoria">
            <div class="dot" style="background-color: #427deb"></div>
            <h4 class="nombre">Finalizado</h4>
          </div>
          <div class="categoria">
            <div class="dot" style="background-color: #e9b227"></div>
            <h4 class="nombre">Por terminar</h4>
          </div>
          <div class="categoria">
            <div class="dot" style="background-color: #ff4d4d"></div>
            <h4 class="nombre">Backlog</h4>
          </div>
        </div>
        <div class="perfil">
          <div class="imagen">
            <img
              src="https://picsum.photos/200"
              :class="isLoaded ? 'show' : ''"
              loading="lazy"
              @load="imgLoadedMethod"
              alt="IMG"
            />
          </div>
          <div>
            <h4>Hola! {{ nombre }}</h4>
            <a href="#">ver mi cuenta</a>
          </div>
        </div>
      </div>
    </div>
    <div :class="minimize ? 'min-content content' : 'content'">
      <dashboard />
    </div>
  </div>
</template>

<script>
import Dashboard from "../components/Dashboard.vue";
// @ is an alias to /src

export default {
  components: { Dashboard },
  name: "Home",
  metaInfo: {
    title: "Inicio",
    titleTemplate: "%s - Capbook Business Pro",
    htmlAttrs: {
      lang: "es",
      amp: true,
    },
  },
  data() {
    return {
      minimize: false,
      colorIcons: "#6A2DF2",
      isLoaded: false,
      options: [
        {
          title: "Inicio",
          img: require("@/assets/icons/dashboard.svg"),
          isActive: true,
        },
        {
          title: "Formularios",
          img: require("@/assets/icons/edit.svg"),
          isActive: false,
        },
        {
          title: "Bases de datos",
          img: require("@/assets/icons/data.svg"),
          isActive: false,
        },
        {
          title: "Reportes y análisis",
          img: require("@/assets/icons/analysis.svg"),
          isActive: false,
        },
        {
          title: "Mi equipo",
          img: require("@/assets/icons/teams.svg"),
          isActive: false,
        },
      ],
    };
  },
  methods: {
    minimizeMenu() {
      this.minimize = !this.minimize;
    },
    selectOption(option) {
      if (!option.isActive) {
        this.options.forEach((x) => (x.isActive = false));
        option.isActive = true;
      }
    },
    imgLoadedMethod() {
      this.isLoaded = true;
    },
  },
  computed: {
    nombre() {
      const user = this.$store.getters.getUser;
      return user.nombre;
    },
    darkMode() {
      return this.$store.getters.getDarkmode;
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  height: 100vh;
  width: 100vw;
  transition: 0.3s ease-out;
  background-color: rgb(237, 240, 243);

  @media only screen and (max-width: 720px) {
    .menu {
      display: none;
    }
    .content,
    .min-content {
      margin-left: 0 !important;
    }
  }

  .menu {
    position: fixed;
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
    z-index: 3;
    width: 300px;
    height: 100%;
    padding: 24px;
    .menu-box {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 8px;
      transition: 0.3s ease-out;
      background: rgb(255, 255, 255);
      //box-shadow: 0 8px 32px 0 rgba(53, 53, 53, 0.1);
      backdrop-filter: blur(12.5px);
      -webkit-backdrop-filter: blur(12.5px);
      border-radius: 10px;
      position: relative;

      .logo {
        display: flex;
        cursor: pointer;
        padding: 16px 16px 16px;
        transition: 0.6s;
        border-radius: 16px;
        &:hover {
          background-color: #f5f1fd;
        }
        img {
          height: 26px;
        }
        h4 {
          transition: 0.3s;
          font-weight: 900;
          font-size: 1.4rem;
          margin: 0 12px;
        }
      }

      .opciones {
        .opcion {
          display: flex;
          text-decoration: none;
          transition: 0.3s;
          border-radius: 16px;
          margin-bottom: 6px;
          padding: 12px 16px;
          font-size: 1.4rem;
          font-weight: 600;
          &:hover {
            background-color: #f5f1fd;
          }
          h6 {
            color: black;
            margin: 4px 12px;
            transition: 0.3s;
            white-space: nowrap;
          }
          img {
            height: 24px;
          }
        }
        .opcion.active {
          background-color: #ece7fa;
        }
      }

      .categorias {
        .categoria {
          display: flex;
          padding: 12px 22px;
          border-radius: 16px;
          transition: 0.6s;
          &:hover {
            background-color: #f5f1fd;
          }
          .dot {
            margin: 3px 0;
            background-color: red;
            min-height: 12px;
            min-width: 12px;
            height: 12px;
            width: 12px;
            border-radius: 50%;
          }
          h4 {
            margin: 0 12px 0 18px;
            transition: 0.3s;
            font-weight: 400;
            white-space: nowrap;
          }
        }
      }

      .perfil {
        position: absolute;
        transition: 0.3s;
        height: fit-content;
        bottom: 0;
        margin: 0 auto;
        display: flex;
        padding: 12px 16px;
        div {
          padding: 8px 12px;
          h4 {
            margin: 0;
            font-weight: 900;
            white-space: nowrap;
            transition: 0.3s;
          }
          a {
            transition: 0.3s;
            white-space: nowrap;
            font-weight: 600;
            font-size: 0.8rem;
            text-decoration: none;
            color: #006cf9;
          }
        }
        .imagen {
          padding: 0;
          border-radius: 50%;
          background-color: #ece7fa;
          height: 48px;
          width: 48px;
          img {
            cursor: pointer;
            opacity: 0;
            transition: 3s;
            transition: 0.3s;
            box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.151);
            border-radius: 50%;
            height: 48px;
          }
          .show {
            opacity: 1;
          }
        }
      }

      @media only screen and (max-height: 680px) {
        .categorias {
          display: none;
        }
      }
    }
  }

  .min-menu {
    width: 120px;
    h4,
    h6 {
      opacity: 0;
    }
    .perfil {
      a {
        opacity: 0;
      }
      padding: 12px 4px !important;
    }
  }

  .content {
    box-sizing: border-box;
    transition: 0.3s ease-in-out;
    margin-left: 300px;
    width: 100%;
    height: 100%;
    padding: 0;

    .content-box {
      box-sizing: border-box;
      width: 100%;
      height: 100%;
      padding: 24px;
      background: rgb(255, 255, 255);
      //box-shadow: 0 8px 32px 0 rgba(53, 53, 53, 0.1);
      backdrop-filter: blur(12.5px);
      -webkit-backdrop-filter: blur(12.5px);
      border-radius: 10px;
    }
  }

  .min-content {
    margin-left: 120px;
  }
}

.homeDark {
  background-color: #252525;
  .menu {
    .menu-box {
      background-color: #353535;
      .logo {
        h4 {
          color: white;
        }
        &:hover {
          background-color: #424242;
        }
      }
      .opciones {
        .opcion {
          h6 {
            color: white;
          }
          &:hover {
            background-color: #424242;
          }
        }
        .opcion.active {
          background-color: #202020;
        }
      }
      .categorias {
        .categoria {
          h4 {
            color: white;
          }
          &:hover {
            background-color: #424242;
          }
        }
      }
      .perfil {
        div {
          h4 {
            color: white;
          }
          a {
            color: #ec52f2;
          }
        }
      }
    }
  }
}

/* &::after {
    content: "";
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle,
      rgba(238, 146, 184, 0.918) 0,
      rgba(45, 186, 242, 0.267) 100%
    );
    background-size: 400%;
    background-repeat: no-repeat;
    animation: animation 20s ease-in-out infinite alternate;
  }  

@keyframes animation {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}  */
</style>
