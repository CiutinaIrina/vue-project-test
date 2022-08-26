<template>
    <div class="ui secondary pointing menu">
        <a class="active item">
            Image Storage
        </a>

        <div class="right menu">
            <a href="#" class="ui item" @click="login">
                Login
            </a>
        </div> 
    </div>
</template>


<script>
    import {mapActions} from 'vuex'
    // import store from '@/store';

    export default {
        name:'AppHeader',
        mounted() {
            //  console.log(store);       
        },
        methods: {
            testMethod() {console.log("I am a test method")},
            ...mapActions({
                login: 'login'
            })
        }
    }
</script>


<style>

</style>