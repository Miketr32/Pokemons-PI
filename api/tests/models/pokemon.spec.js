const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });

  describe('image', () => {
    it('should throw an error if image is null', (done) => {
      Pokemon.create({})
      .then(() => done(new Error('It requires a image')))
      .catch(() => done())
    });
    it('should work when its a valid url', () => {
      Pokemon.create({image:'https://i.pinimg.com/564x/50/c0/5f/50c05f2225470ff6c2d84d5e5ea40a1e.jpg'})
    });
  });
});

