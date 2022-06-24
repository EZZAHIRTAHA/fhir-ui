export const observation = {
  resourceType: 'Observation',
  id: 'f005',
  text: {
    status: 'generated',
    div:
      "<div xmlns=\"http://www.w3.org/1999/xhtml\"><p><b>Generated Narrative with Details</b></p><p><b>id</b>: f005</p><p><b>identifier</b>: 6327 (OFFICIAL)</p><p><b>status</b>: final</p><p><b>code</b>: Hemoglobin [Mass/volume] in Blood <span>(Details : {LOINC code '718-7' = 'Hemoglobin [Mass/volume] in Blood', given as 'Hemoglobin [Mass/volume] in Blood'})</span></p><p><b>subject</b>: <a>P. van de Heuvel</a></p><p><b>effective</b>: 05/04/2013 10:30:10 AM --&gt; 05/04/2013 10:30:10 AM</p><p><b>issued</b>: 05/04/2013 3:30:10 PM</p><p><b>performer</b>: <a>A. Langeveld</a></p><p><b>value</b>: 7.2 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></p><p><b>interpretation</b>: Low <span>(Details : {http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation code 'L' = 'Low', given as 'Low'})</span></p><h3>ReferenceRanges</h3><table><tr><td>-</td><td><b>Low</b></td><td><b>High</b></td></tr><tr><td>*</td><td>7.5 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td><td>10 g/dl<span> (Details: UCUM code g/dL = 'g/dL')</span></td></tr></table></div>",
  },
  identifier: [
    {
      use: 'official',
      system: 'http://www.bmc.nl/zorgportal/identifiers/observations',
      value: '6327',
    },
  ],
  status: 'final',
  code: {
    coding: [
      {
        system: 'http://loinc.org',
        code: '718-7',
        display: 'Hemoglobin [Mass/volume] in Blood',
      },
    ],
  },
  subject: {
    reference: 'Patient/f001',
    display: 'P. van de Heuvel',
  },
  effectivePeriod: {
    start: '2013-04-05T10:30:10+01:00',
    end: '2013-04-05T10:30:10+01:00',
  },
  issued: '2013-04-05T15:30:10+01:00',
  performer: [
    {
      reference: 'Practitioner/f005',
      display: 'A. Langeveld',
    },
  ],
  valueQuantity: {
    value: 7.2,
    unit: 'g/dl',
    system: 'http://unitsofmeasure.org',
    code: 'g/dL',
  },
  interpretation: [
    {
      coding: [
        {
          system:
            'http://terminology.hl7.org/CodeSystem/v3-ObservationInterpretation',
          code: 'L',
          display: 'Low',
        },
      ],
    },
  ],
  referenceRange: [
    {
      low: {
        value: 7.5,
        unit: 'g/dl',
        system: 'http://unitsofmeasure.org',
        code: 'g/dL',
      },
      high: {
        value: 10,
        unit: 'g/dl',
        system: 'http://unitsofmeasure.org',
        code: 'g/dL',
      },
    },
  ],
}
