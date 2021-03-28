<template>
  <div class="wrapper">
    <div class="header">
      <slot name="header" />
    </div>

    <div class="main">
      <div class="sidebar">
        <slot name="sidebar" />
      </div>
      <div class="content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  height: 100vh;
}
.header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 0 0 20px;
  font-size: 20px;
  font-family: Arial;
}
.main {
  height: calc(100vh - 50px);
  border-top: 2px solid silver;
  display: flex;
}
.sidebar { 
  padding: 10px;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 300px;
  border-right: 2px solid silver;
}
.content {
  width: 100%;
  margin: 10px;
}
</style>