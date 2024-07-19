import { EntityManager } from 'typeorm'

beforeEach(async () => {
  const typeormModule = global.core?.coreModules?.['typeorm']

  if (typeormModule) {
    const entityManager: EntityManager = typeormModule.subject.manager
    const tableNamesQuery = "SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = 'public' AND table_name != 'schema_migrations'"
    const tables: any = await entityManager.query(tableNamesQuery)

    for (let i = 0; i < tables.length; i++) {
      const table: any = tables[i]
      const dropQuery = `DELETE FROM "${table.table_name}"`

      await entityManager.query(dropQuery)
    }
  }
})
