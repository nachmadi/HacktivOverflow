<template lang="html">
  <div>
  <div class="panel panel-primary">
    <div class="panel-heading">
      <h3 class="panel-title">{{prop_qlist_question.caption}}</h3>
    </div>
    <router-link :to="{name: 'Answer_by_id_question', params:{_id: prop_qlist_question._id}}">
      <div class="panel-body">
        {{prop_qlist_question.question}}
      </div>
    </router-link>
    <div class="panel-footer">
    <router-link :to="{name: 'QuestionEditForm', params:{id: prop_qlist_question._id}}">
      <button type="button" class="btn btn-warning btn-sm" >Edit</button>
    </router-link>
      <button type="button" class="btn btn-danger btn-sm" @click="deleteAll(prop_qlist_question._id)">Delete</button>
    </div>  
  </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: ['prop_qlist_question'],
  methods: {
    ...mapActions([
      'deleteOneQuestion',
      'deleteAnswerByIdQuestion'
    ]),
    deleteAll (id) {
      this.deleteOneQuestion(id)
      this.deleteAnswerByIdQuestion(id)
    }
  }
}
</script>
