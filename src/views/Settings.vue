<template>
  <div class="settings">
    <transition name="fade" appear>
      <Error :obj="error" />
    </transition>
    <Heading :obj="headingObj" />
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInUp"
      leave-active-class="animated fadeOutDown"
      appear
    >
      <div class="card-container">
        <div class="card-wrapper">
          <div class="card">
            <div class="title">
              <img src="../assets/Settings/account.svg" alt="settings" />
              <h3>Account Details</h3>
            </div>
            <div class="body">
              <div class="container">
                <div class="flex">
                  <img src="../assets/Settings/name.svg" alt="name" />
                  <h3>User Name</h3>
                </div>
                <div v-if="isEditingName" class="flex">
                  <input type="text" v-model="name" placeholder="Enter Name" />
                  <img
                    @click="saveEdit()"
                    src="../assets/Common/save.svg"
                    alt="save"
                    style="margin-left: auto; width: 30px; cursor: pointer"
                    title="Save changes"
                    class="grow-btn"
                  />
                  <img
                    src="../assets/Common/cancel.svg"
                    alt="cancel"
                    style="width: 30px; cursor: pointer"
                    title="Cancel edit"
                    @click="cancelEdit()"
                    class="grow-btn"
                  />
                </div>
                <div class="flex" v-else>
                  <div class="box">{{ name }}</div>
                  <img
                    src="../assets/Common/edit.svg"
                    alt="edit"
                    title="Edit user name"
                    style="margin-left: auto; width: 39px; cursor: pointer"
                    @click="editName()"
                    class="grow-btn"
                  />
                </div>
              </div>
              <div class="container" style="margin-top: 1rem">
                <div class="flex">
                  <img src="../assets/Settings/gmail.svg" alt="email" />
                  <h3>Email</h3>
                </div>
                <div style="margin: 0.3rem 0">{{ email }}</div>
              </div>
            </div>
          </div>
          <div class="btn-container">
            <div class="btn grow" @click="route">Reset Password</div>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="title">
              <img src="../assets/Settings/data.svg" alt />
              <h3>Security Code</h3>
            </div>
            <div class="body">
              <div class="container">
                <div class="flex">
                  <img src="../assets/Settings/name.svg" alt="name" />
                  <h3>Security Code</h3>
                </div>
                <div v-if="isEditingSecurityCode" class="flex">
                  <input
                    type="text"
                    v-model="securityCode"
                    placeholder="Enter Security Code"
                  />
                  <img
                    @click="saveEditCode()"
                    src="../assets/Common/save.svg"
                    alt="save"
                    style="margin-left: auto; width: 30px; cursor: pointer"
                    title="Save changes"
                    class="grow-btn"
                  />
                  <img
                    src="../assets/Common/cancel.svg"
                    alt="cancel"
                    style="width: 30px; cursor: pointer"
                    title="Cancel edit"
                    @click="cancelEditCode()"
                    class="grow-btn"
                  />
                </div>
                <div class="flex" v-else>
                  <div class="box">{{ securityCode }}</div>
                  <img
                    src="../assets/Common/edit.svg"
                    alt="edit"
                    title="Edit user name"
                    style="margin-left: auto; width: 39px; cursor: pointer"
                    @click="editCode()"
                    class="grow-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="card-wrapper">
          <div class="card">
            <div class="title">
              <img src="../assets/Settings/privacy.svg" alt />
              <h3>User Privacy</h3>
            </div>
            <div class="body">
              <p style="line-height: 1.3">
                Privacy is built in from the beginning. Our products and
                features include innovative privacy technologies and techniques
                designed to minimise how much of your data we — or anyone else —
                can access. And powerful security features help prevent anyone
                except you from being able to access your information.
              </p>
            </div>
          </div>
          <div class="btn-container">
            <div class="btn del grow">Delete Account</div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Heading from "../components/Design/Heading";
import Error from "../components/Modals/Error";

