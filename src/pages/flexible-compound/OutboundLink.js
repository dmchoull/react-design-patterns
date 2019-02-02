import React from "react";

function OutboundLink({ url }) {
  return (
    <button
      style={{ padding: 10, fontSize: 14 }}
      onClick={() => (window.location = url)}
    >
      Shop Now
    </button>
  );
}

export default OutboundLink;
