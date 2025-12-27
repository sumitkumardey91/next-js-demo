import React from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
        <h1>layout</h1>

        {children}
    </div>
  )
}

export default layout