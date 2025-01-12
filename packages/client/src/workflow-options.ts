import { v4 as uuid4 } from 'uuid';
import {
  WorkflowOptions as BaseWorkflowOptions,
  WorkflowOptionsWithDefaults,
} from '@temporalio/common/lib/workflow-options';
import * as iface from '@temporalio/proto';

export {
  WorkflowOptionsWithDefaults,
  CompiledWorkflowOptions,
  compileWorkflowOptions,
} from '@temporalio/common/lib/workflow-options';

export interface WorkflowOptions extends BaseWorkflowOptions {
  taskQueue: string;
}

/**
 * Adds default values to `workflowId` and `workflowIdReusePolicy` to given workflow options.
 */
export function addDefaults(opts: WorkflowOptions): WorkflowOptionsWithDefaults {
  return {
    workflowId: uuid4(),
    workflowIdReusePolicy:
      iface.temporal.api.enums.v1.WorkflowIdReusePolicy.WORKFLOW_ID_REUSE_POLICY_ALLOW_DUPLICATE_FAILED_ONLY,
    ...opts,
  };
}
