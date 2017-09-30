<template lang="html">
  <div class="" role="tablist">
    <b-form class="has-margin-3">
      <b-row>
        <b-col sm="12" md="9">
          <b-card no-body>
            <b-tabs ref="tabs" card>
                <b-tab title="English" active>
                  <b-form-group id="exampleInputGroup1"
                        label="Title:" label-for="exampleInput1" >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="Enter title" class="form-control form-control-lg"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                        label="Description:" label-for="textarea2" >
                    <b-form-textarea id="textarea2"
                             placeholder="Enter description"
                             :rows="10"
                             :max-rows="20">
                    </b-form-textarea>
                  </b-form-group>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="What we love"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                  </b-form-fieldset>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="What to know"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                  </b-form-fieldset>
                </b-tab>
                <b-tab title="Greek">
                  <b-form-group id="exampleInputGroup1"
                        label="Τίτλος:" label-for="exampleInput1" >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="Ο τίτλος στα ελληνικά (αν υπάρχει)" class="form-control form-control-lg"
                    ></b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                        label="Περιγραφή:" label-for="textarea2" >
                    <b-form-textarea id="textarea2"
                             placeholder="Η περιγραφή στα ελληνικά"
                             :rows="10"
                             :max-rows="20">
                    </b-form-textarea>
                  </b-form-group>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="Τι μας αρέσει"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                  </b-form-fieldset>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="Τι να γνωρίζετε"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"></b-form-input>
                  </b-form-fieldset>
                </b-tab>
                <b-tab title="Menu Items">
                  <b-row class="has-margin-5">
                    <b-col sm="12" md="6">
                      <b-card header="Menu" header-tag="header">
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 1:" label-for="exampleInput1" >
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 2:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 3:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                      </b-card>
                    </b-col>
                    <b-col sm="12" md="6">
                      <b-card header="Ελληνικό Menu" header-tag="header">
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 1:" label-for="exampleInput1" >
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος (αν υπάρχει)" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 2:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος (αν υπάρχει)" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2">
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 3:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος (αν υπάρχει)" class="form-control"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10">
                          </b-form-textarea>
                        </b-form-group>
                      </b-card>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="Images">

                </b-tab>
            </b-tabs>
          </b-card>
        </b-col>

        <b-col sm="12" md="3">
          <b-card sub-title="Publish">
              <div class="has-margin-2">
                <b-button type="submit" variant="success" :block="true" @click="onCreateRestaurant">Make Public</b-button>
                <b-button type="submit" variant="outline-secondary" :block="true">Save as draft</b-button>
              </div>

          </b-card>
          <b-card header="Categories"
                  header-tag="header"
                  >
                  <i>Select one or more</i></br></br>
                  <b-form-group id="exampleInputGroup3"
                          >
                  <b-form-checkbox v-for="category in categories"
                                stacked
                                v-model="selected"
                               name="listingTypes"
                               :value="category"
                               :key="category.id"
                               class="has-margin-1"
                  >{{category.title.en}}</b-form-checkbox>
                </b-form-group>
          </b-card>
          <b-card header="Additional information"
                  header-tag="header"
                  >
            <b-form-group id="exampleInputGroup1"
                  label="Price range value:" label-for="exampleInput3"
                  description="Use only a number without the euro sign." >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="e.g. 35"
                            v-model="price"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Neighborhood:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="Village, neighborhood etc."
                            v-model="neighborhoodEn"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Phone:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="+30 210 1234567"
                            v-model="phone"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Website:" label-for="exampleInput3"
                  description="Website or facebook address. Use the full path of the address including the http://" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="http://www.domain.com"
                            v-model="website"
              ></b-form-input>
            </b-form-group>
          </b-card>
          <b-card header="Map information"
                  header-tag="header"
                  >
            <b-form-group id="exampleInputGroup1"
                  label="Longitude:" label-for="exampleInput3"
                  >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="e.g. 37.443849"
                            v-model="longitude"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Latitude:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="e.g. 24.943743"
                            v-model="latitude"
              ></b-form-input>
            </b-form-group>
          </b-card>
          <b-card header="Featured image"
                  header-tag="header"
                  >
                  <b-form-group id="exampleInputGroup3"
                        label="Upload image:" >
                        <b-form-file id="file_input2" v-model="imageUrl" choose-label="Attachment2" @change="onFilePicked"></b-form-file>
                  </b-form-group>
                  <div class="">
                    <img :src="imageUrl">
                  </div>
          </b-card>
          <b-card header="Featured image"
                  header-tag="header"
                  >
            <div class="">
              <b-form-group id="exampleInputGroup3"
                    label="Upload images:" >
                    <b-form-file id="file_input2" v-model="files" choose-label="Attachment2" multiple ref="filesinput"></b-form-file>
                    <br> {{this.files.length}} Selected files.
              </b-form-group>
              <b-button variant="success" v-bind:class="{ disabled: !files }" @click="commitFiles">Upload</b-button>
              <b-button @click="clearFiles">Reset</b-button>
              <div v-for="image in images">
                <img :src="image">
              </div>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </b-form>
  </div>
