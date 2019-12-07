<template>
    <div class="panel">
        <p @click="visible = !visible">{{ titulo }}</p>
        <div class="pane-content" v-show="visible" @dblclick="fireEvent()">
        <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
 // props: ['titulo'],
    props: {
      titulo: {
        required: true,
        type: String
        }
    },

    methods: {
        fireEvent() {
          //alert('ZOOM IN!');
        }
    },

    data() {
      return {
        visible: true
      }
    }

}
</script>

<style scoped>

.panel {

}

.panel img {
  display: inline-flexbox;
  margin: 0 auto;
  width: 100%;
  margin-top: 5px;
}

.panel p {
  font-weight: bold;
  text-transform: uppercase;
  padding: 10px 0 10px;
  cursor: pointer;
} 

.panel-fade-enter, .panel-fade-leave-active {
  opacity: 0
}

.panel-fade-enter-active, .panel-fade-leave-active {
  transition: opacity .4s
}
.pane-content {
  overflow: hidden;
  height: 200px;
  vertical-align: center;
}

</style>