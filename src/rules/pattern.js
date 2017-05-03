export default (sample, expected) => {
  if (typeof sample === 'undefined' || sample === null) return true;
  return expected.test(sample);
};
