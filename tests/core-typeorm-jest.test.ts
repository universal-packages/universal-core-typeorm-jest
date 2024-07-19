import '../src'

const queryMock = jest.fn().mockResolvedValue([{ table_name: 'table1' }, { table_name: 'table2' }])

beforeAll(async (): Promise<void> => {
  global.core = {
    coreModules: {
      typeorm: {
        subject: {
          manager: {
            query: queryMock
          }
        }
      }
    }
  } as any
})

describe('core-typeorm-jest', (): void => {
  it('clear the db before each test case', async (): Promise<void> => {
    expect(queryMock).toHaveBeenCalledTimes(3)
    expect(queryMock).toHaveBeenCalledWith("SELECT table_name FROM INFORMATION_SCHEMA.TABLES WHERE table_schema = 'public' AND table_name != 'schema_migrations'")
    expect(queryMock).toHaveBeenCalledWith('DELETE FROM "table1"')
    expect(queryMock).toHaveBeenCalledWith('DELETE FROM "table2"')
  })
})
