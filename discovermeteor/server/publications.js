Meteor.publish('posts', function() {
  return Posts.find();
});

// Meteor.publish('allPosts', function() {
// 	return Posts.find({'author':'Tom'}, { fields: { 
// 			date: false 
// 		}});
// })