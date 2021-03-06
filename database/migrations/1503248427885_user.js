'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('username', 50).notNullable().unique()
      table.string('password', 100).notNullable()
      table.boolean('is_active').defaultTo(false)
      table.boolean('is_admin').defaultTo(false)
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
