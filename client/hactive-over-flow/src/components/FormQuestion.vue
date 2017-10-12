<template lang="html">
  <div>
    <HeaderBlog/>
      <div class="container-fluid text-center">
        <div class="row content">
          <Sidebar/>
            <div class="col-sm-8 text-left" >
              <form class="form-horizontal" @submit.prevent="saveQuestion();">
                <fieldset>
                  <div class="form-group">
                    <label for="textArea" class="col-lg-2 control-label">Caption</label>
                    <div class="col-lg-10">
                      <textarea class="form-control" rows="3" id="textArea" v-model="frmQuestion.caption"/>
                    </div>
                  </div>

                  <div class="form-group">
                    <label for="textArea" class="col-lg-2 control-label">Question</label>
                    <div class="col-lg-10">
                      <textarea class="form-control" rows="3" id="textArea" v-model="frmQuestion.question"/>
                    </div>
                  </div>
                <div class="form-group">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default" @reset="cancleQueston();">Cancel</button>
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
      frmQuestion:{
        userid: "12345677899757567",
        caption: "",
        question: "",
        vote: 0
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
    saveQuestion () {
      axios.post(`http://localhost:3000/questions`, this.frmQuestion)
      .then(data => {
          console.log(data.data)
          this.cancleQueston();
      })
      .catch(err => {
        console.log(err)
      })
    },
    cancleQueston () {
      this.frmQuestion={
        userid: "",
        caption: "",
        question: "",
        vote: 0
      }
    }
  }
}
</script>
