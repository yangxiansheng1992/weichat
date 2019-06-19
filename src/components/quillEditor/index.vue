<template>
  <div class="wrapper">
    <div class="title" v-html="title"></div>
    <div
      class="input-wrapper"
      v-for="(option, index) in options"
      :key="index * 123"
    >
      <div class="sub-title">{{ option.item }}</div>
      <quill-editor
        class="editor"
        v-model="messages[index]"
        ref="myQuillEditor"
        @blur="onEditorBlur"
        @focus="onEditorFocus"
        @ready="onEditorReady"
      >
      </quill-editor>
    </div>
  </div>
</template>

<script>
export default {
  components: {
  },
  props: {
    item: {
      type: Object,
      // required: true
    },
    index: {
      type: Number,
      // required: true
    },
  },
  data () {
    return {
      messages: [],
      title: '<h1>富文本编辑器</h1>',
      options: [{ item: '' }],
    }
  },

  methods: {

    onEditorBlur () {
      console.log('blur', this.messages)
    },

    onEditorFocus () {
      console.log('focus', this.messages)
    },

    onEditorReady () {
      console.log('ready', this.messages)
    }
  },
}
</script>
<style lang="scss">
@import "../../styles/compass.scss";
.wrapper {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;

  .title {
    font-size: 14px;
    color: pink;
    padding-bottom: px2rem(6px);
    line-height: 150%;
  }

  .input-wrapper {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin: px2rem(5px) 0;
    box-sizing: border-box;

    .editor {
      width: 100%;
      height: px2rem(200px);
    }

    .sub-title {
      font-size: px2rem(16px);
      color: red;
    }

    .field {
      flex: 1;
      border: 1px solid yellow;
    }
  }
}

div.ql-container.ql-snow {
  height: px2rem(100px);
}

div.ql-editor.ql-blank {
  height: px2rem(50px);
}
</style>