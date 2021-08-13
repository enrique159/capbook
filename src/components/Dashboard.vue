<template>
  <div :class="darkMode ? 'contenedor contenedorDark' : 'contenedor'">
    <div class="cabecera">
      <div class="logo">
        <img src="@/assets/icon.svg" alt="logo" />
        <h4>capbook.</h4>
      </div>
      <div class="searchbar">
        <input
          type="text"
          class="buscador"
          placeholder="..Buscar en el contenido"
        />
        <div class="btn searchbtn">
          <box-icon
            name="search"
            :color="darkMode ? '#565656' : '#363636'"
          ></box-icon>
        </div>
        <div class="btn notify">
          <box-icon
            name="bell"
            :color="darkMode ? '#565656' : '#363636'"
          ></box-icon>
        </div>
        <div class="btn" @click="changeDarkMode">
          <box-icon
            :name="sunmoon"
            type="solid"
            :color="darkMode ? '#2196f3' : '#363636'"
          ></box-icon>
        </div>
      </div>
    </div>
    <div class="contenido">
      <div class="titulo max-box">
        <h2>¡Buen día, {{ nombre }}!</h2>
        <h6>Estos son los nuevos datos que hemos recolectado para tí</h6>
      </div>
      <div class="card main-card medium-box-left">
        <MainCardDashboard />
      </div>
      <div class="card simple-card data-card-1 small-box-right">
        <h4>Small box right</h4>
      </div>
      <div class="card simple-card data-card-2 mini-box-6">
        <h4>Mini box 6</h4>
      </div>
      <div class="card simple-card mini-box-1 info-card-1">
        <h4>Mini box 1</h4>
      </div>
      <div class="card simple-card mini-box-2 info-card-2">
        <h4>Mini box 2</h4>
      </div>
      <div class="card simple-card mini-box-3 info-card-3">
        <h4>Mini box 3</h4>
      </div>
      <div class="card simple-card medium-box-right info-card-4">
        <h4>medium-box-right</h4>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import MainCardDashboard from "./cards/MainCard_Dashboard.vue";
