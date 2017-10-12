<template lang="html">
  <div>
    <HeaderBlog/>
      <div class="container-fluid text-center">
        <div class="row content">
          <Sidebar/>
            <div class="col-sm-8 text-left" >
              <div class="panel panel-primary">
                <div class="panel-heading">
                  <h3 class="panel-title">{{question.caption}}</h3>
                </div>
                <div class="panel-body">
                  {{question.question}}
                </div>
              </div>
              <form class="form-horizontal" @submit.prevent="saveAnswer();">
                <fieldset>
                <div class="form-group">
                  <label for="textArea" class="col-lg-2 control-label">Answer</label>
                  <div class="col-lg-10">
                    <textarea class="form-control" rows="3" id="textArea" v-model="answer"/>
                  </div>
                </div>
                <div class="form-group">
                  <div class="col-lg-10 col-lg-offset-2">
                    <button type="reset" class="btn btn-default">Cancel</button>
                    <button type="submit" class="btn btn-primary" >Submit</button>
                  </div>
                </div>
                </fieldset>
              </form>
              <AnswerListDetil v-for="answer in answers" v-bind:prop_detil_list="answer" v-bind:key="answer._id"/>
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
import AnswerListDetil from "@/components/AnswerListDetil"
export default {
  props: ['_id'],
  data () {
    return {
      answers: [],
      question: {},
      answer: ""
    }
  },
  components: {
    HeaderBlog,
    Sidebar,
    Rightbar,
    FooterBlog,
    AnswerListDetil
  } ,
  methods: {
    getQuestion () {
      console.log(this._id);
      axios.get(`http://localhost:3000/questions/${this._id}`)
      .then(data => {
        console.log(data.data);
        this.question = data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    getAnswer () {
      axios.get(`http://localhost:3000/answers/${this._id}`)
      .then(data => {
        console.log(data.data);
          this.answers=data.data
      })
      .catch(err => {
        console.log(err)
      })
    },
    saveAnswer () {
      axios.post(`http://localhost:3000/answers`,{questionId:this._id,answer:this.answer, vote: 0})
      .then(data => {
          console.log(data.data);
          this.answers.push(data.data)
          this.answer="";
      })
      .catch(err => {
        console.log(err)
      })
    }
  },
  created () {
    this.getQuestion()
    this.getAnswer()
  }
}
</script>
