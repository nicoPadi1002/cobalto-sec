// app/head.tsx
const basePath = process.env.BASE_PATH || ''

export default function Head() {
  return (
    <>
      <link rel="icon" type="image/png" sizes="512x512" href={`${basePath}/icon.png`} />
      <link rel="apple-touch-icon" sizes="180x180" href={`${basePath}/apple-icon.png`} />
    </>
  )
}
