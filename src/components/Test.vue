<template>
  <div id="test">
      <input type="file" v-on:change="onFileChange"/>
      <img :src="this.single"/>
      <input type="button" v-on:click="uploadFile" value="submit"/>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Test',
  data: () => ({
    single: null,
  }),
  methods: {
    onFileChange(e) {
      const [a] = e.target.files;
      // eslint-disable-next-line
      console.log(a);
      this.single = a;
    },
    uploadFile() {
      const data = new FormData();
      data.append('file', this.single);
      // eslint-disable-next-line
      console.log(this.single);
      axios.post('http://localhost:8081/api/upload/', data).then((res) => {
        if (res.status === 200) {
          // eslint-disable-next-line
          alert('okay');
        } else {
          // eslint-disable-next-line
          alert(res.status);
        }
      }).catch((err) => {
        // eslint-disable-next-line
        console.log(err);
      });
    },
  },
};
</script>

<style scoped>

</style>