export default {
  components: {
    Heading,
    Error,
  },
  data() {
    return {
      headingObj: {
        h1: "Settings",
        h4: "Modify account details and manage your data & privacy",
        src: "settings.svg",
      },
      error: {
        isVisible: false,
        message: {
          code: "",
          message: "",
        },
      },
      name: this.$store.state.user.name,
      email: this.$store.state.user.email,
      securityCode: this.$store.getters.getCode.data.code,
      isEditingName: false,
      isEditingSecurityCode: false,
    };
  },
  methods: {
    route() {
      this.$router.push("/reset");
    },
    editName() {
      this.isEditingName = true;
    },
    cancelEdit() {
      this.name = this.$store.state.user.name;
      this.isEditingName = false;
    },
    saveEdit() {
      if (this.name.trim() == "") {
        this.error.message.code = "Missing Information";
        this.error.message.message = "Please fill the name properly";
        this.error.isVisible = true;
      } else {
        this.$store
          .dispatch("updateDisplayName", this.name)
          .then(() => {
            this.isEditingName = false;
          })
          .catch((err) => {
            //this.error.message = err;
            //this.error.isVisible = true;
            console.log(err);
          });
      }
    },
    editCode() {
      this.isEditingSecurityCode = true;
    },
    cancelEditCode() {
      this.securityCode = this.$store.getters.getCode.data.code;
      this.isEditingSecurityCode = false;
    },
    saveEditCode() {
      if (this.securityCode.trim() == "") {
        this.error.message.code = "Missing Information";
        this.error.message.message = "Please fill the security code properly";
        this.error.isVisible = true;
      } else {
        let payload = {
          id: this.$store.getters.getCode.id,
          code: this.securityCode,
        };
        this.$store
          .dispatch("updateSecurityCode", payload)
          .then(() => {
            this.isEditingSecurityCode = false;
          })
          .catch((err) => {
            //this.error.message = err;
            //this.error.isVisible = true;
            console.log(err);
          });
      }
    },
  },
  created() {
    localStorage.setItem("currentRoute", this.$route.path);
  },
  mounted() {
    this.$store
      .dispatch("downloadSecurityCode")
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        alert(error);
      });
  },
};
</script>

<style lang="scss" scoped>
@import "../scss/colors";
@import "../scss/custom-animations";

.settings {
  margin-top: 4.5rem;
  margin-left: 5rem;
  min-height: calc(100vh - 4.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  .card-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    .line {
      width: 100%;
      height: 1px;
      background: gray;
      margin: 0 0 1rem 0;
    }
    .card-wrapper {
      width: 23rem;
      height: 23rem;
      margin: 1.5rem;
      background: white;
      border-radius: 1rem;
      overflow: hidden;
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
      display: flex;
      flex-direction: column;
      .card {
        display: flex;
        flex-direction: column;
        .title {
          width: 100%;
          height: 3rem;
          padding: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background-image: $gradient;
          img {
            width: 50px;
            height: 50px;
          }
          h3 {
            color: white;
            margin: 0 1rem;
          }
        }
        .body {
          padding: 1rem;
          .container {
            h3 {
              margin: 0;
              color: $primary;
              font-weight: lighter;
            }
            input,
            .box {
              background: rgba(orange, 0.3);
              border: 1px solid grey;
              padding: 12px 15px;
              margin: 10px 0;
              width: 13rem;
            }
            .box {
              width: 15rem;
              background: rgba($primary, 0.3);
              font-size: small;
            }
            .flex {
              height: 100%;
              display: flex;
              justify-content: flex-start;
              align-items: center;
              color: black;
              img {
                width: 32px;
                height: 40px;
                margin: 0 0.5rem 0 0;
              }
              img:active {
                transform: scale(0.95);
              }
            }
          }
        }
      }
      .btn-container {
        margin-top: auto;
        margin-bottom: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        .btn {
          margin: 0.2rem;
          text-align: center;
          border-radius: 20px;
          border: 1px solid $primary-light;
          background-color: $primary-light;
          background-image: $gradient;
          color: #ffffff;
          font-size: 12px;
          font-weight: bold;
          padding: 12px 45px;
          letter-spacing: 1px;
          text-transform: uppercase;
          transition: transform 80ms ease-in;
          cursor: pointer;
        }
        .btn:hover {
          background-image: $gradient-inverted;
        }
        .del:hover {
          background-image: $gradient-red;
          border-color: rgba(185, 25, 25, 0.678);
        }
        .btn:focus {
          outline: none;
        }
        .btn:active {
          transform: scale(0.95);
        }
      }
    }
  }
}
</style>