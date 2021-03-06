import React from 'react';
import {
  FormSpace,
} from 'azrmui/core/FormInputs';
import {
  FormCheckboxPreset,
  addOnPressEnterEvent,
} from 'azrmui/utils/InputLinker/helpers';

import {
  createSimpleAccountInput,
  createValidPasswordInput,
} from './inputConfigs';

export default (defaultRememberMe = false) => [
  createSimpleAccountInput(),
  {
    ...createValidPasswordInput(),
    extraOptions: { space: <FormSpace variant="content2" /> },
  },
  {
    name: 'agreed',
    presets: [FormCheckboxPreset, addOnPressEnterEvent('handleSubmit')],
    props: { dense: 'true', color: 'primary' },
    defaultValue: false,
    mwRender: ({ link: { hostProps }, options: { userAgreementLabel } }) => ({
      label: hostProps.comfirmUserAgreement && userAgreementLabel,
    }),
  },
];
