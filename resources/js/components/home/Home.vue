<template>
    <h1>Home</h1>
</template>

<script>
export default {
    created() {
            if(!User.loggedIn()){
          this.$router.push({name:'login'});
    }
    }
}
</script>

<style>

</style>
