<template lang="html">
  <div class="" role="tablist">
    <b-form class="has-margin-3">
      <b-row>
        <b-col sm="12" md="9">
          <b-card no-body>
            <b-tabs ref="tabs" card>
                <b-tab title="English" active>
                  <b-form-group id="exampleInputGroup1"
                        label="Title:" label-for="exampleInput1"
                        >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="Enter title" class="form-control form-control-lg"
                                  v-model="restaurantData.titleEn">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                        label="Slug:" label-for="exampleInput1"
                        >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="A url friendly version of the title" class="form-control"
                                  v-model="restaurantData.slugEn">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                        label="Description:" label-for="textarea2" >
                    <b-form-textarea id="textarea2"
                             placeholder="Enter description"
                             :rows="10"
                             :max-rows="20"
                             v-model="restaurantData.descriptionEn">
                    </b-form-textarea>
                  </b-form-group>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="What we love"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove1En"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove2En"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove3En"></b-form-input>
                  </b-form-fieldset>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="What to know"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatToKnow1En"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatToKnow2En"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatToKnow3En"></b-form-input>
                  </b-form-fieldset>
                </b-tab>
                <b-tab title="Greek">
                  <b-form-group id="exampleInputGroup1"
                        label="Τίτλος:" label-for="exampleInput1" >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="Ο τίτλος στα ελληνικά" class="form-control form-control-lg"
                                  v-model="restaurantData.titleGr">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup1"
                        label="Ελληνικό slug:" label-for="exampleInput1"
                        >
                    <b-form-input id="exampleInput1" type="text" required
                                  placeholder="Ο τίτλος χωρίς τόνους, κεφαλαία κλπ." class="form-control"
                                  v-model="restaurantData.slugGr">
                    </b-form-input>
                  </b-form-group>
                  <b-form-group id="exampleInputGroup2"
                        label="Περιγραφή:" label-for="textarea2" >
                    <b-form-textarea id="textarea2"
                             placeholder="Η περιγραφή στα ελληνικά"
                             :rows="10"
                             :max-rows="20"
                             v-model="restaurantData.descriptionGr">
                    </b-form-textarea>
                  </b-form-group>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="Τι μας αρέσει"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove1Gr"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove2Gr"></b-form-input>
                    <b-form-input type="text" class="has-margin-1" v-model="restaurantData.whatWeLove3Gr"></b-form-input>
                  </b-form-fieldset>

                  <b-form-fieldset
                    class="has-margin-3"
                    label="Τι να γνωρίζετε"
                    :label-cols="1"
                    :horizontal="true">
                    <b-form-input type="text" class="has-margin-1"v-model="restaurantData.whatToKnow1Gr"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"v-model="restaurantData.whatToKnow2Gr"></b-form-input>
                    <b-form-input type="text" class="has-margin-1"v-model="restaurantData.whatToKnow3Gr"></b-form-input>
                  </b-form-fieldset>
                </b-tab>
                <b-tab title="Menu Items">
                  <b-row class="has-margin-5">
                    <b-col sm="12" md="6">
                      <b-card header="Menu" header-tag="header" header-bg-variant="primary"
                      border-variant="primary">
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 1:" label-for="exampleInput1" >
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                                        v-model="restaurantData.menuItemTitle1En">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription1En">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 2:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                                        v-model="restaurantData.menuItemTitle2En">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription2En">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 3:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                                        v-model="restaurantData.menuItemTitle3En">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription3En">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 4:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Menu item title" class="form-control"
                                        v-model="restaurantData.menuItemTitle4En">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Menu item description"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription4En">
                          </b-form-textarea>
                        </b-form-group>
                      </b-card>
                    </b-col>
                    <b-col sm="12" md="6">
                      <b-card header="Ελληνικό Menu" header-tag="header" header-bg-variant="primary"
                      border-variant="primary">
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 1:" label-for="exampleInput1" >
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος" class="form-control"
                                        v-model="restaurantData.menuItemTitle1Gr">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription1Gr">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 2:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος" class="form-control"
                                        v-model="restaurantData.menuItemTitle2Gr">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2">
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription2Gr">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 3:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος" class="form-control"
                                        v-model="restaurantData.menuItemTitle3Gr">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription3EnGr">
                          </b-form-textarea>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Menu Item 4:" label-for="exampleInput1"
                              class="has-margin-2">
                          <b-form-input id="exampleInput1" type="text" required
                                        placeholder="Ο ελληνικός τίτλος" class="form-control"
                                        v-model="restaurantData.menuItemTitle4Gr">
                          </b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup2"
                              label="Description:" label-for="textarea2" >
                          <b-form-textarea id="textarea2"
                                   placeholder="Η ελληνική περιγραφή"
                                   :rows="3"
                                   :max-rows="10"
                                   v-model="restaurantData.menuItemDescription4Gr">
                          </b-form-textarea>
                        </b-form-group>
                      </b-card>
                    </b-col>
                  </b-row>
                </b-tab>
                <b-tab title="Galleries">
                  <b-card header="Top Gallery Images" header-bg-variant="primary"
                  border-variant="primary">
                    <div class="">
                      <b-form-group id="exampleInputGroup3"
                            label="Select images:" >
                            <b-form-file id="file_input2" v-model="galleryTop" choose-label="Attachment2" multiple ref="filesinput"></b-form-file>
                            <br> {{this.galleryTop.length}} Selected files.
                      </b-form-group>
                      <b-button variant="success" v-if="this.galleryTop.length >=1" @click="commitFiles">Upload</b-button>
                      <b-button @click="clearFiles" v-if="this.galleryTop.length >=1">Reset</b-button>
                      <b-row class="has-margin-3">
                        <b-col sm="6" md="3" v-for="image in images" :key="image.name">
                          <img :src="image" class="thumbnail">
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                  <b-card header="Bottom Gallery Images" class="has-margin-3" header-bg-variant="primary"
                  border-variant="primary">
                    <div class="">
                      <b-form-group id="exampleInputGroup3"
                            label="Select images:" >
                            <b-form-file id="file_input3" v-model="galleryBottom" choose-label="Attachment2" multiple ref="filesinput2"></b-form-file>
                            <br> {{this.galleryBottom.length}} Selected files.
                      </b-form-group>
                      <b-button variant="success" v-if="this.galleryBottom.length >=1" @click="commitFiles2">Upload</b-button>
                      <b-button @click="clearFiles2" v-if="this.galleryBottom.length >=1">Reset</b-button>
                      <b-row class="has-margin-3">
                        <b-col sm="6" md="3" v-for="image in images2" :key="image.name">
                          <img :src="image" class="thumbnail">
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </b-tab>
                <b-tab title="Extras">
                  <b-row class="has-margin-3">
                    <b-col sm="12" md="6">
                      <b-card header="Additional information"
                              header-tag="header"
                              header-bg-variant="primary"
                              border-variant="primary"
                              >
                        <b-form-group id="exampleInputGroup1"
                              label="Price range value:" label-for="exampleInput3"
                              description="Use only a number without the euro sign." >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="e.g. 35"
                                        v-model="restaurantData.price"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Neighborhood:" label-for="exampleInput3" >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="Village, neighborhood etc."
                                        v-model="restaurantData.neighborhoodEn"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Neighborhood GR:" label-for="exampleInput3" >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="Η ελληνική ονομασία της τοποθεσίας"
                                        v-model="restaurantData.neighborhoodGr"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Phone:" label-for="exampleInput3" >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="+30 210 1234567"
                                        v-model="restaurantData.phone"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Website:" label-for="exampleInput3"
                              description="Website or facebook address. Use the full path of the address including the http://" >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="http://www.domain.com"
                                        v-model="restaurantData.website"
                          ></b-form-input>
                        </b-form-group>
                      </b-card>
                    </b-col>
                    <b-col sm="12" md="6">
                      <b-card header="Map information"
                              header-tag="header"
                              header-bg-variant="primary"
                              border-variant="primary"
                              >
                        <b-form-group id="exampleInputGroup1"
                              label="Longitude:" label-for="exampleInput3"
                              >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="e.g. 37.443849"
                                        v-model="restaurantData.longitude"
                          ></b-form-input>
                        </b-form-group>
                        <b-form-group id="exampleInputGroup1"
                              label="Latitude:" label-for="exampleInput3" >
                          <b-form-input id="exampleInput3" type="text" required
                                        placeholder="e.g. 24.943743"
                                        v-model="restaurantData.latitude"
                          ></b-form-input>
                        </b-form-group>
                      </b-card>
                    </b-col>
                  </b-row>
                </b-tab>
            </b-tabs>
          </b-card>
        </b-col>

        <b-col sm="12" md="3">
          <b-card sub-title="Publish">
              <div class="has-margin-2">
                <b-button type="submit" variant="success" :block="true">Save in database</b-button>
                
              </div>

          </b-card>
          <b-card header="Categories"
                  header-tag="header"
                  header-bg-variant="primary"
                  border-variant="primary"
                  >
                  <i>Select one or more</i></br></br>
                  <b-form-group id="exampleInputGroup3"
                          >
                  <b-form-checkbox v-for="category in categories"
                                v-model="restaurantData.selected"
                               name="listingTypes"
                               :value="category"
                               :key="category.id"
                               class="has-margin-1"
                  >{{category.title.en}}</b-form-checkbox>
                </b-form-group>
          </b-card>
          <b-card header="Featured image"
                  header-tag="header"
                  header-bg-variant="primary"
                  border-variant="primary"
                  >
                  <b-form-group id="exampleInputGroup3"
                        label="Upload image:" >
                        <b-form-file id="file_input2" v-model="image" choose-label="Attachment2" @change="onFilePicked"></b-form-file>
                  </b-form-group>
                  <div class="">
                    <img :src="imageUrl">
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
      restaurantData: {
        titleEn: '',
        titleGr: '',
        slugEn: '',
        slugGr: '',
        descriptionEn: '',
        descriptionGr: '',
        longitude: '',
        latitude: '',
        website: '',
        phone: '',
        price: '',
        neighborhoodEn: '',
        neighborhoodGr: '',
        likes: 0,
        status: 'draft',
        // imageLocation: '',
        selected: [],
        menuItemTitle1En: '',
        menuItemDescription1En: '',
        menuItemTitle2En: '',
        menuItemDescription2En: '',
        menuItemTitle3En: '',
        menuItemDescription3En: '',
        menuItemTitle4En: '',
        menuItemDescription4En: '',

        menuItemTitle1Gr: '',
        menuItemDescription1Gr: '',
        menuItemTitle2Gr: '',
        menuItemDescription2Gr: '',
        menuItemTitle3Gr: '',
        menuItemDescription3Gr: '',
        menuItemTitle4Gr: '',
        menuItemDescription4Gr: '',

        whatToKnow1En: '',
        whatToKnow2En: '',
        whatToKnow3En: '',

        whatWeLove1En: '',
        whatWeLove2En: '',
        whatWeLove3En: '',

        whatToKnow1Gr: '',
        whatToKnow2Gr: '',
        whatToKnow3Gr: '',

        whatWeLove1Gr: '',
        whatWeLove2Gr: '',
        whatWeLove3Gr: ''

      },
      imagesUrl: [],
      images: [],
      images2: [],
      imagesUrl2: [],
      galleryTop: [],
      galleryBottom: [],
      image: '',
      imageUrl: ''
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
      this.images = []
    },
    commitFiles () {
      const filesToUpload = this.galleryTop
      const filesIdx = _.range(this.galleryTop.length)
      // console.log(filesToUpload, filesIdx)
      _.each(filesIdx, (idx) => {
        // let filename = filesToUpload[idx].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.images.push(fileReader.result)
          // console.log(this.images)
        })
        fileReader.readAsDataURL(filesToUpload[idx])
        this.imagesUrl.push(filesToUpload[idx])
        // console.log(this.imagesUrl)
      })
    },
    clearFiles2 () {
      this.$refs.filesinput2.reset()
      this.images2 = []
    },
    commitFiles2 () {
      const filesToUpload2 = this.galleryBottom
      const files2Idx = _.range(this.galleryBottom.length)
      // console.log(filesToUpload, filesIdx)
      _.each(files2Idx, (idx) => {
        // let filename = filesToUpload[idx].name
        const fileReader = new FileReader()
        fileReader.addEventListener('load', () => {
          this.images2.push(fileReader.result)
          // console.log(this.images2)
        })
        fileReader.readAsDataURL(filesToUpload2[idx])
        this.imagesUrl2.push(filesToUpload2[idx])
        // console.log(this.imagesUrl)
      })
    },
    onCreateRestaurant () {
      const fullRestaurant = {
        listingType: this.$route.params.listingType,
        location: this.$route.params.location,
        images: this.imagesUrl,
        images2: this.imagesUrl2,
        image: this.image,
        restaurantData: this.restaurantData
      }

      this.$store.dispatch('createRestaurant', fullRestaurant)
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
      this.restaurantData.image = files[0]
    }
  },
  created: function () {
    this.$store.dispatch('loadCategories', {listingType: this.$route.params.listingType, location: this.$route.params.location})
  }
}
</script>

<style lang="scss" scoped>

</style>
