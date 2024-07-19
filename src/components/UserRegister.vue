<template>
    <div class="container">
        <div class="row"> 
            <div class="col-lg-12 shadow rounded">
                <p class="fs-3 text-success">Admin Registration </p>
                <b-spinner label="Spinning"></b-spinner>
                <form action="" @submit.prevent="signup">
                    <input type="text" class="form-control my-2" placeholder="Full Name" v-model="name" />
                    <input type="email" class="form-control my-2" placeholder="Email" v-model="email" />
                    <input type="number" class="form-control my-2" placeholder="Phone Number" v-model="phonenumber" />
                    <input type="password" class="form-control my-2" placeholder="Password" v-model="password" />
                    <!-- <p>I agree with <a href="">Terms and Conditions</a><span><input type="checkbox" v-model="terms"></span></p> -->
                    <div v-if="!loadingStatus">
                        <button :disabled="!name || !email || !phonenumber || !password" type="submit"  class=" shadow btn btn-success w-100 mx-auto my-2"> 
                            Submit 
                        </button>
                    </div>
                    <div v-if="loadingStatus" class="loader mx-auto">
                        <!-- <small class=" loader-text text-success">Loading..</small> -->
                        <small class="load"></small>
                    </div>
                </form>
                <p>Already have an account?<RouterLink to="/login"> Login Here </RouterLink></p>
            </div>
        </div>
    </div>
</template>

<script>
    import './Mycss.css'; import './Mycss.css';
    import { ref } from "vue";
    import axios from 'axios';
    // import AdminLogin from '../views/AdminLoginView.vue'
    import UserLogin from '../views/UserLoginView.vue'
    import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";
   
    export default {
    data(){
        return{
            router: createRouter({
                history:createWebHistory(),
                routes:[
                       {path:'/login', name:'login', component:UserLogin },
                        // {path:'/register', name:'register', component:UserRegister },
                ],    
            }),
           
            //registerURL:"http://localhost:7000/user/register",
            registerURL:"https://nodejs-lernyappeccommerceserver.onrender.com/user/register",
            
            name: "", email : "", phonenumber : "", password : "", loadingStatus:false,
        }
    },

    methods:{
           signup(){
                this.loadingStatus=true;
                let obj = {name:this.name, email:this.email, phonenumber:this.phonenumber, password:this.password}
                axios.post(this.registerURL, obj)
                .then(response=>{
                    if(response.data.status){
                        this.loadingStatus=false;
                        alert(response.data.message)
                        this.$router.push('login')
                    }
                    else{
                        alert(response.data.message)
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
        },
    }
}

</script>