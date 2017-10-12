<template lang="html">
  <div>
    <HeaderBlog/>
      <div class="container-fluid text-center">
        <div class="row content">
          <Sidebar/>
            <div class="col-sm-8 text-left" >
              <form class="form-horizontal" @submit.prevent="saveUser();">
                <fieldset>
                  <div class="form-group">
                    <label for="inputEmail" class="col-lg-2 control-label">Email</label>
                    <div class="col-lg-10">
                      <input type="text" class="form-control" id="inputEmail" v-model="objUser.email" placeholder="Email">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputPassword" class="col-lg-2 control-label">Password</label>
                    <div class="col-lg-10">
                      <input type="input" class="form-control" id="inputPassword" v-model="objUser.user_pass" placeholder="Password">
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="inputNama" class="col-lg-2 control-label">Nama</label>
                    <div class="col-lg-10">
                      <input type="input" class="form-control" id="inputPassword" v-model="objUser.nama" placeholder="Nama Lengkap">
                    </div>
                  </div>

                <div class="form-group">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default" @reset="cancleUser();">Cancel</button>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                  </div>
                </div>
                </fieldset>
              </form>
            </div>
            <Rightbar/>
          </div>
        </div>
      <FooterBlog/>
</div>
</template>
<script>
import HeaderBlog from '@/components/HeaderBlog'
import Sidebar from '@/components/Sidebar'
import Rightbar from '@/components/Rightbar'
import FooterBlog from '@/components/FooterBlog'

import axios from "axios"
export default {
  data () {
    return {
      objUser:{
        user_id: "",
        user_pass: "",
        nama: "",
        email: ""
      }
    }
  },
  components: {
    HeaderBlog,
    Sidebar,
    Rightbar,
    FooterBlog
  } ,
  methods: {
    saveUser () {
      axios.post(`http://localhost:3000/users/signup`, this.objUser)
      .then(data => {
          console.log(data)
          this.cancleUser()
      })
      .catch(err => {
        console.log(err)
      })
    },
    cancleUser () {
      this.objUser={
        user_id: "",
        user_pass: "",
        nama: "",
        email: ""
      }
      this.$router.push('/');
    }
  }
}
</script>
