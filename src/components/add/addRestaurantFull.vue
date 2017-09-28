<template lang="html">
  <div class="">
    <b-form class="has-margin-3">
      <b-row>
        <b-col sm="12" md="9">

          <b-card header="English" header-tag="header">
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
          </b-card>



          <b-card header="Ελληνικά" header-tag="header" class="has-margin-5">

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
          </b-card>

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

        </b-col>

        <b-col sm="12" md="3">
          <b-card sub-title="Publish">
              <div class="has-margin-2">
                <b-button type="submit" variant="success" :block="true">Publish</b-button>
                <b-button type="submit" variant="outline-secondary" :block="true">Save draft</b-button>
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

              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Neighborhood:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="Village, neighborhood etc."
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Περιοχή:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="Η ελληνική ονομασία του neighborhood"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Phone:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="+30 210 1234567"
              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Website:" label-for="exampleInput3"
                  description="Website or facebook address. Use the full path of the address including the http://" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="http://www.domain.com"
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

              ></b-form-input>
            </b-form-group>
            <b-form-group id="exampleInputGroup1"
                  label="Latitude:" label-for="exampleInput3" >
              <b-form-input id="exampleInput3" type="text" required
                            placeholder="e.g. 24.943743"
              ></b-form-input>
            </b-form-group>
          </b-card>
          <b-card header="Featured image"
                  header-tag="header"
                  >
            <img src="http://via.placeholder.com/350x350">
            <b-form-fieldset
              label="Upload image..."
              :label-cols="3"
              >
                <b-form-file :plain="true"></b-form-file>
            </b-form-fieldset>
          </b-card>
          <b-card header="Image gallery"
                  header-tag="header"
                  >
            <img class="img-thumb" src="http://via.placeholder.com/100x100">
            <img class="img-thumb" src="http://via.placeholder.com/100x100">
            <img class="img-thumb" src="http://via.placeholder.com/100x100">
            <img class="img-thumb" src="http://via.placeholder.com/100x100">
            <b-form-fieldset
              label="Upload images..."
              :label-cols="3"
              >
                <b-form-file :plain="true" :multiple="true"></b-form-file>
            </b-form-fieldset>
          </b-card>
        </b-col>
      </b-row>
    </b-form>

  </div>
</template>

<script>
export default {
  name: 'add-restaurant',
  data () {
    return {
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
      neiborhoodGr: '',
      likes: '0',
      status: 'draft',
      featuredImage: '',
      images: [],
      selected: [],
      menuItems: [],
      whatWeLove: [],
      whatToKnow: []
    }
  },
  computed: {
    categories () {
      return this.$store.getters.loadedCategories
    }
  },
  methods: {
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
        whatToKnow2En: this.whatToKnow2En,

        whatWeLove1En: this.whatWeLove1En,
        whatWeLove2En: this.whatWeLove2En,
        whatWeLove2En: this.whatWeLove2En

      }
      this.$store.dispatch('createCategory', restaurantData)
    },
    onFilesPicked (event) {
      const files = event.target.files
      const filesArr = Array.prototype.slice.call(files)
      filesArr.forEach(f => {
        if (!f.type.match('image.*')) {
          event.target.value = event.target.type = ''
          event.target.type = 'file'
          alert('We accept only images')
        }
        // app.$data.form.image.push(f)
        const reader = new FileReader()
        reader.addEventListener('load', () => {
          this.imagesUrl = reader.result
        })
        reader.readAsDataURL(files[0])
        this.images = files[0]
        console.log(this.images)
      })
    }
  },
  created: function () {
    this.$store.dispatch('loadCategories', {listingType: this.$route.params.listingType, location: this.$route.params.location})
  }
}
</script>

<style lang="scss">
</style>
