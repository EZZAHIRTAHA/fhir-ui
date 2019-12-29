## [fhir-ui](https://healthintellect.com)

[![npm package](https://img.shields.io/npm/v/fhir-ui?style=flat-square)](https://www.npmjs.org/package/fhir-ui)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/react?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/react-dom?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/@material-ui/core?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/@material-ui/pickers?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/@material-ui/icons?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/moment?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/@date-io/core?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/@date-io/moment?style=flat-square)
![npm peer dependency version](https://img.shields.io/npm/dependency-version/fhir-ui/peer/clsx?style=flat-square)

fhir-ui [React](http://facebook.github.io/react/) components are used in conjunction with the [Material UI](http://www.material-ui.com/) component library to display [HL7 FHIR Resources](https://www.hl7.org/fhir/resourcelist.html) using [Google's Material Design](https://www.google.com/design/spec/material-design/introduction.html) specification.

## Prerequisites

- [React - Component Rendering](http://facebook.github.io/react/)
- [Material-UI - User Interface](http://material-ui.com/#/get-started/prerequisites)
- [Material-UI - Icons](https://material-ui.com/components/material-icons/)
- [Material-UI - Pickers](https://material-ui.com/components/pickers/)
- [Moment.js](https://momentjs.com/)
- [Fast Healthcare Interoperatbility Resources](https://www.hl7.org/fhir/resourcelist.html)
- [Roboto Font](http://www.google.com/fonts#UsePlace:use/Collection:Roboto:400,300,500)

## Installation

fhir-ui is available as an [npm package](https://www.npmjs.org/package/fhir-ui).

```sh
npm install --save fhir-ui
```

or

```sh
yarn add fhir-ui
```

## Theming

fhir-ui components require a theme to be provided. The quickest way to get up and running is by using the Material-UI `ThemeProvider` to inject the theme into your application context. Following that, you can to use any of the components as demonstrated in the documentation. Here is a quick example to get you started:

```jsx
import React from 'react'
import ReactDOM from 'react-dom'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import lightBlue from '@material-ui/core/colors/lightBlue'

import { PatientCard } from 'fhir-ui'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: '#FFF',
    },
    secondary: {
      light: lightBlue[300],
      main: lightBlue[500],
      dark: lightBlue[900],
      contrastText: '#FFF',
    },
    background: {
      default: '#f9f9f9',
    },
  },
})

const App = () => (
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <PatientCard patient={patient} />
    </MuiPickersUtilsProvider>
  </ThemeProvider>
)

ReactDOM.render(<App />, document.getElementById('app'))
```

**Patient Table Example**

```jsx
import React from 'react'
import { PatientTable } from 'fhir-ui'

const MyFhirComponent = () => (
  <div>
    <PatientTable
      patients={patientList}
      onRowClick={patientId => console.log('Selected Patient ID: ', patientId)}
    />
    <hr />
    <PatientDetail
      patient={patient}
      patientId={patient.id}
      onDelete={patientId => console.log('Removed Patient ID: ', patientId)}
    />
  </div>
)

export default MyFhirComponent
```

Please refer to each component's CodeSandbox.io example for an example on how to use them.

## CodeSandbox.io Examples

- [PatientCard](https://codesandbox.io/s/fhir-ui-patient-card-demo-jzyi3)
- [PatientTable](https://codesandbox.io/s/fhir-ui-patient-table-demo-f2gkg)
- [PatientDetail](https://codesandbox.io/s/fhir-ui-patient-detail-demo-cuz95)
- [ObservationTable](https://codesandbox.io/s/fhir-ui-observation-table-demo-86150)
- [ObservationDetail](https://codesandbox.io/s/fhir-ui-observation-detail-demo-5584s)

## License

This project is licensed under the terms of the
[MIT license](https://github.com/healthintellect/fhir-ui/blob/master/LICENSE)
