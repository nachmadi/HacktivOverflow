<template lang="html">
  <div class="modal fade" id="myModal" role="dialog">
      <div class="modal-dialog">
        <!-- Modal content-->
        <div class="modal-content">
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
                  <textarea class="form-control" rows="3" id="textArea" v-model="question.caption"/>
                </div>
              </div>
              <div class="form-group">
                <label for="textArea" class="col-lg-2 control-label">Question</label>
                <div class="col-lg-10">
                  <textarea class="form-control" rows="3" id="textArea" v-model="question.question"/>
                </div>
              </div>
              <div class="form-group">
                <div class="col-lg-10 col-lg-offset-2">
                  <button type="reset" class="btn btn-default" data-dismiss="modal" @reset="cancleQueston();">Cancel</button>
                  <button type="submit" class="btn btn-primary" >Submit</button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
      </div>
    </div>

</template>

<script>
export default {
  props: ["props_question_edit"],
  data () {
    return {
      question: {}
    }
  },
  methods: {
    setQuestion () {
      this.question=this.props_question_edit
    },saveQuestion () {
      axios.put(`http://localhost:3000/questions/${props_question_edit._id}`, this.question)
      .then(data => {
          console.log(data.data)
          this.cancleQueston();
      })
      .catch(err => {
        console.log(err)
      })
    },
    cancleQueston () {
      this.question={
        userid: "12345677899757567",
        caption: "",
        question: "",
        vote: 0
      }
    }
  },
  created () {
    this.setQuestion()
  },
  computed: {
    getQuestion () {
      // `this` points to the vm instance
      return this.question;
    }
  }
}
</script>

<style lang="css">
</style>
