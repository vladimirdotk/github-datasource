import React, { useState } from 'react';
import { Input, InlineFormLabel } from '@grafana/ui';

import { QueryEditorRow } from '../components/Forms';
import { RepositoryOptions } from '../types';
import { RightColumnWidth, LeftColumnWidth } from './QueryEditor';

interface Props extends RepositoryOptions {
  onChange: (value: RepositoryOptions) => void;
}

export default (props: Props) => {
  const [repository, setRepository] = useState<string>(props.repository || '');
  const [owner, setOwner] = useState<string>(props.owner || '');

  return (
    <QueryEditorRow>
      <InlineFormLabel
        className="query-keyword"
        tooltip="The owner (organization or user) of the GitHub repository (example: 'grafana')"
        width={LeftColumnWidth}
      >
        Owner
      </InlineFormLabel>
      <Input
        css=""
        width={RightColumnWidth}
        value={owner}
        onChange={el => setOwner(el.currentTarget.value)}
        onBlur={el =>
          props.onChange({
            ...props,
            owner: el.currentTarget.value,
          })
        }
      />
      <InlineFormLabel className="query-keyword" tooltip="The name of the GitHub repository" width={LeftColumnWidth}>
        Repository
      </InlineFormLabel>
      <Input
        css=""
        width={RightColumnWidth}
        value={repository}
        onChange={el => setRepository(el.currentTarget.value)}
        onBlur={el =>
          props.onChange({
            ...props,
            repository: el.currentTarget.value,
          })
        }
      />
    </QueryEditorRow>
  );
};
