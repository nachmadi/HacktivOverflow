<template lang="html">
  <div>
    <div class="container-fluid text-center">
      <div class="row content">
        <Sidebar/>
        <div class="col-sm-8 text-left" >
          <QuestionList v-for="question in questions" v-bind:prop_qlist_question="question" v-bind:key="question._id"/>
        </div>
        <Rightbar/>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderBlog from '@/components/HeaderBlog'
import Sidebar from '@/components/Sidebar'
import QuestionList from '@/components/QuestionList'
import Rightbar from '@/components/Rightbar'
import FooterBlog from '@/components/FooterBlog'
import { mapActions, mapState } from 'vuex'
export default {
  components: {
    HeaderBlog,
    Sidebar,
    QuestionList,
    Rightbar,
    FooterBlog
  },
  //mengklone state yang ada di store
  computed: {
    ...mapState([
      'questions'
    ])
  },
  // mengklone method yang ada di store
  methods: {
    ...mapActions([
      'getAllQuestion'
    ])
  },
  created () {
    this.getAllQuestion();
  }
}

</script>
