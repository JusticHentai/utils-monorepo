import '../../.css/index.css'
import agentFacadeDemo from './agentFacadeDemo'
import toolCallDemo from './toolCallDemo'
import workflowRuntimeDemo from './workflowRuntimeDemo'

const UtilsAgentWorkflowRuntimeDemo = () => {
  return (
    <div>
      <div className="button" onClick={agentFacadeDemo}>
        agent facade
      </div>
      <div className="button" onClick={workflowRuntimeDemo}>
        workflow/runtime
      </div>
      <div className="button" onClick={toolCallDemo}>
        tool call
      </div>
    </div>
  )
}

export default UtilsAgentWorkflowRuntimeDemo
