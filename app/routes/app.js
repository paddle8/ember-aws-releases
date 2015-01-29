import Ember from "ember";

export default Ember.Route.extend({
  model: function () {
    return {
      id: 'archiv8',
      environments: [{
        id: 'staging',
        cloudfrontDistributionId: '',
        s3Bucket: '',
        releases: [{
          version: '1.8.1'
        }]
      }, {
        id: 'production',
        cloudfrontDistributionId: '',
        s3Bucket: '',
        releases: [{}]
      }]
    };
  }
});
