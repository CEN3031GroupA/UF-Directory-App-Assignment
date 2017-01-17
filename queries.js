'use strict';

var mongoose = require('mongoose'),
    Listing = require('./ListingSchema.js'),
    config = require('./config');

/* Connect to your database */
mongoose.connect(config.db.uri);

/* Fill out these functions using Mongoose queries*/

var findLibraryWest = function() {
    /*
     Find the document that contains data corresponding to Library West,
     then log it to the console.
     */
    Listing.find({ name: 'Library West' }, function(err, listing) {
        if (err) throw err;

        // object of the user
        console.log(JSON.stringify(listing));
    });
};
var removeCable = function() {
  /*
    Find the document with the code 'CABL'. This cooresponds with courses that can only be viewed 
    on cable TV. Since we live in the 21st century and most courses are now web based, go ahead
    and remove this listing from your database and log the document to the console. 
   */
  Listing.findOne({ code: 'CABL' }, function(err, listing) {
      if (err) throw err;

      if (!listing)
          return;

      listing.remove(function(err) {
          if (err) throw err;

          console.log("Listing successfully deleted..");
      });
  });
};
var updatePhelpsMemorial = function() {
  /*
    Phelps Memorial Hospital Center's address is incorrect. Find the listing, update it, and then 
    log the updated document to the console. 
   */
  Listing.findOneAndUpdate({name: 'Phelps'}, {address: '3201 Hull Rd, Gainesville, FL 32611'}, function(err, listing) {
      if (err) throw err;

      console.log(JSON.stringify(listing));
  });
};
var retrieveAllListings = function() {
  Listing.find({}, function(err, listings) {
     if (err) throw err;

      for (var i = 0; i < listings.length; i++) {
          console.log(JSON.stringify(listings[i]));
      }
  });
};

findLibraryWest();
removeCable();
updatePhelpsMemorial();
retrieveAllListings();