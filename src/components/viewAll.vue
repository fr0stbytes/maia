<template>
  <div class="container">

    <b-button @click="onCategoryPicked()" variant="outline-primary">Categories</i></b-button>
    <b-card :header="$route.params.listingType"
            header-tag="header"
            class="has-margin-3 shadow-1"
            >
      <b-button @click="onAddNew()" variant="primary add-btn" class="shadow-2"><i class="fa fa-plus" aria-hidden="true"></i></b-button>
      <b-table hover show-empty
         :fields="fields"
         :items="listings"
         class="has-margin-2"
      >
        <template slot="title" scope="data">
          <b>{{data.item.title.en}}</b><br>
          <b-btn variant="link" size="sm" @click.stop="editItem(data.item.id)" class="small-link">Edit</b-btn>
          <b-btn variant="link" size="sm" @click.stop="previewItem(data.item.id)" class="small-link">Preview</b-btn>
        </template>
        <template slot="slug" scope="data">{{data.item.slug.en}}</template>
        <template slot="status" scope="data">
          <p v-bind:class="statusType(data.item.status)"><i class="fa fa-circle" aria-hidden="true"></i> {{data.item.status}}</p>
        </template>
        <template slot="actions" scope="data">
          <b-btn variant="link" size="sm" v-if="data.item.status === 'draft'" @click.stop="setToPublic(data.item.id)" class="danger">Make public</b-btn>
          <b-btn variant="link" size="sm" v-if="data.item.status === 'published'" @click.stop="setToDraft(data.item.id)">Make draft</b-btn>
        </template>
      </b-table>
    </b-card>

  </div>
</template>

<script>
export default {
  name: 'view-all',
  data () {
    return {
      id: '',
      title: '',
      status: '',
      isDanger: 'warning',
      isSuccess: 'success',
      fields: {
        title: { label: 'Title', sortable: true },
        slug: { label: 'Slug', sortable: true },
        status: { label: 'Status' },
        actions: { label: 'Actions' }
      }
    }
  },
  methods: {
    onAddNew () {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/add-new')
    },
    onCategoryPicked () {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/categories')
    },
    statusType: function ($status) {
      if ($status === 'draft') {
        return this.isDanger
      } else {
        return this.isSuccess
      }
    },
    editItem ($id) {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/edit/' + $id)
    },
    previewItem ($id) {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      this.$router.push('/' + location + '/' + listingType + '/preview/' + $id)
    },
    setToPublic ($id, $status) {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      const id = $id
      const status = 'published'
      this.$store.dispatch('statusToPublished', {
        id,
        status,
        listingType,
        location
      })
    },
    setToDraft ($id, $status) {
      const location = this.$route.params.location
      const listingType = this.$route.params.listingType
      const id = $id
      const status = 'draft'
      this.$store.dispatch('statusToDraft', {
        id,
        status,
        listingType,
        location
      })
    }
  },
  computed: {
    listings () {
      return this.$store.getters.loadedListings
    }
  },
  created: function () {
    this.$store.dispatch('loadAll', {listingType: this.$route.params.listingType, location: this.$route.params.location})
  }
}
</script>

<style lang="scss">
  .success {
    color: #00ce6a;
  }
  .small-link {
    color: #6c6c6c;
    font-size: .9em;
    padding: 0;
  }
</style>
