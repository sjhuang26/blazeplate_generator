<template>
    <div class="container h-100">
        <div class="row d-flex justify-content-center">
            <div class="col-lg-4">

                <div class="card card-body">
                    <h4 class="card-title">Register</h4>

                      <form @submit.prevent="register">
                          <fieldset>

                              <FormInput v-model="register_user.name" name='name' label='Name' placeholder='Name'/>
                              <FormInput v-model="register_user.email" name='email' label='Email' placeholder='Email'/>
                              <FormInput v-model="register_user.username" name='username'  label='GitHub Username' placeholder='GitHub Username'/>
                              <FormInput v-model="register_user.password" name='password' label='Password' placeholder='Password' type='password'/>
                              <FormInput v-model="register_user.passwordverify" name='passwordverify' label='Confirm Password' placeholder='Confirm Password' type='password'/>

                              <FormSubmit :props="{ label: 'Sign Up', css: 'btn-success btn-block' }"/>

                              <p v-if="register_user.error" class="error">Bad registration information</p>

                          </fieldset>

                      </form>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FormInput from '@/components/FormInput'
import FormSubmit from '@/components/FormSubmit'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    FormInput,
    FormSubmit
  },
  computed: mapGetters({
    loading: 'auth/loading',
    register_user: 'auth/register_user'
  }),
  methods: mapActions({
    register: 'auth/register'
  })
}
</script>
