
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user').del()
    .then(function () {
      // Inserts seed entries
      return knex('user').insert([
        {email: 'admin@admin.cl', password: 'ASASASASA', createdAt: Date.now(), updatedAt: Date.now()},
      ]);
    });
};
