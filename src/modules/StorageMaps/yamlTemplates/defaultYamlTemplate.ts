import { Map as ImmutableMap } from 'immutable';

import { StorageMapModel } from '@kubev2v/types';

const StorageMapModelYAMLTemplates = ImmutableMap().setIn(
  ['default'],
  `
apiVersion: ${StorageMapModel.apiGroup}/${StorageMapModel.apiVersion}
kind: ${StorageMapModel.kind}
metadata:
  name: example
spec:
  map: []
  provider:
    source: {}
    destination: {}
`,
);

const defaultYamlTemplate = StorageMapModelYAMLTemplates.getIn(['default']);

export default defaultYamlTemplate;
