import { useUser } from "@clerk/remix"
import { setCollabTrue, setCollabFalse } from "~/.server/setCollab"

const CollabToggle = () => {
  const {user} = useUser()
  
return <div className="checkbox-wrapper-35">
<input value="private" name="switch" id="switch" type="checkbox" className="switch"/>
<label htmlFor="switch">
  <span className="switch-x-text">I'm</span>
  <span className="switch-x-toggletext">
    <span className="switch-x-unchecked"><span className="switch-x-hiddenlabel">Unchecked: </span>not open to collab.</span>
    <span className="switch-x-checked"><span className="switch-x-hiddenlabel">Checked: </span>open to collab.</span>
  </span>
</label>
</div>
}
export default CollabToggle