<template lang="html">
  <div class="panel panel-primary">
    <div class="panel-heading">
    <h3 class="panel-title">Panel primary</h3>
    </div>
    <div class="panel-body">
        <form class="form-horizontal">
          <fieldset>
            <div class="form-group">
              <label for="textArea" class="col-lg-2 control-label">Caption</label>
              <div class="col-lg-10">
                <textarea class="form-control" rows="3" id="textArea" v-model="frmQuestion.caption" />
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
                <button class="btn btn-default" @click="cancleQueston();">Cancel</button>
                <button class="btn btn-primary" @click="updateQuestion();">Update</button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
      </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      frmQuestion:{
        userid: "",
        caption: "",
        question: ""
      }
    }
  },
  props: ['id'] ,
  methods: {
      updateQuestion () {
        axios.put(`http://localhost:3000/questions/${this.id}`, this.frmQuestion)
        .then(data => {
          this.frmQuestion={
            userid: "",
            caption: "",
            question: ""
          }
          this.$router.push('/home');
        })
        .catch(err => {
          console.log(err)
        })
      },
      cancleQueston () {
        this.frmQuestion={
          userid: "",
          caption: "",
          question: ""
        }
        this.$router.push('/home');
      },
      getOneQuestion () {
        axios.get(`http://localhost:3000/questions/${this.id}`)
        .then(({ data }) => {
          console.log(data)
          this.frmQuestion=data
        })
        .catch(err => console.log(err))
      }
    },
    created () {
      console.log('masuk sini');
      this.getOneQuestion();
    }
}
</script>