export default {
  components: { MainCardDashboard },
  name: "Dashboard",
  data() {
    return {
      sunmoon: "sun",
    };
  },
  methods: {
    changeDarkMode() {
      store.dispatch("setMode");
      if (this.sunmoon == "sun") {
        this.sunmoon = "moon";
      } else {
        this.sunmoon = "sun";
      }
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
.contenedor {
  .cabecera {
    box-sizing: border-box;
    background-color: #edf0f3;
    transition: 0.3s ease-out;
    justify-content: flex-end;
    padding: 24px 24px 24px;
    position: fixed;
    display: flex;
    width: 100%;
    z-index: 2;
    left: 0;

    .logo {
      display: none;
      cursor: pointer;
      padding: 12px 12px 12px;
      transition: 0.6s;
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
    .searchbar {
      width: 100%;
      display: flex;
      justify-content: flex-end;

      .buscador {
        box-sizing: border-box;
        padding: 12px 20px 14px;
        background-color: #e7e7e7;
        transition: 0.3s ease-out;
        direction: rtl;
        border: none;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        max-width: 240px;
        &:focus {
          outline: none;
          max-width: 360px;
          background-color: #ffffff;
          box-shadow: 0 8px 32px 0 rgba(53, 53, 53, 0.1);
        }
      }
      .btn {
        position: relative;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
        margin: 0;
        margin-left: 12px;
        height: 48px;
        width: 48px;
        border-radius: 16px;
        transition: 0.3s ease-out;
        &:hover {
          box-shadow: 0 8px 32px 0 rgba(53, 53, 53, 0.1);
        }
      }
      .notify {
        &::after {
          content: "";
          background-color: rgb(247, 58, 58);
          position: absolute;
          top: 0px;
          right: 0px;
          border-radius: 50%;
          height: 9px;
          width: 9px;
        }
      }
      .searchbtn {
        display: none;
      }
    }
  }
  .contenido {
    width: 100%;
    height: 100%;
    padding: 24px;
    padding-top: 96px;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 10px;
    grid-auto-rows: minmax(88px, auto);

    .titulo {
      h2 {
        margin: 0;
        font-size: 1.6rem;
      }
      h6 {
        margin: 0;
        margin-top: 6px;
        font-size: 1rem;
        color: #808080;
        font-weight: 400;
      }
    }

    .card {
      border-radius: 10px;
      box-sizing: border-box;
      padding: 12px 24px;
    }

    .simple-card {
      background: rgb(255, 255, 255);
      backdrop-filter: blur(12.5px);
    }

    .data-card-1,
    .data-card-2 {
      grid-row: 2 / 5;
    }

    .info-card-1,
    .info-card-2,
    .info-card-3,
    .info-card-4 {
      grid-row: 5 / 7;
    }

    .main-card {
      transition: 0.3 ease-in-out;
      background-image: linear-gradient(
        to right top,
        #bef6ff,
        #b2ebff,
        #b1deff,
        #bcceff,
        #cebdf7
      );
      grid-row: 2 / 5;
    }
  }

  // Sistema Grid columnas
  .contenido {
    // MAX BOX
    .max-box {
      grid-column: 1 / 7;
    }

    // MEDIUM BOX
    .medium-box-left {
      grid-column: 1 / 4;
    }

    .medium-box-right {
      grid-column: 4 / 7;
    }

    // SMALL BOX
    .small-box-right {
      grid-column: 4 / 6;
    }

    .small-box-left {
      grid-column: 1 / 2;
    }

    .small-box-center {
      grid-column: 2 / 4;
    }

    // MINI BOX
    .mini-box-1 {
      grid-column: 1 / 2;
    }
    .mini-box-2 {
      grid-column: 2 / 3;
    }
    .mini-box-3 {
      grid-column: 3 / 4;
    }
    .mini-box-4 {
      grid-column: 4 / 5;
    }
    .mini-box-5 {
      grid-column: 5 / 6;
    }
    .mini-box-6 {
      grid-column: 6 / 7;
    }
  }

  @media only screen and (max-width: 1024px) {
    .contenido {
      grid-template-columns: repeat(4, 1fr);

      .data-card-1 {
        grid-row: 5 / 7;
      }

      .data-card-2 {
        grid-row: 8 / 9;
      }

      .info-card-1, .info-card-2 {
        grid-row: 7 / 8;
      }

      .info-card-3 {
        grid-row: 8 / 9;
      }

      .info-card-4 {
        grid-row: 5 / 7;
      }
    

      .max-box {
        grid-column: 1 / 5;
      }

      .medium-box-left {
        grid-column: 1 / 4;
      }

      .medium-box-right {
        grid-column: 1 / 5;
      }

      .small-box-right {
        grid-column: 4 / 5;
        grid-row: 2 / 5;
      }

      .small-box-left {
        grid-column: 1 / 2;
      }

      .small-box-center {
        grid-column: 2 / 4;
      }

      .mini-box-1,
      .mini-box-3,
      .mini-box-5 {
        grid-column: 1 / 3;
      }
      .mini-box-2,
      .mini-box-4,
      .mini-box-6 {
        grid-column: 3 / 5;
      }
    }
  }
  @media only screen and (max-width: 720px) {
    .contenido {
      grid-template-columns: repeat(4, 1fr);

      .data-card-1 {
        grid-row: 5 / 7;
      }


      .info-card-1, .info-card-2 {
        grid-row: 9 / 10;
      }

      .info-card-3, .data-card-2 {
        grid-row: 10 / 11;
      }

      .info-card-4 {
        grid-row: 7 / 9;
      }

      .max-box {
        grid-column: 1 / 5;
      }

      .medium-box-left,
      .medium-box-right {
        grid-column: 1 / 5;
      }

      .small-box-left,
      .small-box-right,
      .small-box-center {
        grid-column: 1 / 5;
        grid-row: 5 / 7;
      }

      .mini-box-1,
      .mini-box-3,
      .mini-box-5 {
        grid-column: 1 / 3;
      }
      .mini-box-2,
      .mini-box-4,
      .mini-box-6 {
        grid-column: 3 / 5;
      }
    }
    .cabecera {
      background-color: rgb(255, 255, 255);
      box-shadow: 0px 8px 28px 1px rgba(0, 0, 0, 0.021);
      padding: 8px 24px 8px;
      .logo {
        display: flex;
      }
      .searchbar {
        .buscador {
          display: none;
        }
        .searchbtn {
          display: flex;
        }
        .btn {
          background-color: rgb(247, 247, 247);
          &:hover {
            background-color: white;
            box-shadow: 0 8px 32px 0 rgba(53, 53, 53, 0.116);
          }
        }
      }
    }
  }
}

// VERSION DARK THEME
.contenedorDark {
  .cabecera {
    background-color: #252525;
    .logo {
      h4 {
        color: white;
      }
    }
    .searchbar {
      .buscador {
        background-color: #353535;
        &:focus {
          background-color: #131313;
          box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.336);
        }
      }
      .btn {
        background-color: #353535;
        &:hover {
          background-color: #353535;
          box-shadow: 0 8px 32px 0 rgba(20, 20, 20, 0.336);
        }
      }
    }
  }
  .contenido {
    .titulo {
      h2 {
        color: white;
      }
    }
    .card {
      background-color: #353535;
      color: white;
    }
    .main-card {
      background-image: linear-gradient(
        to right top,
        #228c81,
        #008698,
        #137da7,
        #5270a7,
        #7a6197
      );
    }
  }
}
</style>