import { Register } from "../register";

function Demo() {
  return (
    <div>
      <h1>Remote Component Demo</h1>
    </div>
  );
}

export default Register(Demo, {
  name: "Demo",
  description: "Demo",
  id: "Demo",
  version: "1.0.0",
  properties: [],
});
