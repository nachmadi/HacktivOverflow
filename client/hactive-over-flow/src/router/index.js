import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Hello from '@/components/Hello'
import AnswerLists from '@/components/AnswerLists'
import FormQuestion from '@/components/FormQuestion'
import QuestionEditForm from '@/components/QuestionEditForm'
import SignUpForm from '@/components/SignUpForm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/question-edit-form/:id',
      name: 'QuestionEditForm',
      component: QuestionEditForm,
      props: true
    },
    {
      path: '/sign-up',
      name: 'sign-up-form',
      component: SignUpForm
    },
    {
      path: '/home',
      name: 'Hello',
      // beforeEnter: (to, from, next)=>{
      //     var token = localStorage.item('token')
      //     if(!token){
      //       next({
      //         // path yang di tuju
      //         path: '/'
      //       })
      //     } else {
      //       next();
      //     }
      // },
      component: Hello
    },
    {
      path: '/answer-lists/:_id',
      name: 'Answer_by_id_question',
      component: AnswerLists,
      props: true
    },
    {
      path: '/form-question',
      name: 'Form_Question',
      component: FormQuestion
    }

  ]
})
