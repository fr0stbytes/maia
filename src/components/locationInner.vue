<template lang="html">
  <div class="">
    <div>
      <b-row class="has-margin-3">
        <b-col xm="12" md="9">
          <b-row>
            <b-col xm="12" md="3" v-for="type in types" :key="type.id">
              <b-card class="yellow-border">
                  <b-button @click="onTypePicked(type.listingTypeSlug.en)" variant="link"><h4>{{type.title.en}}</h4></b-button>
              </b-card>
            </b-col>
            <b-col xm="12" md="3" class="text-center">
              <b-card>
                  <b-btn v-b-modal.modalAddType class="add-btn" variant="outline-warning"><i class="fa fa-plus" aria-hidden="true"></i> </b-btn>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col xm="12" md="3">
        </b-col>
      </b-row>
    </div>

    <b-modal id="modalAddType" ref="modalAddType" title="Add new listing type" hide-footer>
      <form @submit.prevent="onCreateType">
        <b-form-group id="exampleInputGroup1"
                  label="Listing type:" label-for="exampleInput1" >
          <b-form-input id="exampleInput1" type="text" required v-model="titleEn"
                        placeholder="Enter listing type" class="form-control"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                  label="Slug:" label-for="exampleInput2" >
          <b-form-input id="exampleInput2" type="text" required v-model="slugEn"
                        placeholder="Listing type slug" class="form-control"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup1"
                  label="Ελληνικός τίτλος:" label-for="exampleInput1" >
          <b-form-input id="exampleInput1" type="text" required v-model="titleGr"
                        placeholder="ο τύπος καταχώρησης στα Ελληνικά" class="form-control"
          ></b-form-input>
        </b-form-group>
        <b-form-group id="exampleInputGroup2"
                  label="Ελληνικό Slug:" label-for="exampleInput2" >
          <b-form-input id="exampleInput2" type="text" required v-model="slugGr"
                        placeholder="Ελληνικό slug" class="form-control"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="exampleInputGroup3"
                  label="Icon:" label-for="exampleInput3" >
          <b-form-input id="exampleInput2" type="text" required v-model="icon"
                        placeholder="eg. fa fa-star" class="form-control"
          ></b-form-input>
          <b-form-text>Font awesome icon (please use the full name, including the fa)</b-form-text>
        </b-form-group>

        <b-button type="submit" variant="primary" class="has-margin-2">Submit</b-button>
      </form>
    </b-modal>

  </div>
</template>

<script>
export default {
  data () {
    return {
      titleEn: '',
      slugEn: '',
      icon: '',
      titleGr: '',
      slugGr: ''
    }
  },
  computed: {
    types () {
      return this.$store.getters.loadedListingTypes
    }
  },
  methods: {
    onCreateType () {
      const typeData = {
        titleEn: this.titleEn,
        slugEn: this.slugEn,
        icon: this.icon,
        titleGr: this.titleGr,
        slugGr: this.slugGr,
        locationSlug: this.$route.params.location
      }
      this.$store.dispatch('createListingType', typeData)
      this.$refs.modalAddType.hide()
      this.$data.titleEn = ''
      this.$data.slugEn = ''
      this.$data.titleGr = ''
      this.$data.slugGr = ''
    },

    onTypePicked ($listingTypeSlug) {
      const location = this.$route.params.location
      const listingType = $listingTypeSlug
      // const ListingTypeId = $id
      // this.$store.dispatch('ListingTypeId', ListingTypeId)
      this.$router.push('/' + location + '/' + listingType)
    }
  }
}
</script>

<style lang="scss">
  .yellow-border {
    border-left: 5px solid #ffb85c
  }

  h4:hover {
    text-decoration: none;
  }
</style>
