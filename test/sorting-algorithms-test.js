var should = chai.should();
var expect = chai.expect;
mocha.setup('bdd');

// ==================Bubble Sort===============
describe('bubbleSort()', function() {
  it('should be a function', function() {
    expect(bubbleSort()).to.be.a('function');
  });
  it('should have an array with random numbers', function() {
    expect([6,5,1]).to.be.a('array');
  });
  it('should sort array least to greatest', function() {
    expect([1,5,6]).to.deep.equal([1,5,6]);
  });
});

// =================Merge Sort=================
describe('mergeSort()', function() {
  it('should be a function', function() {
    expect(bubbleSort()).to.be.a('function');
  });
  it('should have an array with random numbers', function() {
    expect([6,5,1]).to.be.a('array');
  });
  it('should sort array least to greatest', function() {
    expect([1,5,6]).to.deep.equal([1,5,6]);
  });
});
// ==============Insertion Sort================

// ================Selection Sort==============

// =================Quick Sort=================








mocha.run();