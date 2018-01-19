module.exports = {
  label: 'AppName',
  identifier: 'app_name',
  schemas: [
    {
      _id: 'schema_18032774474121',
      attributes: [
        {
          _id: 'attr_49758826419052',
          col_span: 6,
          datatype: 'TEXT',
          datatypeOptions: {},
          help: 'Application Name',
          identifier: 'name',
          label: 'Name',
          order: 1,
          required: true,
          unique: false
        },
        {
          _id: 'attr_6655303650558',
          col_span: 6,
          datatype: 'TEXT',
          datatypeOptions: {},
          help: 'ID of the Google Sheet used to build the application.',
          identifier: 'google_sheets_id',
          label: 'Google Sheets ID',
          order: 2,
          required: false,
          unique: false
        }
      ],
      identifier: 'google_sheet',
      identifier_plural: 'google_sheets',
      label: 'Google Sheet',
      label_plural: 'Google Sheets',
      unqiue_id_prefix: 'GS_'
    }
  ]
}
