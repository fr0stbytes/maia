<template>
  <div class="has-margin-5">
    <div class="">
      <b-form-group id="exampleInputGroup3"
            label="Upload images:" >
            <b-form-file id="file_input2" v-model="files" choose-label="Attachment2" multiple></b-form-file>
            <br> {{this.files.length}} Selected files.
      </b-form-group>
      <b-button type="submit" variant="success" v-bind:class="{ disabled: !files }" @click="uploadFiles">Upload</b-button>
    </div>
    <h2 class="has-margin-3">Image Gallery</h2>
    <b-row class="has-margin-3">
      <b-col xm="6" md="2" v-for="image in images" :key="image.id">
        <b-card v-bind:img-src="image.url"
          v-bind:img-alt="image.name"
          img-top>
          <p class="card-text" v-if="!$route.params.listingType">
            {{image.name}}
          </p>
          <b-button href="#" variant="outline-secondary" v-if="!$route.params.listingType" @click="selectFile(image.url)">Select</b-button>
        </b-card>
      </b-col>

    </b-row>
  </div>
</template>

<script>
// import _ from 'lodash'
export default {
  data () {
    return {
      files: [],
      imageUrl: ''
    }
  },
  methods: {
    uploadFiles () {
      const filesToUpload = this.files
      this.$store.dispatch('uploadImage', filesToUpload)
    }
  },
  computed: {
    images () {
      return this.$store.getters.loadedImages
    }
  },
  created: function () {
    this.$store.dispatch('loadImages')
  }
}
</script>

<style lang="scss" scoped>
</style>