</template>

<script>
// import * as firebase from 'firebase'
import * as _ from 'lodash'
export default {
  name: 'add-restaurant',
  data () {
    return {
      titleEn: '',
      slugEn: '',
      descriptionEn: '',
      longitude: '',
      latitude: '',
      website: '',
      phone: '',
      price: '',
      neighborhoodEn: '',
      likes: 0,
      status: 'draft',

      image: '',
      imageUrl: '',
      imageLocation: '',

      imagesUrl: [],
      images: [],

      menuItemTitle1En: '',
      menuItemDescription1En: '',
      menuItemTitle2En: '',
      menuItemDescription2En: '',
      menuItemTitle3En: '',
      menuItemDescription3En: '',
      menuItemTitle4En: '',
      menuItemDescription4En: '',

      whatToKnow1En: '',
      whatToKnow2En: '',
      whatToKnow3En: '',

      whatWeLove1En: '',
      whatWeLove2En: '',
      whatWeLove3En: '',

      files: [],
      options: {
        paramName: 'file'
      }
    }
  },
  computed: {
    categories () {
      return this.$store.getters.loadedCategories
    }
  },
  methods: {
    clearFiles () {
      this.$refs.filesinput.reset()
      this.images = ''
    },
    commitFiles () {
      const filesToUpload = this.files
      const filesIdx = _.range(this.files.length)
      // console.log(filesToUpload, filesIdx)
      _.each(filesIdx, (idx) => {
        // let filename = filesToUpload[idx].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.images.push(fileReader.result)
          console.log(this.images)
        })
        fileReader.readAsDataURL(filesToUpload[idx])
        this.imagesUrl.push(filesToUpload[idx])
        console.log(this.imagesUrl)
      })
    },
    onCreateRestaurant () {
      const restaurantData = {
        titleEn: this.titleEn,
        slugEn: this.slugEn,
        descriptionEn: this.descriptionEn,
        longitude: this.longitude,
        latitude: this.latitude,
        website: this.website,
        phone: this.phone,
        price: this.price,
        neighborhoodEn: this.neighborhoodEn,
        likes: this.likes,
        status: this.status,
        images: this.imagesUrl,
        menuItemTitle1En: this.menuItemTitle1En,
        menuItemDescription1En: this.menuItemDescription1En,
        menuItemTitle2En: this.menuItemTitle2En,
        menuItemDescription2En: this.menuItemDescription2En,
        menuItemTitle3En: this.menuItemTitle3En,
        menuItemDescription3En: this.menuItemDescription3En,
        menuItemTitle4En: this.menuItemTitle4En,
        menuItemDescription4En: this.menuItemDescription4En,

        whatToKnow1En: this.whatToKnow1En,
        whatToKnow2En: this.whatToKnow2En,
        whatToKnow3En: this.whatToKnow3En,

        whatWeLove1En: this.whatWeLove1En,
        whatWeLove2En: this.whatWeLove2En,
        whatWeLove3En: this.whatWeLove3En,

        listingType: this.$route.params.listingType,
        location: this.$route.params.location
      }
      this.$store.dispatch('createRestaurant', restaurantData)
    },
    onFilePicked (event) {
      const files = event.target.files
      let filename = files[0].name
      if (filename.lastIndexOf('.') <= 0) {
        return alert('Please add a valid file!')
      }
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        this.imageUrl = fileReader.result
      })
      fileReader.readAsDataURL(files[0])
      this.image = files[0]
    }
  },
  created: function () {
    this.$store.dispatch('loadCategories', {listingType: this.$route.params.listingType, location: this.$route.params.location})
  }
}
</script>

<style lang="scss">
</style>
