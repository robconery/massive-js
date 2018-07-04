'use strict';

describe('list functions', function () {
  let db;

  before(function () {
    return resetDb('loader').then(instance => db = instance);
  });

  after(function () {
    return db.instance.$pool.end();
  });

  describe('listTables', function () {
    it('lists tables', function () {
      assert.sameMembers(db.listTables(), ['t1', 't2', 't3', 'tA', 'one.t1', 'one.t2', 'two.t1']);
    });
  });

  describe('listViews', function () {
    it('lists views', function () {
      assert.sameMembers(db.listViews(), ['v1', 'v2', 'mv1', 'mv2', 'one.v1', 'one.v2']);
    });
  });

  describe('listFunctions', function () {
    it('lists functions', function () {
      assert.sameMembers(db.listFunctions(), ['f1', 'f2', 'one.f1', 'one.f2', 'schema', 'uuid_generate_v1', 'uuid_generate_v1mc', 'uuid_generate_v3', 'uuid_generate_v4', 'uuid_generate_v5', 'uuid_nil', 'uuid_ns_dns', 'uuid_ns_oid', 'uuid_ns_url', 'uuid_ns_x500']);
    });
  });
});
