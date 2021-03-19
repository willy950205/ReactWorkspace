import Counter from "./Counter";
import Info from "./Info";
import Average from "./Average";

import React, { useState } from "react";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Average />
    </div>
  );
};

export default App;
