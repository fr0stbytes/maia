<template lang="html">
  <div>
    <div class="has-margin-3 pl-2">
      <h4>Categories for {{$route.params.listingType}}</h4>
    </div>
    <b-row class="has-margin-2">
      <b-col sm="12" md="7">
        <b-card header="Categories" header-tag="header">
          <b-row>
            <b-col sm="12" md="6" v-for="category in categories" :key="category.id" class="has-margin-1 has-border-bottom">
              <b-button variant="link" @click="editCategory(category.id, category.title, category.slug)">{{category.title.en}}</b-button>
            </b-col>
          </b-row>
        </b-card>
        <b-card header="Edit category" header-tag="header" v-if="openEdit">
          <b-form>
            <b-form-group id="exampleInputGroup1"
                  label="Category name:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" required
                            placeholder="The name of the category" v-model="editedTitleEn"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                  label="Slug:" label-for="exampleInput2"
                  description="A url friendly name for the category">
              <b-form-input id="exampleInput2" type="text" required
                            v-bind:placeholder="editedSlugEn" v-model="editedSlugEn"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup1"
                  label="Category name:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" required
                            placeholder="The name of the category" v-model="editedTitleGr"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                  label="Slug:" label-for="exampleInput2"
                  description="A url friendly name for the category">
              <b-form-input id="exampleInput2" type="text" required
                            placeholder="Optional" v-model="editedSlugGr"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="secondary" class="has-margin-2" @click="cancelEdit"><i class="fa fa-ban" aria-hidden="true"></i>&nbsp;&nbsp; Cancel</b-button>
            <b-button type="submit" variant="success" class="has-margin-2" @click="saveChanges"><i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;&nbsp;Save</b-button>
            <b-button type="submit" variant="danger" class="has-margin-2" @click="deleteCategory"><i class="fa fa-trash" aria-hidden="true"></i>&nbsp; Delete</b-button>
          </b-form>
        </b-card>
      </b-col>
      <b-col sm="12" md="5">
        <b-card header="Add new" header-tag="header">
          <b-form @submit.prevent="onCreateCategory">
            <b-form-group id="exampleInputGroup1"
                  label="Category name:" label-for="exampleInput1">
              <b-form-input id="exampleInput1" type="text" required
                            placeholder="The name of the category" v-model="titleEn"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup2"
                  label="Slug:" label-for="exampleInput2"
                  description="Use only small letters, dashes and no spaces">
              <b-form-input id="exampleInput2" type="text" required
                            placeholder="A url friendly name" v-model="slugEn"
              ></b-form-input>
            </b-form-group>

            <b-form-group id="exampleInputGroup3"
                  label="Greek name:" label-for="exampleInput3">
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="The Greek name of the category" v-model="titleGr"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup4"
                  label="Greek slug:" label-for="exampleInput4"
                  description="Use only small letters, dashes and no spaces">
              <b-form-input id="exampleInput4" type="text" required
                            placeholder="The Greek category slug" v-model="slugGr"
              ></b-form-input>
            </b-form-group>

            <b-button type="submit" variant="success" :block="true" class="has-margin-2"><i class="fa fa-floppy-o" aria-hidden="true"></i>&nbsp;&nbsp;Save</b-button>
          </b-form>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      titleEn: '',
      slugEn: '',
      titleGr: '',
      slugGr: '',
      openEdit: false,
      editedTitleEn: '',
      editedSlugEn: '',
      editedTitleGr: '',
      editedSlugGr: '',
      id: ''
    }
  },
  methods: {
    onCreateCategory () {
      const categoryData = {
        titleEn: this.titleEn,
        slugEn: this.slugEn,
        titleGr: this.titleGr,
        slugGr: this.slugGr,
        listingType: this.$route.params.listingType,
        location: this.$route.params.location
      }
      this.$store.dispatch('createCategory', categoryData)
      this.$data.titleEn = ''
      this.$data.slugEn = ''
      this.$data.titleGr = ''
      this.$data.slugGr = ''
    },
    editCategory ($id, $title, $slug) {
      this.openEdit = true
      this.editedTitleEn = $title.en
      this.editedSlugEn = $slug.en
      this.editedTitleGr = $title.gr
      this.editedSlugGr = $slug.gr
      this.id = $id
    },
    cancelEdit () {
      this.openEdit = false
    },
    saveChanges () {
      if (this.editedTitleEn.trim() === '' || this.editedSlugEn.trim() === '' || this.editedTitleGr.trim() === '' || this.editedSlugGr.trim() === '') {
        return
      }
      this.openEdit = false
      this.$store.dispatch('updateCategoryData', {
        id: this.id,
        titleEn: this.editedTitleEn,
        slugEn: this.editedSlugEn,
        titleGr: this.editedTitleGr,
        slugGr: this.editedSlugGr,
        listingType: this.$route.params.listingType,
        location: this.$route.params.location
      })
      console.log('id')
    },
    deleteCategory () {
      // const id = this.id
      // console.log(id)
      this.$store.dispatch('deleteCategory', {
        id: this.id,
        listingType: this.$route.params.listingType,
        location: this.$route.params.location
      })
      this.openEdit = false
    }
  },
  computed: {
    categories () {
      return this.$store.getters.loadedCategories
    }
  },
  created: function () {
    this.$store.dispatch('loadCategories', {listingType: this.$route.params.listingType, location: this.$route.params.location})
  }
}
</script>

<style lang="css">
</style>
