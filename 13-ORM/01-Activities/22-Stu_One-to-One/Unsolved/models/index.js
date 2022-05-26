const Reader = require('./Reader');
const LibraryCard = require('./LibraryCard');

// has one makes sure that only one libray card per person similiar to one drivers licences per person
Reader.hasOne(LibraryCard, {
  foreignKey: 'reader_id',
  // TODO: Add a comment describing the functionality of this property
  // when reader is deleted, the library card will also be delted.
  onDelete: 'CASCADE',
});

LibraryCard.belongsTo(Reader, {
  foreignKey: 'reader_id',
});

// TODO: Add a comment describing the functionality of this statement
// exports the objects so they can be imported using the index.js
module.exports = { Reader, LibraryCard };
