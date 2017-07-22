<template>
  <div class="container">
  
    <form>
  
      <div class="well">
        <h4> Add User</h4>
        <div class="form-group">
          <label class="pull-left"> First Name </label>
          <input type="text" class="form-control" placeholder="First Name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Last Name </label>
          <input type="text" class="form-control" placeholder="Last Name">
        </div>
        <div class="form-group">
          <label class="pull-left"> Email </label>
          <input type="text" class="form-control" placeholder="Email">
        </div>
      </div>

      <button type="submit" class="btn btn-large btn-block btn-primary full-width">Submit</button>
       <button class="btn btn-large btn-block btn-success full-width">Go User</button>
    </form>
  
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: 'hello',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
