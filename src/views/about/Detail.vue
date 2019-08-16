<template>
  <ul id="viewer">
    <li>
      <img src="http://files.juheba.top:8888/yunying/logoDir/32596cced31947fb94c24fe755d151e4.jpg" alt="">
      <p>正面</p>
    </li>
    <li>
      <img src="http://files.juheba.top:8888/yunying/logoDir/b2c8f9ec90764f54a86ae8a60019d1a4.jpg" alt="">
      <p>背面</p>
    </li>
  </ul>
</template>

<script>
import Viewer from 'viewerjs';
import 'viewerjs/dist/viewer.css';

export default {
  data() {
    return {
    };
  },
  mounted() {
    this.initImageTools();
  },
  methods: {
    initImageTools() {
      // 初始化 viewerjs
      const ViewerDom = document.getElementById('viewer');
      // eslint-disable-next-line
      const viewer = new Viewer(ViewerDom);
      window.console.log(viewer);
    },
  },
};
</script>

<style scoped>
#viewer img{width:200px;height:200px;}
</style>
