
    <template>
    <div class="container-fluid">
        <div class="row">
            <div class="mt-5 col-lg-12 shadow rounded">
                <p class="display-5 text-success mt-2"> User Login </p>
                <form action="" @submit.prevent='login'> 
                    <input type="email" class="form-control my-2" placeholder="Email" v-model="email" />
                    <input type="password" class="form-control my-2" placeholder="Password" v-model="password" />
            
                    <div v-if="!loadingStatus">
                        <button @click="login" :disabled="!email || !password" type="submit" class="btn btn-success w-100 mx-auto my-2"> Login </button>
                    </div>
                    <div v-if="loadingStatus" class="loader mx-auto">
                        <!-- <small class=" loader-text text-success">Loading..</small> -->
                         <small class="load"></small>
                    </div>
                </form>
                <p>Don't have an account yet?<RouterLink to="/register"> Register Here </RouterLink></p>
            </div>
        </div>
    </div>

</template>

<script>
import axios from 'axios'
import './Mycss.css';
//import Dashboard from '../views/DashboardView.vue'; 
import UploadProduct from '../views/UploadProductView.vue'
import { RouterLink, RouterView, createRouter, createWebHistory } from "vue-router";

export default {
    data(){
            return{
                router: createRouter({
                history:createWebHistory(),
                routes:[
                       {path:'/uploadproduct', name:'uploadproduct', component:UploadProduct },
                ],    
            }),
                loginURL:"https://nodejs-lernyappeccommerceserver.onrender.com/user/signin",
                
                //loginURL:"http://localhost:7000/user/signin",
                
                email : "",
                password : "",
                loadingStatus:false
            }
    },

    methods:{
   
        login(){
            let obj = {email:this.email, password:this.password}
            this.loadingStatus=true
            axios.post(this.loginURL, obj)
                .then(response=>{

                    if (response.data.status){
                        // alert(response.data.message)
                        this.loadingStatus=true;
                        localStorage.token = response.data.token;  
                        localStorage.setItem('email', JSON.stringify(this.email));
                        this.$router.push('/uploadproduct')
                        
                    }
                    else{
                        alert(response.data.message)
                    }
                })
                .catch(error=>{
                    console.log(error);
                })
            
        }
    }
}
</script>