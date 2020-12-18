const assert = require('assert');
const sinon = require('sinon');
const proxyquire = require('proxyquire');

describe(' utils - cacheResponse', () => {
  describe('when the environment is production', () => {
    it('should set the cache header with the respective seconds', () => {
      // given
      const configStub = { config: { dev: false } };
      const cacheResponse = proxyquire('../utils/cacheResponse', {
        '../config': configStub
      });

      const resStub = sinon.stub();
      const res = { set: resStub };
      const seconds = 'foo';
      // when
      cacheResponse(res, seconds);

      // then
      assert.strictEqual(
        resStub.calledWith('Cache-Control', 'public, max-age=foo'),
        true
      );
    });
  });

  describe('when the environment is development', () => {
    it("shouldn't set the cache header", () => {
      // given
      const configStub = { config: { dev: true } };
      const cacheResponse = proxyquire('../utils/cacheResponse', {
        '../config': configStub
      });

      const resStub = sinon.stub();
      const res = { set: resStub };
      const seconds = 'foo';
      // when
      cacheResponse(res, seconds);

      // then
      assert.strictEqual(resStub.called, false);
    });
  });
});
